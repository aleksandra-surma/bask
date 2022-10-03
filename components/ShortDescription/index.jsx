import Link from 'next/link';

export default function ShortDescription({ title, description, moreHref, moreAs }) {
  return (
    <div className="w-full laptop:w-1/2 py-20">
      <h2 className="text-gray-700 mb-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4">
        <Link href={moreHref} as={moreAs}>
          <a className="cursor-pointer hover:text-black">Więcej...</a>
        </Link>
      </div>
    </div>
  );
}
