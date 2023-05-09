import axios from 'axios';

export default async function submitFunc(reset, watch, error, setError, sendingProcess, setSendingProcess, setMessageSent, captchaRef) {
  console.log('sendingProcess TEST: ', watch());
  if (sendingProcess) return;
  setMessageSent(false);

  const captchaToken = await captchaRef.current.executeAsync();

  if (!captchaToken) {
    setError('reCaptcha failed');
    return;
  }
  console.log('test ');
  setError('');
  setSendingProcess(true);
  setMessageSent(false);

  const payload = watch();

  payload.captchaToken = captchaToken;

  const { response } = await axios
    .post('/api/contact', payload)
    .catch((responseError) => {
      setError(responseError.response.data.error);
      return responseError;
    })
    .finally(() => {
      captchaRef.current.reset();
    });

  if (!response?.data?.error) {
    setMessageSent(true);
    setSendingProcess(false);
  }
  reset();
  setError('');
  setSendingProcess(false);
}
