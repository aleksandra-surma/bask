export const Custom404 = () => null;

export const getServerSideProps = async () => {
  return { redirect: { destination: '/', statusCode: 301 } };
};

export default Custom404;
