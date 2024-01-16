import { useEffect, useState } from 'react';

import throttle from 'lodash.throttle';

export enum Version {
  mobile,
  tablet,
  desktop,
}

const getVersion = (): Version => {
  const CLIENT_WIDTH = window.innerWidth;
  let version = Version.desktop;

  if (CLIENT_WIDTH < 1280 && CLIENT_WIDTH >= 768) {
    version = Version.tablet;
  }
  if (CLIENT_WIDTH < 768) {
    version = Version.mobile;
  }

  return version;
};

export const useAdaptive = (): { isMobile: boolean; isTablet: boolean; isDesktop: boolean } => {
  const [version, setVersion] = useState<Version | null>(null);

  useEffect(() => {
    setVersion(getVersion());
  }, []);

  useEffect(() => {
    const handleResize = throttle(() => {
      setVersion(getVersion());
    }, 100);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    isMobile: version === Version.mobile,
    isTablet: version === Version.tablet,
    isDesktop: version === Version.desktop,
  };
};
