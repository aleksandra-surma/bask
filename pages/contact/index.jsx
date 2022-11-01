import BaseLayout from 'components/BaseLayout';
import ContactForm from 'components/ContactForm';

const title = '';
const description = '';
const canonical = '';
const ogData = {};

export default function Contact() {
  const seoData = { title, description, canonical, ogData };

  return (
    <BaseLayout seoData={seoData}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 pb-16">
        <div className="mt-16">
          <div className="flex flex-col">
            <div className="md:col-span-1 flex flex-col justify-between">
              <div className="px-4 sm:px-0 w-3/5 mb-12">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Formularz kontaktowy</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Jakieś produkty szczególnie Cię zainteresowały, a może masz propozycję współpracy, albo problem z zakupem? Napisz a odpowiemy w
                  ciągu kilku godzin roboczych.
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
