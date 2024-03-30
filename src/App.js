import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";

function App() {
  return (
    <div>
      <div className="w-full h-screen">
        <div className="flex justify-center">
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
