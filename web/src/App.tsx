import type { FC } from "react";
import { Provider } from "urql";
import getClient from "graph/client";
import Router from "Router";

const App: FC = () => (
  <Provider value={getClient()}>
    <Router />
  </Provider>
);

export default App;
