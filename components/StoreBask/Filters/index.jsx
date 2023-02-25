import { ChevronDownIcon } from '@heroicons/react/outline';
// import { ChevronDownIcon, AdjustmentsIcon } from '@heroicons/react/outline';

export default function Filters() {
  return (
    <section>
      <h3 className="py-4 font-semibold text-xl">Filtrowanie</h3>
      <div className="mb-12">
        <div className="flex flex-col tablet:flex-row justify-between">
          <div className="flex w-1/3 tablet:w-[25%] justify-between my-2 border-b-2 border-black">
            <h4>Rozmiar</h4>
            <div>
              {/* <AdjustmentsIcon width={24} height={24} /> */}
              <ChevronDownIcon width={24} height={24} />
            </div>
          </div>
          <div className="flex w-1/3 tablet:w-[25%] justify-between my-2 border-b-2 border-black">
            <h4>Sortowanie</h4>
            <div>
              <ChevronDownIcon width={24} height={24} />
            </div>
          </div>
          <div className="flex w-1/3 tablet:w-[25%] justify-between my-2 border-b-2 border-black">
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
