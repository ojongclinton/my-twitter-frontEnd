import { Routes,Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { TwitController,ExploreController, Auth } from "./Routes";


function App() {
  return (
    <div className="App">
      <ToastContainer />
        <div>
            <Routes>
              {/*TODO: Block authenticated users from accesing this page */}
              <Route path="/auth" element={<Auth/>}/>

              {/*If the user is not yet auth when trying to visit this, redirect to auth*/}
              <Route path="/*" element={<TwitController />}/>

              {/*User can visit here without needing to be auth*/}
              <Route path="explore/*" element={<ExploreController />}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;
