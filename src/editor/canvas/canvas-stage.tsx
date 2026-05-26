"use client";

import { Canvas } from "fabric";
import { useEffect, useRef } from "react";

export function CanvasStage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const canvas = new Canvas(canvasRef.current, {
      backgroundColor: "#ffffff",
      height: 480,
      selection: false,
      width: 360,
    });

    return () => {
      canvas.dispose();
    };
  }, []);

  return (
    <div className="w-full max-w-[360px] overflow-hidden rounded-lg bg-white shadow-sm">
      <canvas className="h-auto w-full" ref={canvasRef} />
    </div>
  );
}
