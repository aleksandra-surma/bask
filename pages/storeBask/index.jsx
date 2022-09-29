import BaseLayout from 'components/BaseLayout';

const title = '';
const description = '';
const canonical = '';
const ogData = {};

export default function StoreBask() {
  const seoData = { title, description, canonical, ogData };

  return (
    <BaseLayout seoData={seoData}>
      <p>Sklep</p>
    </BaseLayout>
  );
}
