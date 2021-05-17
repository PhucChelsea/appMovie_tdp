import React, { lazy, Suspense } from "react";
import { Skeleton } from "antd";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const SearchPage = lazy(() => import("../pages/SearchMovie/index"));
const PopularPage = lazy(() => import("../pages/PopularMovie/index"));
const UpcomingPage = lazy(() => import("../pages/UpcomingMovie/index"));
const FavoritePage = lazy(() => import("../pages/FavoriteMovie/index"));
const LoginPage = lazy(() => import("../pages/Login/index"));
const RouteMovie = () => {
  return (
    <Router>
      <Suspense fallback={<Skeleton active />}>
        <Switch>
          <Route path="/" exact>
            <SearchPage />
          </Route>
          <Route path="/search-movie">
            <SearchPage />
          </Route>
          <Route path="/popular-movie">
            <PopularPage />
          </Route>
          <Route path="/upcoming-movie">
            <UpcomingPage />
          </Route>
          <Route path="/favorite-movie">
            <FavoritePage />
          </Route>
          <Route path="/login-movie">
            <LoginPage />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};
export default React.memo(RouteMovie);
