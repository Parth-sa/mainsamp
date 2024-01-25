import Footer from "../src/layout/footer/Footer";
import Header from "../src/layout/header/Header";
import Layout from "../src/layout/Layout";
import Index4Page from "../src/pages/Index4Page";

const Index4 = () => {
  return (
    <Layout noHeader noFooter>
      <Header dark />
      <Index4Page />
      <Footer />
    </Layout>
  );
};
export default Index4;
