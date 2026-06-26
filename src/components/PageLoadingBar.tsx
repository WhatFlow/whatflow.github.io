"use client";

import LoadingBar from "react-top-loading-bar";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageLoadingBar() {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    // Trigger loading bar whenever route changes
    setProgress(40);
    const timer = setTimeout(() => setProgress(100), 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <LoadingBar
      color="teal"
      progress={progress}
      waitingTime={600}
      height={3}
      onLoaderFinished={() => setProgress(0)}
    />
  );
}
