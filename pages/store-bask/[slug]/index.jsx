import BaseLayout from 'components/BaseLayout';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { v4 as uuid } from 'uuid';
import useBasketState from 'hooks/useBasketState';
import handleBasket from 'utils/handleBasket';
import ProductAdded from 'components/ProductAdded';
import classNames from 'helpers/classNames';
import { getAllRecords } from 'services/airtable/getAllRecords';
import getProduct from 'services/airtable/getProduct';
import { db } from 'data/dbData';

const title = 'Bask - stroje kąpielowe UV dla dzieci';
const description = '';
const canonical = '';
const ogData = {};

export default function Product({ productData: product }) {
  const startColor = product.startColor;

  const [selectedColor, setSelectedColor] = useState(startColor);
  const [selectedSize, setSelectedSize] = useState(null);
  const [addedProduct, setAddedProduct] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch, setBasketItemsAmount } = useBasketState();

  useEffect(() => {
    if (selectedSize && error) {
      setError(null);
    }

    return () => {
      setError(null);
    };
  }, [selectedSize]);

  const seoData = { title, description, canonical, ogData };

  const indexingCondition = process.env.NEXT_PUBLIC_APP_STAGE === 'PROD';

  const storeItemsOnColor = product.store.filter((item) => item.color === selectedColor);

  const checkQuantity = (storeItemsColor, index) => {
    if (storeItemsColor.length === 1) {
      return storeItemsColor[0].quantity[index].quantity !== 0;
    }
    return storeItemsColor[0].quantity[index].quantity !== 0 && storeItemsColor[1].quantity[index].quantity !== 0;
  };

  const highlightsArray = product.highlights.split('\n');

  return (
    <BaseLayout seoData={seoData} indexPage={indexingCondition}>
      {addedProduct ? (
        <ProductAdded addedProduct={addedProduct} setAddedProduct={setAddedProduct} selectedColor={selectedColor} selectedSize={selectedSize} />
      ) : null}

      <div className="bg-white">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              {/* <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"> */}
              {/* {product.breadcrumbs.map((breadcrumb) => ( */}
              {/*  <li key={uuid()}> */}
              {/*    <div className="flex items-center"> */}
              {/*      <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900"> */}
              {/*        {breadcrumb.name} */}
              {/*      </a> */}
              {/*      <svg width={16} height={20} viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300"> */}
              {/*        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" /> */}
              {/*      </svg> */}
              {/*    </div> */}
              {/*  </li> */}
              {/* ))} */}
              <li className="text-sm">
                <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                  {product.name}
                </a>
              </li>
            </ol>
          </nav>

          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="relative h-[500px]">
              <Image
                src={product[`attachments-${selectedColor}`][0].url}
                alt={product.name}
                quality={80}
                layout="fill"
                objectFit="cover"
                className="h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="relative h-[500px]">
              <Image
                src={product[`attachments-${selectedColor}`][1].url}
                alt={product.name}
                quality={80}
                layout="fill"
                objectFit="cover"
                className="h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="relative h-[500px]">
              <Image
                src={product[`attachments-${selectedColor}`][2].url}
                alt={product.name}
                quality={80}
                layout="fill"
                objectFit="cover"
                className="h-full w-full rounded-lg object-cover object-center"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 ">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              {/* Price */}
              <p className="text-4xl font-semibold tracking-tight text-gray-900">{product.price} zł</p>

              <form className="mt-10">
                {/* Colors */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Kolor</h3>

                  <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                    <RadioGroup.Label className="sr-only"> Choose a color </RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {product.avaliableColors.map((color) => {
                        return (
                          <RadioGroup.Option
                            key={uuid()}
                            value={color}
                            className={({ active, checked }) =>
                              classNames(
                                'ring-green-500',
                                active && checked ? 'ring ring-offset-2' : '',
                                !active && checked ? 'ring-2' : '',
                                'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none',
                                color === 'chocolate' ? 'bg-chocolate' : `bg-${color}`,
                              )
                            }
                          >
                            <RadioGroup.Label as="span" className="sr-only">
                              {color}{' '}
                            </RadioGroup.Label>
                            <span aria-hidden="true" className={classNames('h-8 w-8 rounded-full border border-black border-opacity-10')} />
                          </RadioGroup.Option>
                        );
                      })}
                    </div>
                  </RadioGroup>
                </div>

                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Rozmiary</h3>

                    <label
                      htmlFor="sizes-table-modal"
                      className="cursor-pointer text-xs text-green-600 underline underline-offset-2 hover:text-green-500"
                    >
                      Tabela rozmiarów
                    </label>
                  </div>

                  <input type="checkbox" id="sizes-table-modal" className="modal-toggle" />
                  <div className="modal">
                    <div className="modal-box">
                      <h3 className="mb-4 text-lg font-bold">Tabela rozmiarów</h3>
                      <div className="overflow-x-auto">
                        <table className="table w-full">
                          {/* head */}
                          <thead>
                            <tr>
                              <th>Rozmiar</th>
                              <th>Wymiary</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/*     row 1 */}
                            <tr>
                              <td>86/92</td>
                              <td>
                                <p>bluzka: dł. 35 cm, szer. 25 cm</p>
                                <p>spodenki: dł. 22 cm, szer. 23 cm</p>
                              </td>
                            </tr>

                            {/* row 2 */}
                            <tr>
                              <td>98/104</td>
                              <td>
                                <p>bluzka: dł. 38 cm, szer. 28 cm</p>
                                <p>spodenki: dł. 25 cm, szer. 25 cm</p>
                              </td>
                            </tr>

                            {/* row 3 */}
                            <tr>
                              <td>110/116</td>
                              <td>
                                <p>bluzka: dł. 42 cm, szer. 30 cm</p>
                                <p>spodenki: dł. 26 cm, szer. 27 cm</p>
                              </td>
                            </tr>

                            {/* row 4 */}
                            <tr>
                              <td>122/128</td>
                              <td>
                                <p>bluzka: dł. 46 cm, szer. 32 cm</p>
                                <p>spodenki: dł. 29 cm, szer. 29 cm</p>
                              </td>
                            </tr>

                            {/* row 5 */}
                            <tr>
                              <td>134/140</td>
                              <td>
                                <p>bluzka: dł. 50 cm, szer. 34 cm</p>
                                <p>spodenki: dł. 30 cm, szer. 30 cm</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="py-4">Masz wątpliwości związane z rozmiarem jaki wybrać? </p>
                      <div className="flex">
                        <p className="mr-4">Napisz do nas!</p>
                        <a className="contact-media__mail" href="mailto:kontakt@bask.com.pl">
                          <p className="hover:text-neutral-500">kontakt@bask.com.pl</p>
                        </a>
                      </div>
                      <div className="modal-action">
                        <label htmlFor="sizes-table-modal" className="btn normal-case">
                          Wróć do produktu
                        </label>
                      </div>
                    </div>
                  </div>

                  <RadioGroup onChange={setSelectedSize} className="mt-4">
                    <RadioGroup.Label className="sr-only"> Choose a size </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-5 lg:grid-cols-4">
                      {product.store[0].quantity.map((sizeObj, index) => {
                        return (
                          <RadioGroup.Option
                            key={uuid()}
                            value={sizeObj.name}
                            disabled={sizeObj.quantity < 1}
                            className={({ active }) =>
                              classNames(
                                checkQuantity(storeItemsOnColor, index)
                                  ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                  : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                active ? 'ring-2 ring-green-500' : '',
                                'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6',
                              )
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <RadioGroup.Label as="span">{sizeObj.name}</RadioGroup.Label>
                                {checkQuantity(storeItemsOnColor, index) ? (
                                  <span
                                    className={classNames(
                                      active ? 'border' : 'border-2',
                                      checked ? 'border-green-500' : 'border-transparent',
                                      'pointer-events-none absolute -inset-px rounded-md',
                                    )}
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <span aria-hidden="true" className="pointer-events-none absolute -inset-px rounded-md border-2 border-neutral-200">
                                    <svg
                                      className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                      viewBox="0 0 100 100"
                                      preserveAspectRatio="none"
                                      stroke="currentColor"
                                    >
                                      <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                    </svg>
                                  </span>
                                )}
                              </>
                            )}
                          </RadioGroup.Option>
                        );
                      })}
                    </div>
                  </RadioGroup>
                </div>
                {error ? (
                  <div className="mt-4 text-red-700">
                    <p>{error}</p>
                  </div>
                ) : null}

                <button
                  type="button"
                  onClick={() => {
                    if (!selectedSize) {
                      setError('Wybierz odpowiedni rozmiar');
                      return;
                    }
                    setError(null);
                    setAddedProduct(product);
                    handleBasket.addProduct(product, selectedColor, selectedSize, dispatch, setBasketItemsAmount);
                  }}
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-neutral-600 py-3 px-8 text-base font-medium text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Dodaj do koszyka
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Opis</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">{product.description}</p>
                </div>
              </div>

              {/* <div className="mt-10"> */}
              {/*  <h3 className="text-sm font-medium text-gray-900">Highlights</h3> */}

              {/*  <div className="mt-4"> */}
              {/*    <ul className="list-disc space-y-2 pl-4 text-sm"> */}
              {/*      {product.highlights.map((highlight) => ( */}
              {/*        <li key={uuid()} className="text-gray-400"> */}
              {/*          <span className="text-gray-600">{highlight}</span> */}
              {/*        </li> */}
              {/*      ))} */}
              {/*    </ul> */}
              {/*  </div> */}
              {/* </div> */}

              <div className="mt-10">
                <h2 className="mb-4 text-sm font-medium text-black">Cechy produktu:</h2>

                <div className="space-y-2">
                  {highlightsArray.map((highlight) => (
                    <p key={uuid()} className="text-sm text-gray-600">
                      - {highlight}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-black">Skład:</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const productData = await getProduct(slug);

  return {
    props: {
      productData: JSON.parse(JSON.stringify(productData)),
      // strange solution but works https://github.com/vercel/next.js/issues/11993#issuecomment-879857441 //todo: handle it in a better way
      // productData: productData,
    },
  };
}

export async function getStaticPaths() {
  const dbId = process.env.AIRTABLE_PRODUCTS_BASE;
  const subDb = db.products.products;

  const products = await getAllRecords(dbId, subDb);

  const paths = products.map((product) => {
    return { params: { slug: product.slug } };
  });

  return {
    paths,
    fallback: false, // 404 page instead fallback page
  };
}
