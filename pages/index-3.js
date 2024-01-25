import Footer2 from "../src/layout/footer/Footer2";
import Header3 from "../src/layout/header/Header3";
import Layout from "../src/layout/Layout";
import Index3Page from "../src/pages/Index3Page";

const Index3 = () => {
  return (
    <Layout noHeader noFooter>
      <Header3 />
      
      <Index3Page />
      <Footer2 />
    </Layout>
  );
};
export default Index3;
