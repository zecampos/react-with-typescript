import * as React from "react";

const DefaultLayout: React.FC = ({ children }) => (
  <>
    <h1>Default</h1>
    <div>{children}</div>
  </>
);

export default DefaultLayout;
