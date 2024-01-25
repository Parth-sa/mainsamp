import Footer from "../../src/layout/footer/Footer";
import Header from "../../src/layout/header/Header";
import RtlLayout from "../../src/layout/rtl/Layout";
import Index4Page from "../../src/pages/Index4Page";

const Index4 = () => {
  return (
    <RtlLayout noHeader noFooter>
      <Header dark />
      <Index4Page />
      <Footer />
    </RtlLayout>
  );
};
export default Index4;
