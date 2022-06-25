import "./App.css";
import { Image } from "./components/ImageReact";
import { Routes, Route } from "react-router-dom";
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
              <Navigation />
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/todolist" element={<TodoList />} />
              </Routes>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
