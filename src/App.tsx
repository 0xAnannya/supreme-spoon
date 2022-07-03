import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HowToPlayPage from "./pages/HowToPlayPage";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-to-play" element={<HowToPlayPage />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
