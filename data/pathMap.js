module.exports = {
  pathsMap: [
    { source: '/', destination: '/' },
    { source: '/sklep', destination: '/store-bask' },
    { source: '/sklep/:productId', destination: '/store-bask/:productId' },
    { source: '/edukacja-uv', destination: '/uv-education' },
    { source: '/o-firmie', destination: '/about-company' },
    { source: '/kontakt', destination: '/contact' },
    // { source: '/kontakt/wiadomosc-wyslana', destination: '/contact/message-sent' },
    { source: '/moje-konto/zaloguj', destination: '/userAccount/log-in' },
    { source: '/moje-konto/nowe-konto', destination: '/userAccount/create-account' },
    { source: '/moje-konto/odzyskanie-hasla', destination: '/userAccount/password-recovery' },
    { source: '/koszyk', destination: '/card-summary' },
    { source: '/koszyk/podsumowanie', destination: '/card-summary/checkout' },
    { source: '/tabela-rozmiarow', destination: '/size-guide' },
    { source: '/polityka-prywatnosci', destination: '/policy' },
  ],
};
