import { Routes, Route } from "react-router-dom";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { ErrorPage } from "./components/ErrorPage";

function App() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="flex justify-center">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="contact-me" element={<Contact />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
