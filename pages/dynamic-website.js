import Layout from "../src/layout/Layout";
import Header from "../src/layout/header/Header";
import Header2 from "../src/layout/header/Header2";
import Header3 from "../src/layout/header/Header3";
import Header7 from "../src/layout/header/Header7";
import DynamicWebsitePage from "../src/pages/blog/DynamicWebsitePage";

const DynamicWebsite = () => {
  return (
    <Layout noHeader>
      <Header7 />
      <DynamicWebsitePage />
    </Layout>
  );
};
export default DynamicWebsite;
