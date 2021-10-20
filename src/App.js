import "./App.css";
import { Image } from "./components/ImageReact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/HomePage";
import TodoList from "./components/TodoList";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <header className="App-header ">
        <Image />
        <div className="grid wide">
          <div className="row">
            <div className="col l-12 m-12 c-12">
              <Router>
                <Navigation />
                <Switch>
                  <Route path="/HomePage" component={Home} />
                  <Route path="/ToDoList" component={TodoList} />
                </Switch>
              </Router>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
