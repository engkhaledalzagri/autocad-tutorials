
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Video, Image, Calendar, User } from 'lucide-react';

interface TutorialCardProps {
  title: string;
  description: string;
  type: 'tutorial' | 'video' | 'image';
  image: string;
  date: string;
  author: string;
  tags: string[];
  featured?: boolean;
}

const TutorialCard = ({ 
  title, 
  description, 
  type, 
  image, 
  date, 
  author, 
  tags, 
  featured = false 
}: TutorialCardProps) => {
  const getTypeIcon = () => {
    switch (type) {
      case 'video':
        return <Video className="w-4 h-4" />;
      case 'image':
        return <Image className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  const getTypeColor = () => {
    switch (type) {
      case 'video':
        return 'bg-red-500';
      case 'image':
        return 'bg-green-500';
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <Card className={`group hover:shadow-xl transition-all duration-300 overflow-hidden ${featured ? 'ring-2 ring-autocad-blue' : ''}`}>
      <CardHeader className="p-0 relative">
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            <Badge className={`${getTypeColor()} text-white flex items-center gap-1`}>
              {getTypeIcon()}
              {type === 'tutorial' ? 'درس' : type === 'video' ? 'فيديو' : 'صورة'}
            </Badge>
          </div>
          {featured && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-yellow-500 text-white">مميز</Badge>
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <h3 className="text-lg font-bold text-autocad-gray mb-2 font-cairo group-hover:text-autocad-blue transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 font-cairo leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center text-xs text-gray-500 mb-3 gap-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span className="font-cairo">{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-3 h-3" />
            <span className="font-cairo">{author}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs font-cairo">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-autocad-blue hover:bg-autocad-blue/90 text-white font-cairo">
          اقرأ المزيد
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TutorialCard;
