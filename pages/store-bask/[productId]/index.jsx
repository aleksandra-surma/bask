import BaseLayout from 'components/BaseLayout';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { products } from 'data/mock/products';
import Link from 'next/link';
import useBasketState from 'hooks/useBasketState';
import handleBasket from 'utils/handleBasket';
import ProductAdded from 'components/ProductAdded';
import classNames from 'helpers/classNames';

export async function getStaticPaths() {
  const paths = products.map((product) => {
    return { params: { productId: product.slug } };
  });

  return {
    paths,
    fallback: false, // 404 page instead fallback page
  };
}

export async function getStaticProps({ params: { productId } }) {
  const productData = products.find((product) => product.slug === productId);

  return {
    props: {
      productData,
    },
  };
}

const title = 'Bask - stroje kąpielowe UV dla dzieci';
const description = '';
const canonical = '';
const ogData = {};

export default function Product({ productData: product }) {
  const startColor = product.startColor === 'white' ? product.colors[0] : product.colors[1];
  const [selectedColor, setSelectedColor] = useState(startColor);
  const [selectedSize, setSelectedSize] = useState(null);
  const [addedProduct, setAddedProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (selectedSize && error) {
      setError(null);
    }

    return () => {
      setError(null);
    };
  }, [selectedSize]);

  const { dispatch, setBasketItemsAmount } = useBasketState();

  const seoData = { title, description, canonical, ogData };

  const indexingCondition = process.env.NEXT_PUBLIC_APP_STAGE === 'PROD';

  return (
    <BaseLayout seoData={seoData} indexPage={indexingCondition}>
      {addedProduct ? (
        <ProductAdded addedProduct={addedProduct} setAddedProduct={setAddedProduct} selectedColor={selectedColor} selectedSize={selectedSize} />
      ) : null}
      {/* {addedProduct ? <ProductAdded addedProduct={addedProduct} setAddedProduct={setAddedProduct} /> : null} */}
      <div className="bg-white">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              {/* <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"> */}
              {/* {product.breadcrumbs.map((breadcrumb) => ( */}
              {/*  <li key={breadcrumb.id}> */}
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
            {selectedColor.name === 'white' ? (
              <>
                <div className="">
                  <Image
                    src={product.images.white[0].src}
                    alt={product.images.white[0].alt}
                    quality={80}
                    className="h-full w-full object-cover object-center rounded-lg"
                  />
                </div>
                <div className="">
                  <Image
                    src={product.images.white[1].src}
                    alt={product.images.white[1].alt}
                    quality={80}
                    className="h-full w-full object-cover object-center rounded-lg"
                  />
                </div>
                <div className="">
                  <Image
                    src={product.images.white[2].src}
                    alt={product.images.white[2].alt}
                    quality={80}
                    className="h-full w-full object-cover object-center rounded-lg"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="">
                  <Image
                    src={product.images.black[0].src}
                    alt={product.images.black[0].alt}
                    quality={80}
                    className="h-full w-full object-cover object-center rounded-lg"
                  />
                </div>
                <div className="">
                  <Image
                    src={product.images.black[1].src}
                    alt={product.images.black[1].alt}
                    quality={80}
                    className="h-full w-full object-cover object-center rounded-lg"
                  />
                </div>
                <div className="">
                  <Image
                    src={product.images.black[2].src}
                    alt={product.images.black[2].alt}
                    quality={80}
                    className="h-full w-full object-cover object-center rounded-lg"
                  />
                </div>
              </>
            )}
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
              <p className="text-4xl tracking-tight text-gray-900 font-semibold">{product.price} zł</p>

              <form className="mt-10">
                {/* Colors */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Kolor</h3>

                  <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                    <RadioGroup.Label className="sr-only"> Choose a color </RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {product.colors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              color.selectedClass,
                              'ring-green-500',
                              active && checked ? 'ring ring-offset-2' : '',
                              !active && checked ? 'ring-2' : '',
                              'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none',
                            )
                          }
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {color.name}{' '}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(color.class, 'h-8 w-8 rounded-full border border-black border-opacity-10')}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Rozmiary</h3>
                    <Link href="/size-guide" as="/tabela-rozmiarow" className="text-sm font-medium text-green-600 hover:text-green-500">
                      Tabela rozmiarów
                    </Link>
                  </div>

                  <RadioGroup onChange={setSelectedSize} className="mt-4">
                    <RadioGroup.Label className="sr-only"> Choose a size </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ active }) =>
                            classNames(
                              size.inStock ? 'cursor-pointer bg-white text-gray-900 shadow-sm' : 'cursor-not-allowed bg-gray-50 text-gray-200',
                              active ? 'ring-2 ring-green-500' : '',
                              'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6',
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                              {size.inStock ? (
                                <span
                                  className={classNames(
                                    active ? 'border' : 'border-2',
                                    checked ? 'border-green-500' : 'border-transparent',
                                    'pointer-events-none absolute -inset-px rounded-md',
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span aria-hidden="true" className="pointer-events-none absolute -inset-px rounded-md border-2 border-green-600">
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
                      ))}
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

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                <div className="mt-4">
                  <ul className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

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
