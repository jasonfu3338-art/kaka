"use client";

import { Canvas } from "fabric";
import { useEffect, useRef } from "react";
import { useEditorStore } from "@/stores/editor-store";
import { renderTemplateToFabric } from "../lib/fabric-template-renderer";

type CanvasAreaProps = {
  onCanvasClick?: () => void;
};

export function CanvasArea({ onCanvasClick }: CanvasAreaProps) {
  const canvasElementRef = useRef<HTMLCanvasElement>(null);
  const fabricCanvasRef = useRef<Canvas | null>(null);
  const template = useEditorStore((state) => state.template);

  useEffect(() => {
    if (!canvasElementRef.current || fabricCanvasRef.current) {
      return;
    }

    fabricCanvasRef.current = new Canvas(canvasElementRef.current, {
      preserveObjectStacking: true,
      selection: false,
    });

    return () => {
      fabricCanvasRef.current?.dispose();
      fabricCanvasRef.current = null;
    };
  }, []);

  useEffect(() => {
    const canvas = fabricCanvasRef.current;

    if (!canvas || !template) {
      return;
    }

    let active = true;

    renderTemplateToFabric(canvas, template).then(() => {
      if (!active) {
        canvas.clear();
      }
    });

    return () => {
      active = false;
    };
  }, [template]);

  const aspectRatio = template ? `${template.canvas.width} / ${template.canvas.height}` : "1 / 1";

  return (
    <section className="relative flex min-h-[calc(100dvh-176px)] items-center justify-center px-4 pb-28 pt-28">
      <div className="absolute inset-x-0 top-16 h-72 bg-[radial-gradient(circle_at_50%_40%,rgba(53,126,255,0.34),transparent_62%)] blur-2xl" />
      <div className="absolute inset-x-4 top-28 h-[52dvh] rounded-[36px] bg-[#10265a]/20 blur-3xl" />

      <div className="relative w-full max-w-[366px]">
        <div className="absolute -inset-3 rounded-[34px] bg-gradient-to-br from-sky-400/24 via-indigo-500/14 to-fuchsia-400/18 blur-xl" />
        <div
          className="relative overflow-hidden rounded-[28px] border border-white/14 bg-white/[0.04] shadow-[0_28px_90px_rgba(0,0,0,0.72),0_0_45px_rgba(58,147,255,0.28)]"
          onPointerDown={onCanvasClick}
          style={{ aspectRatio }}
        >
          <canvas className="block h-full w-full" ref={canvasElementRef} />
        </div>
      </div>
    </section>
  );
}
