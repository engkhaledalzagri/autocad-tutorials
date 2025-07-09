-- إنشاء جدول ملفات الوسائط
create table if not exists public.media_files (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  file_name text not null,
  file_type text not null,
  file_size integer not null,
  file_url text not null,
  thumbnail_url text,
  description text,
  category text not null,
  status text default 'active',
  uploaded_by uuid references auth.users(id),
  created_at timestamp with time zone default timezone('utc', now()),
  updated_at timestamp with time zone default timezone('utc', now())
);

-- إنشاء فهرس على created_at لتسريع البحث
create index if not exists idx_media_files_created_at on public.media_files(created_at desc);

-- إعداد صلاحيات الإدراج والقراءة والتعديل للمستخدمين المسجلين
alter table public.media_files
  enable row level security;

-- سياسة السماح للقراءة للجميع (يمكنك تخصيصها لاحقًا)
create policy "Allow select for all users"
  on public.media_files
  for select
  using (true);

-- سياسة السماح بالإدراج للمستخدمين المسجلين
create policy "Allow insert for authenticated"
  on public.media_files
  for insert
  with check (auth.role() = 'authenticated');

-- سياسة السماح بالتعديل والحذف لصاحب الملف فقط
create policy "Allow update and delete for owner"
  on public.media_files
  for update using (uploaded_by = auth.uid())
  with check (uploaded_by = auth.uid());

create policy "Allow delete for owner"
  on public.media_files
  for delete using (uploaded_by = auth.uid());

-- إعداد حاوية التخزين (Storage Bucket)
-- (يجب تنفيذ هذا عبر واجهة Supabase أو باستخدام dashboard، لكن إذا أردت SQL خاص بها:)
insert into storage.buckets (id, name, public) 
values ('media-files', 'media-files', true)
on conflict (id) do nothing;

-- إعطاء صلاحية القراءة للجميع على حاوية التخزين
-- (عادة إعدادات storage تتم من لوحة supabase ولكن هذه إضافة احتياطية)
