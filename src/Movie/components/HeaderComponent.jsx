import React from "react";
import styled from "styled-components";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

const { Header } = Layout;

const DivLogo = styled.div`
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
`;
const HeaderComponent = () => {
  const { pathname } = useLocation();
  return (
    <Header>
      <DivLogo />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathname}>
        <Menu.Item key="/search-movie">
          <Link to="/search-movie"> Search Movie</Link>
        </Menu.Item>
        <Menu.Item key="/popular-movie">
          <Link to="/popular-movie">Popular Movie</Link>
        </Menu.Item>
        <Menu.Item key="/upcoming-movie">
          <Link to="/upcoming-movie"> UpcomingMovie</Link>
        </Menu.Item>
        <Menu.Item key="/favorite-movie">
          <Link to="/favorite-movie">Favorite Movie</Link>
        </Menu.Item>
        <Menu.Item key="/login-movie">
          <Link to="/login-movie">Login</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};
export default React.memo(HeaderComponent);
