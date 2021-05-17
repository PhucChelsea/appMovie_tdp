import React from "react";
import { Row, Col, Pagination } from "antd";
import { searchMovie } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import * as reselect from "../Reselect/search-reselect";
import { createStructuredSelector } from "reselect";
const PaginationPage = () => {
  const dispatch = useDispatch();
  const { nameMovie, totalItem, currentPage } = useSelector(
    createStructuredSelector({
      nameMovie: reselect.nameMovieReselect,
      totalItem: reselect.totalResults,
      currentPage: reselect.getCurrentPage,
    })
  );
  const changePage = (key, page) => {
    dispatch(searchMovie(key, page));
  };

  return (
    <>
      <Row
        style={{ marginTop: "20px", marginBottom: "30px", textAlign: "center" }}
      >
        <Col span={24}>
          <Pagination
            current={currentPage}
            total={totalItem}
            pageSize={20}
            showSizeChanger={false}
            onChange={(pages) => changePage(nameMovie, pages)}
          />
        </Col>
      </Row>
    </>
  );
};
export default PaginationPage;
