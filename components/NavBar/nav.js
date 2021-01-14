import React, { useEffect, useState, useCallback } from 'react';

import MobileNav from './mobileNav';
import DesktopNav from './desktopNav';

const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);
  
    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);
  
    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);
  
      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }
  
      return () => media.removeListener(updateTarget);
    }, []);
  
    return targetReached;
  };

const nav = () => {
    const isBreakpoint = useMediaQuery(768);

    return (
        <div style={{ height: '100%' }}>
            { isBreakpoint ? (
                    <MobileNav />
            ) : (
                    <DesktopNav />
            )
            }
        </div>
    )
};

export default nav;