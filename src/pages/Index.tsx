
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Calendar, Eye, ThumbsUp, ExternalLink } from 'lucide-react';
import axios from 'axios';

interface YouTubeVideo {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
    channelTitle: string;
  };
  statistics?: {
    viewCount: string;
    likeCount: string;
  };
}

const Index = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const YOUTUBE_API_KEY = 'AIzaSyD9buClrCDwAIzYlBckYOzsXTMs219sETg';
  const CHANNEL_ID = 'UCrxGtL_F9whGHdSvnwHcaQg';
  const CHANNEL_URL = 'https://youtube.com/@Eng.KhaledAl-Zagri';

  useEffect(() => {
    fetchYouTubeVideos();
  }, []);

  const fetchYouTubeVideos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=12&type=video`
      );
      
      // Get additional statistics for each video
      const videoIds = response.data.items.map((item: YouTubeVideo) => item.id.videoId).join(',');
      const statsResponse = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&id=${videoIds}&part=statistics`
      );

      // Merge video data with statistics
      const videosWithStats = response.data.items.map((video: YouTubeVideo, index: number) => ({
        ...video,
        statistics: statsResponse.data.items[index]?.statistics
      }));

      setVideos(videosWithStats);
    } catch (err) {
      console.error('Error fetching YouTube videos:', err);
      setError('فشل في تحميل الفيديوهات. يرجى المحاولة مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  const formatNumber = (num: string) => {
    const number = parseInt(num);
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + 'M';
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + 'K';
    }
    return number.toString();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const openVideo = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background font-cairo">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-cairo">
              دروس أوتوكاد من قناتي على اليوتيوب
            </h1>
            <p className="text-lg text-muted-foreground font-cairo mb-6">
              مجموعة شاملة من دروس الأوتوكاد العملية والمفيدة
            </p>
            <Button
              onClick={() => window.open(CHANNEL_URL, '_blank')}
              className="bg-red-600 hover:bg-red-700 text-white font-cairo"
            >
              <ExternalLink className="w-4 h-4 ml-2" />
              زيارة القناة على اليوتيوب
            </Button>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <span className="mr-3 text-foreground">جاري تحميل الفيديوهات...</span>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12">
              <p className="text-destructive text-lg mb-4">{error}</p>
              <Button onClick={fetchYouTubeVideos} variant="outline">
                إعادة المحاولة
              </Button>
            </div>
          )}

          {/* Videos Grid */}
          {!loading && !error && videos.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <Card 
                  key={video.id.videoId} 
                  className="group hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                  onClick={() => openVideo(video.id.videoId)}
                >
                  <CardHeader className="p-0 relative">
                    <div className="relative overflow-hidden">
                      <img 
                        src={video.snippet.thumbnails.medium.url} 
                        alt={video.snippet.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-red-600 text-white flex items-center gap-1">
                          <Play className="w-3 h-3" />
                          فيديو
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-foreground mb-2 font-cairo group-hover:text-primary transition-colors line-clamp-2">
                      {video.snippet.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 font-cairo leading-relaxed line-clamp-3">
                      {video.snippet.description}
                    </p>
                    
                    <div className="flex items-center text-xs text-muted-foreground mb-3 gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span className="font-cairo">{formatDate(video.snippet.publishedAt)}</span>
                      </div>
                      {video.statistics?.viewCount && (
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span className="font-cairo">{formatNumber(video.statistics.viewCount)} مشاهدة</span>
                        </div>
                      )}
                    </div>

                    {video.statistics?.likeCount && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <ThumbsUp className="w-3 h-3" />
                        <span className="font-cairo">{formatNumber(video.statistics.likeCount)} إعجاب</span>
                      </div>
                    )}
                  </CardContent>

                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-cairo">
                      مشاهدة على اليوتيوب
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && videos.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold text-foreground mb-4">لا توجد فيديوهات حالياً</h3>
              <p className="text-muted-foreground">سيتم إضافة المزيد من الدروس قريباً</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
