import axios from 'axios';

// nc(reset, watch, setError, setMessage, formType))}>
export default async function submitFunc(reset, watch, error, setError, sendingProcess, setSendingProcess, setMessageSent, captchaRef) {
  console.log('sendingProcess TEST: ', watch());
  // captchaRef.current.reset();
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
  // console.log('sumbitFunc payload + formType --', { ...payload, formType });

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
    // reset();
    setMessageSent(true);
    setSendingProcess(false);
  }
  reset();
  setError('');
  // setMessageSent(false);
  setSendingProcess(false);
}
