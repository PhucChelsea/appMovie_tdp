import React from "react";
import { Row, Col } from "antd";
import MasterLayoutComponent from "../../components/MasterLayoutComponent";

const UpComingMovie = () => {
  return (
    <MasterLayoutComponent>
      <Row>
        <Col span={24}>
          <h1>this is upcoming</h1>
        </Col>
      </Row>
    </MasterLayoutComponent>
  );
};
export default React.memo(UpComingMovie);
