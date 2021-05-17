import React from "react";
import { Row, Col } from "antd";
import MasterLayoutComponent from "../../components/MasterLayoutComponent";

const PopularMovie = () => {
  return (
    <MasterLayoutComponent>
      <Row>
        <Col span={24}>
          <h1>this is popular</h1>
        </Col>
      </Row>
    </MasterLayoutComponent>
  );
};
export default React.memo(PopularMovie);
