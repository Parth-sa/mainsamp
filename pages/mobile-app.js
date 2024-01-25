import Layout from "../src/layout/Layout";
import Header7 from "../src/layout/header/Header7";
import MobileAppPage from "../src/pages/blog/MobileAppPage";

const MobileApp = () => {
  return (
    <Layout noHeader>
      <Header7 />
      <MobileAppPage />
    </Layout>
  );
};
export default MobileApp;
