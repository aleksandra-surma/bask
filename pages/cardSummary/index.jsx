import BaseLayout from 'components/BaseLayout';

const title = 'Bask - stroje kąpielowe UV dla dzieci';
const description = '';
const canonical = '';
const ogData = {};

export default function CardSummary() {
  const seoData = { title, description, canonical, ogData };

  return (
    <BaseLayout seoData={seoData}>
      <div>
        <p>Card summary</p>
      </div>
      <div>
        <p>_____</p>
      </div>
    </BaseLayout>
  );
}
