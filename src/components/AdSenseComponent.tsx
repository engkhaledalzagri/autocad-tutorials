
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
      // Check if AdSense is available before trying to use it
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.log('AdSense not loaded yet, skipping ad initialization');
    }
  }, []);

  // Return a placeholder div when AdSense is not available
  if (typeof window === 'undefined' || !window.adsbygoogle) {
    return (
      <div className={`adsense-placeholder ${className}`}>
        <div 
          style={{ 
            width: adFormat === "auto" ? "100%" : `${width}px`,
            height: adFormat === "auto" ? "auto" : `${height}px`,
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666',
            fontSize: '14px',
            border: '1px solid #ddd'
          }}
        >
          إعلان
        </div>
      </div>
    );
  }

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

// Add type declaration for window.adsbygoogle
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default AdSenseComponent;
