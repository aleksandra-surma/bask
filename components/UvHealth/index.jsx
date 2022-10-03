import Image from 'next/image';
import uvHealth from 'public/images/bask-uv-health-test-image-01.jpg';
import ShortDescription from 'components/ShortDescription';

const title = 'UV A ZDROWIE';
const description = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, placeat quis. Accusamus ad architecto asperiores autem, consequatur culpa deleniti distinctio et facere facilis fugiat incidunt inventore iste libero nesciunt non nulla porro qui recusandae rerum vero vitae voluptate voluptatibus! Amet, dolore doloremque eaque eligendi expedita, fugit incidunt minima nihil quam quas qui recusandae, tenetur voluptate. Aliquid culpa deserunt optio, perspiciatis quasi rerum temporibus! Beatae excepturi labore neque non nostrum.`;
const moreHref = '/uvEducation';
const moreAs = '/edukacja-uv';

export default function UvHealth() {
  return (
    <section className="w-full bg-gray-50 px-4 pb-20 tablet:px-8">
      <div className="flex flex-col-reverse m-auto justify-center relative items-center laptop:items-end min-h-[60vh] max-w-screen-xl">
        <div className="relative block h-[540px] w-[100%] laptop:w-[35%] desktop:h-[110%] laptop:absolute laptop:top-[-120px] laptop:left-0 desktopBig:left-[-160px]">
          <Image src={uvHealth} layout="fill" objectFit="cover" quality={80} priority alt="" />
        </div>

        <ShortDescription title={title} description={description} moreHref={moreHref} moreAs={moreAs} />
      </div>
    </section>
  );
}
