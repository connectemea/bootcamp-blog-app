import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import CreateBlog from "./components/pages/CreateBlog";
import BlogsProvider from "./context/BlogsContext";
function App() {
  return (
    <Router>
      <Switch>
        <BlogsProvider>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/create" component={CreateBlog} />
        </BlogsProvider>
      </Switch>
    </Router>
  );
}

export default App;
