import { useEffect, useState } from 'react';

export const useDevice = (type: 'mobile' | 'desktop') => {
  const [widthSize, setWidthSize] = useState(0);

  useEffect(() => {
    function getWindowSize() {
      const width = window.screen.availWidth;

      setWidthSize(width);
    }

    window.addEventListener('resize', getWindowSize);
    window.addEventListener('load', getWindowSize);

    getWindowSize();

    return () => {
      window.removeEventListener('resize', getWindowSize);
      window.removeEventListener('load', getWindowSize);

      getWindowSize();
    };
  }, []);

  const device = () => {
    const deviceType =
      type === 'desktop' ? widthSize >= 1024 : widthSize < 1024;

    return deviceType;
  };

  return device();
};
