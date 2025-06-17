
import { useEffect } from 'react';

interface AdSenseComponentProps {
  adSlot: string;
  adFormat?: string;
  width?: number;
  height?: number;
  className?: string;
}

const AdSenseComponent = ({ 
  adSlot, 
  adFormat = "auto", 
  width = 320, 
  height = 100,
  className = ""
}: AdSenseComponentProps) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={`adsense-container ${className}`}>
      <ins 
        className="adsbygoogle"
        style={{ 
          display: 'block',
          width: adFormat === "auto" ? "100%" : `${width}px`,
          height: adFormat === "auto" ? "auto" : `${height}px`
        }}
        data-ad-client="ca-pub-7511115833815306"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSenseComponent;
