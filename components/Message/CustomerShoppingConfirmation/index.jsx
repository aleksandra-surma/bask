/**
 * EmailContact - component for emails -> reset password and activation account
 *
 * logo image ist hosted on postimage
 *
 * link to source: https://postimg.cc/N9DJ1MKV/18b6aa76
 *
 * exact link to logo: https://i.postimg.cc/T1Mzv5fR/bask-logo.png
 */
import { randomUUID } from 'crypto';

const CustomerShoppingConfirmation = ({ addressData, basketData }) => {
  const {
    email,
    firstName,
    lastName,
    address,
    additionalAddress,
    postalCode,
    city,
    phoneNumber,
    nip,
    addressTheSame,
    invoiceAddress,
    invoiceAdditionalAddress,
    invoiceCity,
    invoiceName,
    invoicePostalCode,
  } = addressData;
  // <h1>Produkty przez Ciebie zamówione i opłacone:</h1>
  const { basketArray: basket, finalPrice, shippingCost } = basketData;

  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&display=swap" rel="stylesheet" />
        <title>Bask - potwierdzenie zamówienia</title>
      </head>
      <body>
        <main>
          <div
            style={{
              margin: '0 auto',
              padding: '30px',
              minWidth: '200px',
              maxWidth: '480px',
              fontFamily: '"Montserrat", Arial, sans-serif',
              fontWeight: '300',
              lineHeight: '22px',
            }}
          >
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
              <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#fff', padding: '20px' }}>
                <img src="https://i.postimg.cc/T1Mzv5fR/bask-logo.png" style={{ width: '120px', height: '60px' }} alt="Bask logo" />
                <h1>Produkty zamówione i opłacone:</h1>
                {basket.map((item) => {
                  return (
                    <div key={randomUUID()} style={{ marginBottom: '6px', borderBottom: '1px solid gray' }}>
                      <p>Nazwa produktu: {item.name}</p>
                      <p>Kolor: {item.color}</p>
                      <p>Rozmiar: {item.size}</p>
                      <p>Cena jednego egzemplarza produktu: {item.price}</p>
                      <p>Ilość: {item.quantity}</p>
                    </div>
                  );
                })}
                <p>Suma zamówienia wraz z kosztem dostawy: {finalPrice + shippingCost}zł</p>

                <h2>Zamówienie zostanie dostarczone na adres:</h2>
                <p>Imię: {firstName}</p>
                <p>Nazwisko {lastName}</p>
                <p>Adres: {address}</p>
                {additionalAddress ? <p>Dodatkowe informacje adresowe: {additionalAddress}</p> : null}
                <p>Kod pocztowy: {postalCode}</p>
                <p>Miasto: {city}</p>
                <h2>Dodatkowe dane potrzebne w procesie sprzedaży / wysyłki:</h2>
                <p>Email: {email}</p>
                {phoneNumber ? <p>Nr telefonu: {phoneNumber}</p> : null}
                {nip ? <p>NIP: {nip}</p> : null}

                {addressTheSame ? <h3 style={{ color: 'green' }}>Dane do faktury są takie same jak dane do wysyłki</h3> : null}

                {addressTheSame ? null : (
                  <>
                    <h2>Dane do faktury:</h2>
                    <p>{invoiceName}</p>
                    <p>{invoiceAddress}</p>
                    {invoiceAdditionalAddress ? <p>Dodatkowe informacje adresowe: {invoiceAdditionalAddress}</p> : null}
                    <p>{invoicePostalCode}</p>
                    <p>{invoiceCity}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
};

export default CustomerShoppingConfirmation;
