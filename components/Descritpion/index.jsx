import { v4 as uuid } from 'uuid';

export default function Description({ title, description }) {
  return (
    <div className="w-full laptop:w-1/2 py-20">
      <h2 className="text-gray-700 mb-4">{title}</h2>
      {description.map((textItem) => (
        <p key={uuid()} className="tablet:text-lg text-gray-600 mb-4">
          {textItem}
        </p>
      ))}
    </div>
  );
}
