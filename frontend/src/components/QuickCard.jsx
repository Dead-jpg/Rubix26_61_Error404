export default function QuickCard({ title }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md cursor-pointer">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-500">Start exploring curated plants</p>
    </div>
  );
}
