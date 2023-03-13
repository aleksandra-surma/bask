import BaseLayout from 'components/BaseLayout';
import { v4 as uuid } from 'uuid';
import regulations from '../../data/storeRegulations';

const title = '';
const description = '';
const canonical = '';
const ogData = {};

export default function Regulations() {
  const seoData = { title, description, canonical, ogData };

  const { headline, subtitle, page, sections } = regulations;

  return (
    <BaseLayout seoData={seoData}>
      <div className="mx-auto max-w-screen-xl mx-6 mb-12 mt-10">
        <div className="flex flex-col">
          <div className="px-4 sm:px-0 tablet:px-6 w-full ">
            <h2 className="text-4xl font-bold leading-10 text-gray-900">{headline}</h2>
            <p className="text-2xl mt-2 leading-10 text-gray-900">{subtitle}</p>
            <p className="text-2xl leading-10 text-gray-900">{page}</p>
            <ul className="mt-4">
              {sections.map(({ title: sectionTitle, subtitle: sectionSubtitle, pointsRegulations }, index) => {
                return (
                  <li key={uuid()} className="mb-8">
                    <p className="text-center font-semibold text-xl">{`§ ${index + 1}`}</p>
                    <h3 className="text-center text-xl mb-4">{sectionTitle}</h3>
                    {sectionSubtitle ? <p>{sectionSubtitle}</p> : null}
                    {pointsRegulations.map((point, regIndex) => {
                      if (typeof point === 'object' && !Array.isArray(point)) {
                        return (
                          <p key={uuid()} className="mb-4">
                            <span className="">
                              {regIndex + 1}. {point.pointTitle}
                            </span>
                            <span className="">{`${regIndex + 1}. ${point.pointTitle}`}</span>
                            {point.subPoints.map((subPoint) => {
                              return <p key={uuid()}>- {subPoint}</p>;
                            })}
                          </p>
                        );
                      }

                      if (Array.isArray(point)) {
                        console.log('point: ', point);
                        return (
                          <p key={uuid()} className="mb-4">
                            <span className="">
                              {index + 1}. {point[0]} -
                            </span>
                            {point[1]}
                          </p>
                        );
                      }

                      // if string
                      return <p key={uuid()} className="mb-4">{`${index + 1}. ${point}`}</p>;
                    })}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
