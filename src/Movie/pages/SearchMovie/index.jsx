import React from "react";
import { Row, Col } from "antd";
import Search from "./components/search";
import Results from "../../components/Results-movies";
import MasterLayoutComponent from "../../components/MasterLayoutComponent";
import PaginationPage from "../../components/Pagination";

const SearchMovie = () => {
  return (
    <MasterLayoutComponent>
      <Row>
        <Col span={24}>
          <Search />
          <Results />
          <PaginationPage />
        </Col>
      </Row>
    </MasterLayoutComponent>
  );
};
export default React.memo(SearchMovie);
