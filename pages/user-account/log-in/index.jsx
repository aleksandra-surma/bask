import BaseLayout from 'components/BaseLayout';
import LogInForm from 'components/LogInForm';

const title = 'Bask - logowanie do konta';
const description = '';
const canonical = `${process.env.NEXT_PUBLIC_CANONICAL_URL_BASE}/moje-konto/logowanie`;
const ogData = {};

export default function LogIn() {
  const seoData = { title, description, canonical, ogData };

  return (
    <BaseLayout seoData={seoData}>
      <LogInForm />
    </BaseLayout>
  );
}
