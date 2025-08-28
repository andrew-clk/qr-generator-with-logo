'use client';

import { useEffect } from 'react';

// Modern AdSense wrapper to avoid deprecated APIs
const AdSenseWrapper: React.FC = () => {
  useEffect(() => {
    // Modern approach to handle page lifecycle without deprecated unload events
    let isPageActive = true;

    // Use Page Visibility API instead of deprecated unload
    const handleVisibilityChange = () => {
      isPageActive = !document.hidden;
      
      if (!isPageActive) {
        // Page is hidden - modern alternative to unload
        // AdSense handles its own cleanup, we don't need to interfere
      }
    };

    // Modern event listeners
    document.addEventListener('visibilitychange', handleVisibilityChange, { passive: true });
    
    // Cleanup function
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AdSenseWrapper;