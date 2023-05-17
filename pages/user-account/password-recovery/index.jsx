import BaseLayout from 'components/BaseLayout';
import PasswordRecoveryForm from 'components/PasswordRecoveryForm';

const title = 'Bask - odzyskanie hasła';
const description = '';
const canonical = `${process.env.NEXT_PUBLIC_CANONICAL_URL_BASE}/moje-konto/odzyskanie-hasla`;
const ogData = {};

export default function PasswordRecovery() {
  const seoData = { title, description, canonical, ogData };

  return (
    <BaseLayout seoData={seoData}>
      <PasswordRecoveryForm />
    </BaseLayout>
  );
}

// source: '/moje-konto/odzyskanie-hasla',
//   destination: '/user-account/password-recovery',
