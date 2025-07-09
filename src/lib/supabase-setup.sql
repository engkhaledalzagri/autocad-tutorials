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

create index if not exists idx_media_files_created_at on public.media_files(created_at desc);

alter table public.media_files
  enable row level security;

create policy "Allow select for all users"
  on public.media_files
  for select
  using (true);

create policy "Allow insert for authenticated"
  on public.media_files
  for insert
  with check (auth.role() = 'authenticated');

create policy "Allow update and delete for owner"
  on public.media_files
  for update using (uploaded_by = auth.uid())
  with check (uploaded_by = auth.uid());

create policy "Allow delete for owner"
  on public.media_files
  for delete using (uploaded_by = auth.uid());

insert into storage.buckets (id, name, public) 
values ('media-files', 'media-files', true)
on conflict (id) do nothing;
