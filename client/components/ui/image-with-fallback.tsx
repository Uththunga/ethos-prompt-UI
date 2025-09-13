import React, { useState, useEffect } from 'react';
import { User, Building2 } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackType?: 'avatar' | 'logo' | 'generic';
  fallbackText?: string;
  onError?: () => void;
  onLoad?: () => void;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackType = 'generic',
  fallbackText,
  onError,
  onLoad
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setImageError(false);
    setIsLoading(true);
  }, [src]);

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
    if (onError) {
      onError();
    }
  };

  const handleImageLoad = () => {
    setIsLoading(false);
    if (onLoad) {
      onLoad();
    }
  };

  const generatePlaceholderUrl = (text: string, type: 'avatar' | 'logo' | 'generic') => {
    const encodedText = encodeURIComponent(text);
    const size = type === 'avatar' ? '150x150' : type === 'logo' ? '200x100' : '300x200';
    const bgColor = type === 'avatar' ? '6366f1' : type === 'logo' ? 'f3f4f6' : 'e5e7eb';
    const textColor = type === 'avatar' ? 'ffffff' : type === 'logo' ? '374151' : '6b7280';
    
    return `https://via.placeholder.com/${size}/${bgColor}/${textColor}?text=${encodedText}`;
  };

  const renderFallback = () => {
    const baseClasses = `flex items-center justify-center bg-gray-100 ${className}`;
    
    if (fallbackType === 'avatar') {
      return (
        <div className={`${baseClasses} rounded-full`}>
          <User className="w-1/3 h-1/3 text-gray-400" />
        </div>
      );
    }
    
    if (fallbackType === 'logo') {
      return (
        <div className={`${baseClasses} rounded-lg border border-gray-200`}>
          <Building2 className="w-1/3 h-1/3 text-gray-400" />
        </div>
      );
    }
    
    return (
      <div className={`${baseClasses} rounded-lg border border-gray-200`}>
        <div className="text-center p-4">
          <div className="text-gray-400 text-sm">Image not available</div>
          {fallbackText && (
            <div className="text-gray-600 text-xs mt-1">{fallbackText}</div>
          )}
        </div>
      </div>
    );
  };

  // If we have fallback text and the image failed, try to use a placeholder service
  if (imageError && fallbackText) {
    return (
      <img
        src={generatePlaceholderUrl(fallbackText, fallbackType)}
        alt={alt}
        className={className}
        onError={() => {
          // If even the placeholder fails, show the fallback component
          setImageError(true);
        }}
      />
    );
  }

  if (imageError) {
    return renderFallback();
  }

  return (
    <>
      {isLoading && (
        <div className={`${className} bg-gray-200 animate-pulse rounded-lg`} />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'hidden' : 'block'}`}
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
    </>
  );
};

// Specific components for common use cases
export const TestimonialAvatar: React.FC<{
  src: string;
  name: string;
  className?: string;
}> = ({ src, name, className = 'w-16 h-16' }) => {
  return (
    <ImageWithFallback
      src={src}
      alt={`${name} profile picture`}
      className={`${className} rounded-full object-cover`}
      fallbackType="avatar"
      fallbackText={name.split(' ').map(n => n[0]).join('')}
    />
  );
};

export const ClientLogo: React.FC<{
  src: string;
  name: string;
  className?: string;
}> = ({ src, name, className = 'h-12 w-auto' }) => {
  return (
    <ImageWithFallback
      src={src}
      alt={`${name} logo`}
      className={`${className} object-contain`}
      fallbackType="logo"
      fallbackText={name}
    />
  );
};

export const ServiceImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className = 'w-full h-64' }) => {
  return (
    <ImageWithFallback
      src={src}
      alt={alt}
      className={`${className} object-cover rounded-lg`}
      fallbackType="generic"
      fallbackText={alt}
    />
  );
};

// Hook to preload images and check if they exist
export const useImagePreloader = (imageSources: string[]) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImage = (src: string): Promise<string> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => reject(src);
        img.src = src;
      });
    };

    const preloadAllImages = async () => {
      setIsLoading(true);
      const loaded = new Set<string>();
      const failed = new Set<string>();

      await Promise.allSettled(
        imageSources.map(async (src) => {
          try {
            await preloadImage(src);
            loaded.add(src);
          } catch {
            failed.add(src);
          }
        })
      );

      setLoadedImages(loaded);
      setFailedImages(failed);
      setIsLoading(false);
    };

    if (imageSources.length > 0) {
      preloadAllImages();
    } else {
      setIsLoading(false);
    }
  }, [imageSources]);

  return { loadedImages, failedImages, isLoading };
};
