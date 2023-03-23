import type { UseFormRegister } from 'react-hook-form';
import classNames from 'helpers/classNames';
import { string, z } from 'zod';

export const schema = z.object({
  // subject: string().min(10, { message: subjectError }),
  // firstname: string().min(2, { message: firstnameError.short }).max(15, { message: firstnameError.long }),
  // lastname: string().min(2, { message: lastnameError.short }).max(20, { message: lastnameError.long }),
  // phoneNumber: string().optional(),
  email: string().email({ message: 'Uzupełnij pole Email' }),
  // email: string().email({ message: emailError }),
  // userMessage: z.string().min(30, { message: textareaError }),
  // termsConsent: z.literal(true, consentError),
  // privacyPolicyConsent: z.literal(true, consentError),
  // personalDataConsent: z.literal(true, consentError),
  // commercialInfoConsent: z.boolean().optional(),
});

export type Schema = z.infer<typeof schema>;

const FormInput = ({
  label,
  type,
  register,
  name,
  halfView = false,
  isRequired = false,
  error,
}: {
  label: string;
  type: string;
  register: UseFormRegister<Schema>;
  name: keyof Schema;
  halfView?: boolean;
  isRequired?: boolean;
  error: string | null;
}) => {
  return (
    <div className={classNames('flex flex-col', halfView ? 'w-[calc(50%-10px)]' : 'w-full')}>
      <label className="">
        {label} {isRequired ? '*' : ''}
      </label>
      <input className="" type={type} {...register(name)} />
      {error && <p className="">{error}</p>}
    </div>
  );
};

export default FormInput;
