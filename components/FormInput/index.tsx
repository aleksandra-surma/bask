import type { UseFormRegister } from 'react-hook-form';
import classNames from 'helpers/classNames';
import { string, z } from 'zod';

/**
 * todo: add documentation
 */

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
  notRequired = false,
  // defaultCheck = 'off',
  error,
}: {
  label: string;
  type: string;
  register: UseFormRegister<Schema>;
  name: keyof Schema;
  halfView?: boolean;
  notRequired?: boolean;
  // defaultCheck?: 'on' | 'off';
  error: string | null;
}) => {
  switch (type) {
    case 'text': {
      return (
        <div className={classNames('flex flex-col mb-4', halfView ? 'w-[calc(50%-10px)]' : 'w-full')}>
          <label className="">
            {label} {notRequired ? '' : '*'}
          </label>
          <input className="" type={type} {...register(name)} />
          {error && <p className="text-sm mt-2 text-red-600">{error}</p>}
        </div>
      );
    }
    case 'checkbox': {
      // console.log('defaultCheck: ', checkboxValue);
      return (
        <div className={classNames('flex items-center my-4 w-full')}>
          <input
            className="mr-4 text-black border-black border-2 focus:ring-black p-3"
            type="checkbox"
            // defaultValue={defaultCheck}
            {...register(name)}
            // onChange={(e) => {
            //   setCheckboxValue(!checkboxValue);
            // }}
            // checked={checkboxValue}
          />
          <label className="">
            {label} {notRequired ? '' : '*'}
          </label>
          {error && <p className="">{error}</p>}
        </div>
      );
    }

    default: {
      return (
        <div className={classNames('flex flex-col mb-4', halfView ? 'w-[calc(50%-10px)]' : 'w-full')}>
          <label className="">
            {label} {notRequired ? '' : '*'}
          </label>
          <input className="" type={type} {...register(name)} />
          {error && <p className="">{error}</p>}
        </div>
      );
    }
  }
};

export default FormInput;
