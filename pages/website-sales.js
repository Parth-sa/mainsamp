import Layout from "../src/layout/Layout";
import Header7 from "../src/layout/header/Header7";
import WebsiteSalesPage from "../src/pages/blog/WebsiteSalesPage";

const WebsiteSales = () => {
  return (
    <Layout noHeader>
      <Header7 />
      <WebsiteSalesPage />
    </Layout>
  );
};
export default WebsiteSales;
