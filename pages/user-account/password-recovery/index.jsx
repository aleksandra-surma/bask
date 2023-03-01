import BaseLayout from 'components/BaseLayout';
import PasswordRecoveryForm from 'components/PasswordRecoveryForm';

const title = 'Bask - stroje kąpielowe UV dla dzieci';
const description = '';
const canonical = '';
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
