import React, { useEffect, useState } from "react";

import { Row, Col, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { searchMovie } from "../../../actions/index";
import { nameMovieReselect } from "../../../Reselect/search-reselect";
import { createStructuredSelector } from "reselect";

const { Search } = Input;

const SearchMovie = () => {
  const dispatch = useDispatch();
  const { nameMovie } = useSelector(
    createStructuredSelector({ nameMovie: nameMovieReselect })
  );

  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (keyword === "") {
      setKeyword(nameMovie);
    }
  }, []);

  const changeInput = (event) => {
    const val = event.target.value;
    setKeyword(val);
  };

  const searchMovieByKeyword = (name) => {
    dispatch(searchMovie(name, page));
  };
  return (
    <>
      <Row style={{ margin: "20px 0px" }}>
        <Col span={12} offset={6}>
          <Search
            placeholder="enter movie "
            enterButton
            onSearch={(val) => searchMovieByKeyword(val)}
            onChange={changeInput}
            value={keyword}
          />
        </Col>
      </Row>
    </>
  );
};
export default React.memo(SearchMovie);
