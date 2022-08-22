import { BrowserRouter, Switch, Route } from "react-router-dom";
//pages
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Recpie from "./pages/recipe/Recipe";
import Search from "./pages/search/Search";
//compontents
import Navbar from "./compontents/Navbar";
import ThemeSelector from "./compontents/ThemeSelector";
//styles
import "./App.css";

import { useTheme } from "./hooks/useTheme";

function App() {
  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/recipes/:id">
            <Recpie />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
