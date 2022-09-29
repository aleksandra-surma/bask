import BaseLayout from 'components/BaseLayout';

const title = '';
const description = '';
const canonical = '';
const ogData = {};

export default function Contact() {
  const seoData = { title, description, canonical, ogData };

  return (
    <BaseLayout seoData={seoData}>
      <p>Kontakt</p>
    </BaseLayout>
  );
}
