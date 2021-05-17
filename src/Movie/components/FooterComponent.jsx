import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      App Movie © 2021 Created by Phuc Chelsea
    </Footer>
  );
};
export default React.memo(FooterComponent);
