import { Fragment } from "react";

const CopyRight = () => {
  return (
    <Fragment>
      Copyright @{new Date().getFullYear()} <a href="#">SAMP Technologies</a>{" "}
      All Right Reserve
    </Fragment>
  );
};
export default CopyRight;
