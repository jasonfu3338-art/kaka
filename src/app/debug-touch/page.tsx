"use client";

import { useEffect, useState } from "react";

function describeElement(element: EventTarget | Element | null) {
  if (!(element instanceof Element)) {
    return "none";
  }

  const id = element.id ? `#${element.id}` : "";
  const className = typeof element.className === "string" && element.className ? `.${element.className.split(/\s+/).slice(0, 4).join(".")}` : "";
  const text = element.textContent?.trim().replace(/\s+/g, " ").slice(0, 40);

  return `${element.tagName.toLowerCase()}${id}${className}${text ? ` "${text}"` : ""}`;
}

function getPoint(event: Event) {
  if (event instanceof TouchEvent && event.touches.length > 0) {
    return { x: event.touches[0].clientX, y: event.touches[0].clientY };
  }

  if (event instanceof TouchEvent && event.changedTouches.length > 0) {
    return { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY };
  }

  if (event instanceof MouseEvent || event instanceof PointerEvent) {
    return { x: event.clientX, y: event.clientY };
  }

  return null;
}

export default function DebugTouchPage() {
  const [message, setMessage] = useState("waiting");
  const [captureMessage, setCaptureMessage] = useState("document capture waiting");

  const recordEvent = (label: string, event: React.SyntheticEvent<HTMLElement> | Event) => {
    const nativeEvent = "nativeEvent" in event ? event.nativeEvent : event;
    const point = getPoint(nativeEvent);
    const topElement = point ? document.elementFromPoint(point.x, point.y) : null;

    setMessage(
      [
        `${label} fired`,
        `event type: ${nativeEvent.type}`,
        `event target: ${describeElement(nativeEvent.target)}`,
        `elementFromPoint: ${describeElement(topElement)}`,
        point ? `point: ${Math.round(point.x)}, ${Math.round(point.y)}` : "point: none",
      ].join("\n"),
    );
  };

  useEffect(() => {
    const handler = (event: Event) => {
      const point = getPoint(event);
      const topElement = point ? document.elementFromPoint(point.x, point.y) : null;

      setCaptureMessage(
        [
          `document capture: ${event.type}`,
          `target: ${describeElement(event.target)}`,
          `elementFromPoint: ${describeElement(topElement)}`,
          point ? `point: ${Math.round(point.x)}, ${Math.round(point.y)}` : "point: none",
        ].join("\n"),
      );
    };

    document.addEventListener("touchstart", handler, true);
    document.addEventListener("pointerdown", handler, true);
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("touchstart", handler, true);
      document.removeEventListener("pointerdown", handler, true);
      document.removeEventListener("click", handler, true);
    };
  }, []);

  return (
    <main className="min-h-dvh bg-white p-5 pb-40 text-slate-950">
      <h1 className="text-xl font-black">Debug Touch</h1>

      <button
        className="mt-5 rounded-xl bg-slate-950 px-5 py-4 text-base font-bold text-white"
        onClick={(event) => recordEvent("click", event)}
        type="button"
      >
        普通 button
      </button>

      <div
        className="mt-5 rounded-xl border-2 border-blue-500 bg-blue-50 p-6 font-bold"
        onTouchStart={(event) => recordEvent("touchstart", event)}
      >
        onTouchStart 测试区
      </div>

      <div
        className="mt-5 rounded-xl border-2 border-purple-500 bg-purple-50 p-6 font-bold"
        onPointerDown={(event) => recordEvent("pointerdown", event)}
      >
        onPointerDown 测试区
      </div>

      <pre className="mt-5 min-h-44 whitespace-pre-wrap rounded-xl border border-slate-300 bg-slate-100 p-4 text-sm">
        {message}
        {"\n\n"}
        {captureMessage}
      </pre>

      <button
        className="fixed bottom-[calc(16px+env(safe-area-inset-bottom))] left-1/2 z-[9999] w-[calc(100%-32px)] max-w-sm -translate-x-1/2 rounded-xl bg-yellow-300 px-5 py-4 text-base font-black text-slate-950"
        onClick={(event) => recordEvent("fixed click", event)}
        onPointerDown={(event) => recordEvent("fixed pointerdown", event)}
        onTouchStart={(event) => recordEvent("fixed touchstart", event)}
        type="button"
      >
        fixed bottom button
      </button>
    </main>
  );
}
