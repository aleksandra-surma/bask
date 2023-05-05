import { v4 as uuid } from 'uuid';

export default function Description({ title, description }) {
  return (
    <div className="w-full py-20 laptop:w-1/2">
      <h2 className="mb-6 text-gray-700">{title}</h2>
      {description.map((textItem) => (
        <p key={uuid()} className="mb-4 text-justify text-gray-600 tablet:text-lg">
          {textItem}
        </p>
      ))}
    </div>
  );
}
