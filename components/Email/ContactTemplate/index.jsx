import { v1 as uuid } from 'uuid';

/**
 * EmailContact - component for emails -> reset password and activation account
 *
 * logo image ist hosted on postimage
 *
 * link to source: https://postimg.cc/N9DJ1MKV/18b6aa76
 *
 * exact link to logo: https://i.postimg.cc/T1Mzv5fR/bask-logo.png
 */

const EmailContactTemplate = ({ text }) => {
  return (
    <html lang="pl">
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://i.postimg.cc/T1Mzv5fR/bask-logo.png" style={{ width: '120px', height: '25px' }} alt="Bask logo" />

            {/*  todo: add here text or something, maybe copy from odkurza.cz */}
            <div style={{ fontSize: '14px', margin: '30px 0 40px 0' }}>
              {text.map((textItem) => (
                <p key={uuid()}>{textItem}</p>
              ))}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
};

export default EmailContactTemplate;
