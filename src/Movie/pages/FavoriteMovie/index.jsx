import React from "react";
import { Row, Col } from "antd";
import MasterLayoutComponent from "../../components/MasterLayoutComponent";

const FavoriteMovie = () => {
  return (
    <MasterLayoutComponent>
      <Row>
        <Col span={24}>
          <h1>this is favorite</h1>
        </Col>
      </Row>
    </MasterLayoutComponent>
  );
};
export default React.memo(FavoriteMovie);
