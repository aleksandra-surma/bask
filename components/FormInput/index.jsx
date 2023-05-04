// import type { UseFormRegister } from 'react-hook-form';
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

// export type Schema = z.infer<typeof schema>;

const FormInput = ({
  label,
  type,
  register,
  name,
  halfView = false,
  notRequired = false,
  // defaultCheck = 'off',
  error,
}) => {
  switch (type) {
    case 'text': {
      return (
        <div className={classNames('mb-4 flex flex-col', halfView ? 'w-[calc(50%-10px)]' : 'w-full')}>
          <label className="">
            {label} {notRequired ? '' : '*'}
          </label>
          <input className="" type={type} {...register(name)} />
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
      );
    }
    case 'checkbox': {
      // console.log('defaultCheck: ', checkboxValue);
      return (
        <div className={classNames('my-4 flex w-full items-center')}>
          <input
            className="mr-4 border-2 border-black p-3 text-black focus:ring-black"
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
        <div className={classNames('mb-4 flex flex-col', halfView ? 'w-[calc(50%-10px)]' : 'w-full')}>
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
