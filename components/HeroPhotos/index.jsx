export default function HeroPhotos() {
  return (
    <section className="flex absolute top-[20vh] h-4/5 laptop:top-1/4 laptop:h-3/5 left-0 laptop:left-[unset] w-full ">
      <div className="flex justify-center items-center w-full tablet:w-1/2 laptop:w-1/4 bg-gray-100">photo1</div>
      <div className="hidden tablet:flex justify-center items-center tablet:w-1/2 laptop:w-1/4 bg-gray-200">photo2</div>
      <div className="hidden laptop:flex justify-center items-center laptop:w-1/4 bg-gray-100">photo3</div>
      <div className="hidden laptop:flex justify-center items-center laptop:w-1/4 bg-gray-200">photo4</div>
    </section>
  );
}
