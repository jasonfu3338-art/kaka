import { useEffect } from "react";

export function useMobileViewport() {
  useEffect(() => {
    document.documentElement.style.setProperty("--app-height", `${window.innerHeight}px`);
  }, []);
}
