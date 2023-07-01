import { Routes,Route } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Auth from "./Components/Authentication/Auth";


function App() {
  return (
    <div className="App">
      <Header />
        <div>
            <Routes>
              <Route path="/auth/*" element={<Auth />}/>
            </Routes>
        </div>
      <Footer />
    </div>
  );
}

export default App;
