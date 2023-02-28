export default function Description({ title, description }) {
  return (
    <div className="w-full laptop:w-1/2 py-20">
      <h2 className="text-gray-700 mb-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
