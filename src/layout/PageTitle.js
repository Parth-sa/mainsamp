const PageTitle = ({ pageName, pageTitle }) => {
  return (
    <section className="page-title-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12">
            <h2 className="page-title text-center">
              {pageTitle ? pageTitle : pageName}
            </h2>
          </div>
          <div className="col-md-6">
            {/* <ul className="breadcrumb-nav">
              <li>
                <Link href={rtl()}>Home</Link>
              </li>
              <li>{pageName}</li>
            </ul> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default PageTitle;
