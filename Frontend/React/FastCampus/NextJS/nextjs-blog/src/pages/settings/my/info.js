import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';

export default function MyInfo() {
  return (
    <>
      <h1 className="title">MyInfo</h1>
    </>
  );
}

MyInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
