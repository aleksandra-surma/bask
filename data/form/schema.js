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

export const schema = {
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
