import React from "react";
import { Row, Col, Card, Skeleton } from "antd";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

import * as reselect from "../Reselect/search-reselect";

const { Meta } = Card;
const ResultMovies = () => {
  // const loading = useSelector((state) => state.searchMovie.loading);
  // // tham so trong useSelector: selector -  la 1 ham lay state duoc tra ra tu reducer trong store
  // const movies = useSelector((state) => state.searchMovie.dataMovies);
  const { loading, movies, totalItems } = useSelector(
    createStructuredSelector({
      loading: reselect.loadingReselect,
      movies: reselect.resultMovieReselect,
      totalItems: reselect.totalResults,
    })
  );
  if (loading) {
    return (
      <Row style={{ padding: "10px" }}>
        <Col span={24}>
          <Skeleton active />
        </Col>
      </Row>
    );
  }
  return (
    <>
      <Row
        style={{ padding: "10px" }}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        {movies
          ? movies.map((item, index) => (
              <Col key={index} className="gutter-row" span={6}>
                <Card
                  hoverable
                  style={{ width: 240, margin: "10px auto" }}
                  cover={
                    <img
                      alt={item.title}
                      src={`http://image.tmdb.org/t/p/w300/${item.poster_path}`}
                    />
                  }
                >
                  <Meta title={item.title} />
                </Card>
              </Col>
            ))
          : null}
      </Row>
    </>
  );
};
export default React.memo(ResultMovies);
