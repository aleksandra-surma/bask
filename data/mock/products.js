import offer1 from 'public/images/products/zestaw-bialy-01.jpg';
import offer2 from 'public/images/products/bluzka-biala-01.jpg';
import offer3 from 'public/images/products/spodenki-czarne-01.jpg';
import offer4 from 'public/images/products/zestaw-czarny-01.jpg';

export const products = [
  {
    id: 'komplet-bialy-01',
    name: 'Zestaw kąpielowy - bluzka i spodenki',
    price: 239,
    // breadcrumbs: [
    //   { id: 1, name: 'Men', href: '#' },
    //   { id: 2, name: 'Clothing', href: '#' },
    // ],
    images: [
      {
        src: offer1,
        alt: '',
      },
    ],
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      // { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-neutral-800', selectedClass: 'ring-neutral-900' },
    ],
    sizes: [
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
    ],
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: ['Hand cut and sewn locally', 'Dyed with our proprietary colors', 'Pre-washed & pre-shrunk', 'Ultra-soft 100% cotton'],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  },
  {
    id: 'komplet-bialy-01',
    name: 'Bluzka UV',
    price: 129,
    // breadcrumbs: [
    //   { id: 1, name: 'Men', href: '#' },
    //   { id: 2, name: 'Clothing', href: '#' },
    // ],
    images: [
      {
        src: offer2,
        alt: '',
      },
    ],
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      // { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-neutral-800', selectedClass: 'ring-neutral-900' },
    ],
    sizes: [
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
    ],
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: ['Hand cut and sewn locally', 'Dyed with our proprietary colors', 'Pre-washed & pre-shrunk', 'Ultra-soft 100% cotton'],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  },
  {
    id: 'spodenki-czarne-01',
    name: 'Spodenki UV',
    price: 109,
    // breadcrumbs: [
    //   { id: 1, name: 'Men', href: '#' },
    //   { id: 2, name: 'Clothing', href: '#' },
    // ],
    images: [
      {
        src: offer3,
        alt: '',
      },
    ],
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      // { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-neutral-800', selectedClass: 'ring-neutral-900' },
    ],
    sizes: [
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
    ],
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: ['Hand cut and sewn locally', 'Dyed with our proprietary colors', 'Pre-washed & pre-shrunk', 'Ultra-soft 100% cotton'],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  },
  {
    id: 'komplet-czarny-01',
    name: 'Zestaw kąpielowy - bluzka i spodenki',
    price: 239,
    // breadcrumbs: [
    //   { id: 1, name: 'Men', href: '#' },
    //   { id: 2, name: 'Clothing', href: '#' },
    // ],
    images: [
      {
        src: offer4,
        alt: '',
      },
    ],
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      // { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-neutral-800', selectedClass: 'ring-neutral-900' },
    ],
    sizes: [
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
    ],
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: ['Hand cut and sewn locally', 'Dyed with our proprietary colors', 'Pre-washed & pre-shrunk', 'Ultra-soft 100% cotton'],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  },
];
