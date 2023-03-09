import setWhite01 from 'public/images/products/zestaw-bialy-01.jpg';
import setWhite02 from 'public/images/products/zestaw-bialy-02.jpg';
import setWhite03 from 'public/images/products/zestaw-bialy-03.jpg';
import setWhite04 from 'public/images/products/zestaw-bialy-04.jpg';
import setBlack01 from 'public/images/products/zestaw-czarny-01.jpg';
import setBlack02 from 'public/images/products/zestaw-czarny-02.jpg';
import setBlack03 from 'public/images/products/zestaw-czarny-03.jpg';
import setBlack04 from 'public/images/products/zestaw-czarny-04.jpg';
import blouseWhite01 from 'public/images/products/bluzka-biala-01.jpg';
import blouseWhite02 from 'public/images/products/bluzka-biala-02.jpg';
import blouseWhite03 from 'public/images/products/bluzka-biala-03.jpg';
import blouseWhite04 from 'public/images/products/bluzka-biala-04.jpg';
import blouseBlack01 from 'public/images/products/bluzka-czarna-01.jpg';
import blouseBlack02 from 'public/images/products/bluzka-czarna-02.jpg';
import blouseBlack03 from 'public/images/products/bluzka-czarna-03.jpg';
import blouseBlack04 from 'public/images/products/bluzka-czarna-04.jpg';
import shortsWhite01 from 'public/images/products/spodenki-biale-01.jpg';
import shortsWhite02 from 'public/images/products/spodenki-biale-02.jpg';
import shortsWhite03 from 'public/images/products/spodenki-biale-03.jpg';
import shortsWhite04 from 'public/images/products/spodenki-biale-04.jpg';
import shortsBlack01 from 'public/images/products/spodenki-czarne-01.jpg';
import shortsBlack02 from 'public/images/products/spodenki-czarne-02.jpg';
import shortsBlack03 from 'public/images/products/spodenki-czarne-03.jpg';
import shortsBlack04 from 'public/images/products/spodenki-czarne-04.jpg';

export const products = [
  {
    id: '01',
    slug: 'komplet-uv-01',
    name: 'Zestaw kąpielowy UV - bluzka i spodenki',
    price: 239,
    // breadcrumbs: [
    //   { id: 1, name: 'Men', href: '#' },
    //   { id: 2, name: 'Clothing', href: '#' },
    // ],
    images: {
      white: [
        {
          src: setWhite01,
          alt: '',
        },
        {
          src: setWhite02,
          alt: '',
        },
        {
          src: setWhite03,
          alt: '',
        },
        {
          src: setWhite04,
          alt: '',
        },
      ],
      black: [
        {
          src: setBlack01,
          alt: '',
        },
        {
          src: setBlack02,
          alt: '',
        },
        {
          src: setBlack03,
          alt: '',
        },
        {
          src: setBlack04,
          alt: '',
        },
      ],
    },
    startColor: 'white',
    colors: [
      { name: 'white', class: 'bg-white', selectedClass: 'ring-gray-400', startColor: true },
      // { name: 'gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'black', class: 'bg-neutral-800', selectedClass: 'ring-neutral-900', startColor: false },
    ],
    sizes: [
      { name: '86/92', inStock: true },
      { name: '98/104', inStock: true },
      { name: '110/116', inStock: true },
      { name: '122/128', inStock: true },
    ],
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: ['Hand cut and sewn locally', 'Dyed with our proprietary colors', 'Pre-washed & pre-shrunk', 'Ultra-soft 100% cotton'],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal gray" limited release.',
  },
  {
    id: '02',
    slug: 'bluzka-uv-01',
    name: 'Bluzka UV',
    price: 129,
    images: {
      white: [
        {
          src: blouseWhite03,
          alt: '',
        },
        {
          src: blouseWhite01,
          alt: '',
        },
        {
          src: blouseWhite04,
          alt: '',
        },
        {
          src: blouseWhite02,
          alt: '',
        },
      ],
      black: [
        {
          src: blouseBlack01,
          alt: '',
        },
        {
          src: blouseBlack02,
          alt: '',
        },
        {
          src: blouseBlack03,
          alt: '',
        },
        {
          src: blouseBlack04,
          alt: '',
        },
      ],
    },
    startColor: 'white',
    colors: [
      { name: 'white', class: 'bg-white', selectedClass: 'ring-gray-400' },
      // { name: 'gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'black', class: 'bg-neutral-800', selectedClass: 'ring-neutral-900' },
    ],
    sizes: [
      { name: '86/92', inStock: true },
      { name: '98/104', inStock: true },
      { name: '110/116', inStock: true },
      { name: '122/128', inStock: true },
    ],
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: ['Hand cut and sewn locally', 'Dyed with our proprietary colors', 'Pre-washed & pre-shrunk', 'Ultra-soft 100% cotton'],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal gray" limited release.',
  },

  {
    id: '04',
    slug: 'komplet-uv-02',
    name: 'Zestaw kąpielowy UV - bluzka i spodenki',
    price: 239,
    images: {
      white: [
        {
          src: setWhite01,
          alt: '',
        },
        {
          src: setWhite02,
          alt: '',
        },
        {
          src: setWhite03,
          alt: '',
        },
        {
          src: setWhite04,
          alt: '',
        },
      ],
      black: [
        {
          src: setBlack01,
          alt: '',
        },
        {
          src: setBlack02,
          alt: '',
        },
        {
          src: setBlack03,
          alt: '',
        },
        {
          src: setBlack04,
          alt: '',
        },
      ],
    },
    startColor: 'black',
    colors: [
      { name: 'white', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'black', class: 'bg-neutral-800', selectedClass: 'ring-neutral-900' },
    ],
    sizes: [
      { name: '86/92', inStock: true },
      { name: '98/104', inStock: true },
      { name: '110/116', inStock: true },
      { name: '122/128', inStock: true },
    ],
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: ['Hand cut and sewn locally', 'Dyed with our proprietary colors', 'Pre-washed & pre-shrunk', 'Ultra-soft 100% cotton'],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal gray" limited release.',
  },
  {
    id: '06',
    slug: 'bluzka-uv-02',
    name: 'Bluzka UV',
    price: 129,
    images: {
      white: [
        {
          src: blouseWhite01,
          alt: '',
        },
        {
          src: blouseWhite02,
          alt: '',
        },
        {
          src: blouseWhite03,
          alt: '',
        },
        {
          src: blouseWhite04,
          alt: '',
        },
      ],
      black: [
        {
          src: blouseBlack02,
          alt: '',
        },
        {
          src: blouseBlack01,
          alt: '',
        },
        {
          src: blouseBlack03,
          alt: '',
        },
        {
          src: blouseBlack04,
          alt: '',
        },
      ],
    },
    startColor: 'black',
    colors: [
      { name: 'white', class: 'bg-white', selectedClass: 'ring-gray-400' },
      // { name: 'gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'black', class: 'bg-neutral-800', selectedClass: 'ring-neutral-900' },
    ],
    sizes: [
      { name: '86/92', inStock: true },
      { name: '98/104', inStock: true },
      { name: '110/116', inStock: true },
      { name: '122/128', inStock: true },
    ],
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: ['Hand cut and sewn locally', 'Dyed with our proprietary colors', 'Pre-washed & pre-shrunk', 'Ultra-soft 100% cotton'],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal gray" limited release.',
  },
  {
    id: '03',
    slug: 'spodenki-uv-02',
    name: 'Spodenki UV',
    price: 109,

    startColor: 'black',
    colors: [
      { name: 'white', class: 'bg-white', selectedClass: 'ring-gray-400' },
      // { name: 'gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'black', class: 'bg-neutral-800', selectedClass: 'ring-neutral-900' },
    ],

    images: {
      white: [
        {
          src: shortsWhite01,
          alt: '',
        },
        {
          src: shortsWhite02,
          alt: '',
        },
        {
          src: shortsWhite03,
          alt: '',
        },
        {
          src: shortsWhite04,
          alt: '',
        },
      ],
      black: [
        {
          src: shortsBlack01,
          alt: '',
        },
        {
          src: shortsBlack02,
          alt: '',
        },
        {
          src: shortsBlack03,
          alt: '',
        },
        {
          src: shortsBlack04,
          alt: '',
        },
      ],
    },

    sizes: [
      { name: '86/92', inStock: true },
      { name: '98/104', inStock: true },
      { name: '110/116', inStock: true },
      { name: '122/128', inStock: true },
    ],
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: ['Hand cut and sewn locally', 'Dyed with our proprietary colors', 'Pre-washed & pre-shrunk', 'Ultra-soft 100% cotton'],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal gray" limited release.',
  },
  {
    id: '05',
    slug: 'spodenki-uv-01',
    name: 'Spodenki UV',
    price: 109,

    startColor: 'white',
    colors: [
      { name: 'white', class: 'bg-white', selectedClass: 'ring-gray-400' },
      // { name: 'gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'black', class: 'bg-neutral-800', selectedClass: 'ring-neutral-900' },
    ],

    images: {
      white: [
        {
          src: shortsWhite01,
          alt: '',
        },
        {
          src: shortsWhite02,
          alt: '',
        },
        {
          src: shortsWhite03,
          alt: '',
        },
        {
          src: shortsWhite04,
          alt: '',
        },
      ],
      black: [
        {
          src: shortsBlack01,
          alt: '',
        },
        {
          src: shortsBlack02,
          alt: '',
        },
        {
          src: shortsBlack03,
          alt: '',
        },
        {
          src: shortsBlack04,
          alt: '',
        },
      ],
    },

    sizes: [
      { name: '86/92', inStock: true },
      { name: '98/104', inStock: true },
      { name: '110/116', inStock: true },
      { name: '122/128', inStock: true },
    ],
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: ['Hand cut and sewn locally', 'Dyed with our proprietary colors', 'Pre-washed & pre-shrunk', 'Ultra-soft 100% cotton'],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal gray" limited release.',
  },
];
