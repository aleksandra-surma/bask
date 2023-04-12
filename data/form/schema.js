import Joi from 'joi';

// Password Joi schema replicable
// Joi password regexp pattern: minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.
// const passwordJoi = Joi.string()
//   // .min(1)
//   .min(8)
//   // .max(40)
//   .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])(?=.*[a-zA-Z]).{8,}$/)
//   .messages({
//     'string.empty': 'Podaj hasło',
//     'string.pattern.base': 'Hasło powinno zawierać min. 8 znaków, cyfrę, dużo literę oraz znak specjalny',
//   })
//   .required();

// Email Joi schema replicable
const email = Joi.string()
  .min(6)
  .max(40)
  .pattern(/^\S+@\S+$/i)
  .messages({
    'string.empty': 'Podaj adres email',
    'string.min': 'Podany email jest zbyt krótki',
    'string.max': 'Podany email jest zbyt długi',
    'string.pattern.base': 'Wpisz poprawny adres email',
  })
  .required();

const fullName = Joi.string().min(5).max(50).required().messages({
  'string.empty': 'Pole "Imię i nazwisko" jest wymagane',
  'string.min': 'Wiadomość jest zbyt krótka, postaraj się bardziej!',
  'string.max': 'Wiadomość jest zbyt długa, przekroczyła 1000 znaków.',
});

const mobile = Joi.string().min(7).max(20).allow('').messages({
  'string.min': 'Minimalna długość numeru telefonu to 7 znaków.',
  'string.max': 'Maksymalna długość numeru telefonu to 20 znaków.',
});

const message = Joi.string().min(6).max(1000).required().messages({
  'string.empty': 'Uzupełnij pole wiadomość',
  'string.min': 'Twoja wiadomość jest zbyt krótka.',
  'string.max': 'Twoja wiadomość jest zbyt długa.',
});

const token = (tokenType) =>
  Joi.string()
    .required()
    .messages({
      'string.empty': `Brak tokena ${tokenType}`,
    });

// const checkbox = Joi.bool().invalid(false).messages({
//   'any.invalid': 'Potwierdzenie akceptacji polityki prywatności jest wymagane',
// });

// Front and backend schema are different in create user form
// const createAccountBaseSchema = {
//   firstName: Joi.string().min(2).max(30).required().messages({
//     'string.empty': 'Podaj swoje imię',
//   }),
//   lastName: Joi.string().min(2).max(30).required().messages({
//     'string.empty': 'Podaj swoje nazwisko',
//   }),
//   mobile: Joi.string().min(8).max(40).allow('').messages({
//     'string.min': 'Zbyt kró†ki numer telefonu',
//     'string.max': 'Zbyt długi numer telefonu',
//   }),
//   email: emailJoi,
//   password: passwordJoi,
//   confirmPassword: passwordJoi,
//   investments: Joi.string().required().allow(investment.sayKids, investment.sayRent).messages({
//     'string.empty': 'Wybierz jedną z podanych opcji',
//   }),
//   checkbox: Joi.bool().invalid(false).messages({
//     'any.invalid': 'Potwierdzenie akceptacji polityki prywatności jest wymagane',
//   }),
// };

// Password Joi schema replicable
// Joi password regexp pattern: minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.
// const passwordJoi = Joi.string()
//   // .min(1)
//   .min(8)
//   .max(40)
//   .pattern(/^(?=.*?[A-ZŻŹĆĄŚĘŁÓŃ])(?=(.*[a-zzżźćńółęąś]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,40}$/)
//   // (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])(?=.*[a-zA-Z]).{8,}$/) - old regexp not included all special characters
//   .messages({
//     'string.empty': 'Podaj hasło',
//     'string.min': 'Podane hasło jest zbyt krótkie',
//     'string.max': 'Podany email jest zbyt długi',
//     'string.pattern.base': 'Hasło powinno zawierać min. 8 znaków, max. 40, cyfrę, dużą literę oraz znak specjalny',
//   })
//   .required();

// Email Joi schema replicable
const emailJoi = Joi.string()
  .min(6)
  .max(50)
  .pattern(/^\S+@\S+$/i)
  .messages({
    'string.empty': 'Podaj adres email',
    'string.min': 'Podany email jest zbyt krótki',
    'string.max': 'Podany email jest zbyt długi',
    'string.pattern.base': 'Wpisz poprawny adres email',
  })
  .required();

// Front and backend schema are different in create user form
// const createAccountBaseSchema = {
//   firstName: Joi.string().min(2).max(30).required().messages({
//     'string.empty': 'Podaj swoje imię',
//   }),
//   lastName: Joi.string().min(2).max(30).required().messages({
//     'string.empty': 'Podaj swoje nazwisko',
//   }),
//   mobile: Joi.string().min(8).max(40).allow('').messages({
//     'string.min': 'Zbyt kró†ki numer telefonu',
//     'string.max': 'Zbyt długi numer telefonu',
//   }),
//   email: emailJoi,
//   password: passwordJoi,
//   confirmPassword: passwordJoi,
//
//   checkbox: Joi.bool().invalid(false).messages({
//     'any.invalid': 'Potwierdzenie akceptacji polityki prywatności jest wymagane',
//   }),
// };

const basketItemSchema = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().required(),
  price: Joi.number().greater(0).required(),
  slug: Joi.string().required(),
  img: Joi.string().required(),
  color: Joi.string().required(),
  size: Joi.string().required(),
  quantity: Joi.number().greater(0).required(),
});

const dealFinalizationObject = {
  email: emailJoi,
  firstName: Joi.string().required().messages({
    'string.empty': 'Podaj swoje imię',
  }),
  lastName: Joi.string().required().messages({
    'string.empty': 'Podaj swoje nazwisko',
  }),
  address: Joi.string().required().messages({
    'string.empty': 'Podaj adres',
  }),
  additionalAddress: Joi.string().allow(''),
  city: Joi.string().required().messages({
    'string.empty': 'Podaj miasto',
  }),
  nip: Joi.string().allow(''),
  phoneNumber: Joi.string().allow(''),
  postalCode: Joi.string()
    .pattern(/^\d{2}-?\d{3}$/)
    .required()
    // .replace(/-/g, '')
    .messages({
      'string.empty': 'Podaj kod pocztowy',
      'string.pattern.base': 'Podaj poprawny kod pocztowy, np. 00-000',
    }),

  addressTheSame: Joi.boolean().required(),

  invoiceAdditionalAddress: Joi.string().allow(''),
  invoiceAddress: Joi.string().allow(''),
  invoiceCity: Joi.string().allow(''),
  invoiceName: Joi.string().allow(''),
  invoicePostalCode: Joi.string()
    .pattern(/^\d{2}-?\d{3}$/)
    .required()
    // .replace(/-/g, '')
    .allow('')
    .messages({
      'string.pattern.base': 'Podaj poprawny kod pocztowy, np. 00-000',
    }),
  privacyPolicy: Joi.boolean().valid(true).required().messages({
    'any.invalid': 'Potwierdzenie akceptacji polityki prywatności jest wymagane w celu finalizacji zamówienia i obsługi zakupów.',
    'any.only': 'Potwierdzenie akceptacji polityki prywatności jest wymagane w celu finalizacji zamówienia i obsługi zakupów.',
  }),
  shippingMethodCourier: Joi.boolean(),
  shippingMethodInpost: Joi.boolean(),
};

const getDealSchema = (isInvoiceNecessary) => {
  if (isInvoiceNecessary) {
    return Joi.object({
      ...dealFinalizationObject,

      invoiceAddress: Joi.string().required().messages({
        'string.empty': 'Podaj adres',
      }),
      invoiceAdditionalAddress: Joi.string().allow(''),
      invoiceCity: Joi.string().required().messages({
        'string.empty': 'Podaj miasto',
      }),
      invoiceName: Joi.string().required().messages({
        'string.empty': 'Podaj nazwę firmy',
      }),
      invoicePostalCode: Joi.string()
        .pattern(/^\d{2}-?\d{3}$/)
        .required()
        .replace(/-/g, '')
        .messages({
          'string.empty': 'Podaj kod pocztowy',
          'string.pattern.base': 'Podaj poprawny kod pocztowy, np. 00-000',
        }),
    });
  }
  return Joi.object(dealFinalizationObject);
};

export const schema = {
  createCheckout: Joi.object({
    userData: Joi.object(dealFinalizationObject).required(),

    basket: Joi.array().items(basketItemSchema).required(),

    finalPrice: Joi.number().required(),
    shippingCost: Joi.number().required(),
  }),

  dealFinalization: (isInvoiceNecessary) => getDealSchema(isInvoiceNecessary),
  // dealFinalizationWithInvoice: dealFinalizationWithInvoiceSchema.required(),

  contactForm: Joi.object({
    fullName,
    mobile,
    email,
    message,
  }),

  contactFormServer: Joi.object({
    fullName,
    mobile,
    email,
    message,
    captchaToken: token('ReCaptcha'),
  }),

  // login: Joi.object({
  //   email: emailJoi,
  //   password: passwordJoi,
  // }),
  //
  // createAccountFrontend: Joi.object({
  //   ...createAccountBaseSchema,
  // }),
  //
  // createAccountBackend: Joi.object({
  //   ...createAccountBaseSchema,
  //   captchaToken: Joi.string().required(),
  // }),
  //
  // forgotPass: Joi.object({
  //   password: passwordJoi,
  // }),
  //
  // sendResetToken: Joi.object({
  //   email: emailJoi,
  // }),
  //
  // confirmNewPassword: Joi.object({
  //   password: passwordJoi,
  //   confirmPassword: passwordJoi,
  // }),
  //
  // changePassword: Joi.object({
  //   password: passwordJoi,
  //   resetToken: Joi.string().required().messages({
  //     'string.empty': 'Brak tokena aktywacyjnego',
  //   }),
  // }),
  //
  // activationToken: Joi.object({
  //   activationToken: Joi.string().required().messages({
  //     'string.empty': 'Brak tokena aktywacyjnego',
  //   }),
  // }),
};

export const defaultValues = {
  dealFinalization: {
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    additionalAddress: '',
    city: '',
    nip: '',
    phoneNumber: '',
    postalCode: '',

    addressTheSame: true,

    invoiceAdditionalAddress: '',
    invoiceAddress: '',
    invoiceCity: '',
    invoiceName: '',
    invoicePostalCode: '',

    shippingMethodCourier: true,
    shippingMethodInpost: false,
    privacyPolicy: false,
  },

  // login: {
  //   email: '',
  //   password: '',
  // },
  //
  // createAccount: {
  //   firstName: '',
  //   lastName: '',
  //   mobile: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  //   investments: '',
  //   checkbox: false,
  //
  //   // firstName: 'Test',
  //   // lastName: 'Tester',
  //   // mobile: '',
  //   // email: 'new.user.test.00@gmail.com',
  //   // password: '1',
  //   // confirmPassword: '1',
  //   // investments: 'say-rent',
  //   // checkbox: true,
  // },
  //
  // forgotPass: { password: '' },
  //
  // sendResetToken: { email: '' },
  //
  // confirmNewPassword: {
  //   password: '',
  //   confirmPassword: '',
  // },
  //
  // changePassword: {
  //   password: '',
  //   resetToken: '',
  // },
  //
  // activationToken: { activationToken: '' },
};
