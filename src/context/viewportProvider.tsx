import React, { createContext, useState, useEffect } from "react";

const viewportContext = createContext<{ width: number; height: number }>({
  width: 0,
  height: 0,
});

const ViewportProvider: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

export const useViewport: () => {
  isTablet: boolean;
  isMobile: boolean;
  isDesktop: boolean;
} = () => {
  const { width } = React.useContext(viewportContext);
  const isMobile = width < 480;
  const isTablet = 480 < width && width <= 768;
  const isDesktop = width > 769;

  return { isMobile, isTablet, isDesktop };
};

export default ViewportProvider;
