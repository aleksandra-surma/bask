import Link from 'next/link';
import { v4 as uuid } from 'uuid';

export default function ShortDescription({ title, description, moreHref, moreAs }) {
  return (
    <div className="w-full laptop:w-1/2 py-20">
      <h2 className="text-gray-700 mb-4">{title}</h2>
      {description.map((textItem) => (
        <p key={uuid()} className="tablet:text-lg text-gray-600 mb-2">
          {textItem}
        </p>
      ))}
      {moreHref ? (
        <div className="mt-4">
          <Link href={moreHref} as={moreAs}>
            <a className="cursor-pointer hover:text-black hover:underline hover:decoration-primary underline-offset-4">Więcej...</a>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
