export default function DashboardBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Blob 1 */}
      <div
        className="
        absolute top-[-10%] left-[-10%]
        w-[400px] h-[400px]
        bg-green-300/30
        rounded-full blur-3xl
        animate-floatSlow
      "
      />

      {/* Blob 2 */}
      <div
        className="
        absolute top-[20%] right-[-10%]
        w-[350px] h-[350px]
        bg-emerald-300/30
        rounded-full blur-3xl
        animate-floatMedium
      "
      />

      {/* Blob 3 */}
      <div
        className="
        absolute bottom-[-15%] left-[20%]
        w-[500px] h-[500px]
        bg-lime-300/30
        rounded-full blur-3xl
        animate-floatFast
      "
      />
    </div>
  );
}
