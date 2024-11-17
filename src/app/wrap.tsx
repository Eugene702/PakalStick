"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import MobileDetect from "mobile-detect";

const Wrap = ({ children }: { children: ReactNode }) => {
  const mainRef = useRef<HTMLElement>(null);

  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMobileOrientationLandscape, setMobileOrientationLandscape] = useState<boolean>(true);
  const [permissionFullscreen, setPermissionFullscreen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const checkFullscreenStatus = () => {
      setPermissionFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", checkFullscreenStatus);
    checkFullscreenStatus();

    return () => {
      document.removeEventListener("fullscreenchange", checkFullscreenStatus);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const userAgent = new MobileDetect(window.navigator.userAgent);
    const mediaQuery = window.matchMedia("(orientation: portrait)");

    setIsMobile(!!userAgent.phone());
    setMobileOrientationLandscape(!mediaQuery.matches);

    const handleOrientationChange = (e: MediaQueryListEvent) => {
      setMobileOrientationLandscape(!e.matches);
    };

    mediaQuery.addEventListener("change", handleOrientationChange);

    return () => {
      mediaQuery.removeEventListener("change", handleOrientationChange);
    };
  }, []);

  const requestFullScreen = () => {
    if (mainRef.current) {
      if (mainRef.current.requestFullscreen) {
        mainRef.current.requestFullscreen();
      }
      setPermissionFullscreen(true);
    }
  };

  return (
    <main ref={mainRef}>
      {isMobile ? (
        isMobileOrientationLandscape ? (
          permissionFullscreen ? (
            children
          ) : (
            <div className="w-full h-screen flex justify-center items-center">
              <section className="flex flex-col gap-4 items-center">
                <p>Sebelum memulai permainan, mohon izinkan halaman untuk menjadi FullScreen</p>
                <button
                  onClick={requestFullScreen}
                  className="bg-blue-500 text-white p-4 rounded"
                >
                  Izinkan FullScreen
                </button>
              </section>
            </div>
          )
        ) : (
          <div className="w-full h-screen flex justify-center items-center">
            <h1 className="text-2xl">Please rotate your device</h1>
          </div>
        )
      ) : (
        children
      )}
    </main>
  );
};

export default Wrap;
