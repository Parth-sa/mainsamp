import Header2 from "../../src/layout/header/Header2";
import RtlLayout from "../../src/layout/rtl/Layout";
import Index2Page from "../../src/pages/Index2Page";

const Index2 = () => {
  return (
    <RtlLayout noHeader>
      <Header2 />
      <Index2Page />
    </RtlLayout>
  );
};
export default Index2;
