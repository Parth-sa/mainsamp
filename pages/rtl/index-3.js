import Footer2 from "../../src/layout/footer/Footer2";
import Header3 from "../../src/layout/header/Header3";
import RtlLayout from "../../src/layout/rtl/Layout";
import Index3Page from "../../src/pages/Index3Page";

const Index3 = () => {
  return (
    <RtlLayout noHeader noFooter>
      <Header3 />
      <Index3Page />
      <Footer2 />
    </RtlLayout>
  );
};
export default Index3;
