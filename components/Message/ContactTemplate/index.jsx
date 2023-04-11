/**
 * EmailContact - component for emails -> reset password and activation account
 *
 * logo image ist hosted on postimage
 *
 * link to source: https://postimg.cc/N9DJ1MKV/18b6aa76
 *
 * exact link to logo: https://i.postimg.cc/T1Mzv5fR/bask-logo.png
 */

const EmailContactTemplate = ({ payload }) => {
  const { fullName, email, mobile, message } = payload;

  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&display=swap" rel="stylesheet" />
        <title>Bask - wiadomość z formularza kontaktowego</title>
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
            <img src="https://i.postimg.cc/T1Mzv5fR/bask-logo.png" style={{ width: '120px', height: '60px' }} alt="Bask logo" />

            <p style={{}}>Imię i nazwisko: {fullName}</p>
            <p style={{}}>Telefon: {mobile}</p>
            <p style={{}}>Email: {email}</p>
            <p style={{}}>Wiadomość: {message}</p>
          </div>
        </main>
      </body>
    </html>
  );
};

export default EmailContactTemplate;
