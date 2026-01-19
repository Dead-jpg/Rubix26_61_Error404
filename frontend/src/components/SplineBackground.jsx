import { useEffect } from "react";

export default function SplineBackground() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.12.36/build/spline-viewer.js";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 scale-110">
      <spline-viewer
        url="https://prod.spline.design/8dyvU-ZG9QGMmeVc/scene.splinecode"
        className="w-full h-screen"
      ></spline-viewer>
    </div>
  );
}
