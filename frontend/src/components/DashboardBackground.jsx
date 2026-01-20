import FallingLeaves from "./FallingLeaves";

export default function DashboardBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* 🌿 Solid Green Background at the very back */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-green-700" />

      {/* 🌿 Falling Leaves Animation on top of the green background */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <FallingLeaves />
      </div>

      {/* 🌿 Optional Soft Vignette for text readability (above leaves but behind content) */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
