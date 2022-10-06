import BaseLayout from 'components/BaseLayout';
import LogInForm from 'components/LogInForm';

const title = 'Bask - stroje kąpielowe UV dla dzieci';
const description = '';
const canonical = '';
const ogData = {};

export default function LogIn() {
  const seoData = { title, description, canonical, ogData };

  return (
    <BaseLayout seoData={seoData}>
      <LogInForm />
    </BaseLayout>
  );
}
