import React from "react";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import PropTypes from "prop-types";
import { Layout } from "antd";
import styled from "styled-components";

const { Content } = Layout;
const SiteLayoutContent = styled.div`
  min-height: 480px;
  padding: 15px;
  background: #fff;
`;
const MasterLayoutComponent = (props) => {
  return (
    <Layout>
      <HeaderComponent />
      <Content style={{ padding: "0 20px" }}>
        <SiteLayoutContent>{props.children}</SiteLayoutContent>
      </Content>
      <FooterComponent />
    </Layout>
  );
};
MasterLayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
};
export default React.memo(MasterLayoutComponent);
