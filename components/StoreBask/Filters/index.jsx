import { ChevronDownIcon } from '@heroicons/react/outline';
// import { ChevronDownIcon, AdjustmentsIcon } from '@heroicons/react/outline';

export default function Filters() {
  return (
    <section>
      <h3 className="py-4 text-xl font-semibold">Filtrowanie</h3>
      <div className="mb-12">
        <div className="flex flex-col justify-between tablet:flex-row">
          <div className="my-2 flex w-1/3 justify-between border-b-2 border-black tablet:w-[25%]">
            <h4>Rozmiar</h4>
            <div>
              {/* <AdjustmentsIcon width={24} height={24} /> */}
              <ChevronDownIcon width={24} height={24} />
            </div>
          </div>
          <div className="my-2 flex w-1/3 justify-between border-b-2 border-black tablet:w-[25%]">
            <h4>Sortowanie</h4>
            <div>
              <ChevronDownIcon width={24} height={24} />
            </div>
          </div>
          <div className="my-2 flex w-1/3 justify-between border-b-2 border-black tablet:w-[25%]">
            <h4>Pokaż</h4>
            <div>
              <ChevronDownIcon width={24} height={24} />
            </div>
          </div>
        </div>
        <div className="hidden">Cena</div>
      </div>
    </section>
  );
}
