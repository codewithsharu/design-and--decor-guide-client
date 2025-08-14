import React, { useEffect, useRef } from "react";

export default function WorkProcess() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    const updateHeight = () => {
      if (iframe && iframe.contentWindow && iframe.contentDocument) {
        iframe.style.height = iframe.contentDocument.documentElement.scrollHeight + "px";
      }
    };
    iframe.addEventListener("load", updateHeight);
    return () => iframe.removeEventListener("load", updateHeight);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src="/workprocess/aim.html"
      style={{
        width: "100%",
        border: "none",
        overflow: "hidden"
      }}
      title="Work Process"
    />
  );
}
