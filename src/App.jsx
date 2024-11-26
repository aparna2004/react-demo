import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HelloWorld from "./components/HelloWorld";
import GreetingDemo from "./components/Greeting.jsx";
import Counter from "./components/Counter";
import TodoApp from "./components/TodoApp";
import CatImages from "./components/CatsImages.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Hello World</Link>
            </li>
            <li>
              <Link to="/greeting">Greeting</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/todo">To-Do List</Link>
            </li>
            <li>
              <Link to="/cat">Cat Images</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HelloWorld />} />
          <Route path="/greeting" element={<GreetingDemo />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/cat" element={<CatImages />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
