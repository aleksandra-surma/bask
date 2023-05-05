import Link from 'next/link';
import { v4 as uuid } from 'uuid';

export default function ShortDescription({ title, description, moreHref, moreAs }) {
  return (
    <div className="w-full py-20 laptop:w-1/2">
      <h2 className="mb-4 text-gray-700">{title}</h2>
      {description.map((textItem) => (
        <p key={uuid()} className="mb-2 text-justify text-gray-600 tablet:text-lg">
          {textItem}
        </p>
      ))}
      {moreHref ? (
        <div className="mt-4">
          <Link href={moreHref} as={moreAs}>
            <a className="cursor-pointer underline-offset-4 hover:text-black hover:underline hover:decoration-primary">Więcej...</a>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
