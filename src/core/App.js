import { Switch, Route } from "react-router-dom";

import Card from "../components/Card";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Card />
      </Route>
      <Route>
        <div>404</div>
      </Route>
    </Switch>
  );
}

export default App;
