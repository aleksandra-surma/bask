export default function HighlightedOffers() {
  return (
    <section className="w-full max-w-screen-xl">
      <h2 className="text-center">WYRÓŻNIONE</h2>
      <div className="m-auto justify-between items-center min-h-[60vh] flex">
        <div className="flex flex-col justify-between bg-lime-100 w-[20%] h-[420px]">
          <div className="h-[320px] bg-lime-300">photo</div>
          <p>Product title</p>
          <p>120zł</p>
        </div>
        <div className="flex flex-col justify-between bg-lime-200 w-[20%] h-[420px]">
          <div className="h-[320px] bg-lime-300">photo</div>
          <p>Product title</p>
          <p>120zł</p>
        </div>
        <div className="flex flex-col justify-between bg-lime-100 w-[20%] h-[420px]">
          <div className="h-[320px] bg-lime-300">photo</div>
          <p>Product title</p>
          <p>120zł</p>
        </div>
        <div className="flex flex-col justify-between bg-lime-200 w-[20%] h-[420px]">
          <div className="h-[320px] bg-lime-300">photo</div>
          <p>Product title</p>
          <p>120zł</p>
        </div>
      </div>
    </section>
  );
}
