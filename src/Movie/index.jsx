import RouteMovie from "./route/index";
import { Provider } from "react-redux";
import configStore from "./store/configStore";
import { PersistGate } from "redux-persist/integration/react";
import { Spin } from "antd";

const { store, persistor } = configStore({});
const AppMovie = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Spin tip="loading" />} persistor={persistor}>
        <RouteMovie />
      </PersistGate>
    </Provider>
  );
};
export default AppMovie;
