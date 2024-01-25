import Footer3 from "../src/layout/footer/Footer3";
import Header5 from "../src/layout/header/Header5";
import Layout from "../src/layout/Layout";
import Index5Page from "../src/pages/Index5Page";

const Index5 = () => {
  return (
    <Layout noHeader noFooter>
      <Header5 />
      <Index5Page />
      <Footer3 />
    </Layout>
  );
};
export default Index5;
