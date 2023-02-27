module.exports = {
  pathsMap: [
    { source: '/', destination: '/' },
    { source: '/sklep', destination: '/storeBask' },
    { source: '/edukacja-uv', destination: '/uvEducation' },
    { source: '/o-firmie', destination: '/aboutCompany' },
    { source: '/kontakt', destination: '/contact' },
    { source: '/kontakt/wiadomosc-wyslana', destination: '/contact/message-sent' },
    { source: '/moje-konto/zaloguj', destination: '/userAccount/logIn' },
    { source: '/moje-konto/nowe-konto', destination: '/userAccount/createAccount' },
    { source: '/moje-konto/odzyskanie-hasla', destination: '/userAccount/passwordRecovery' },
    { source: '/koszyk', destination: '/cardSummary' },
    { source: '/polityka-prywatnosci', destination: '/policy' },
  ],
};
