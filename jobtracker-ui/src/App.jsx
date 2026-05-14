import Dashboard from "./dashboard/dashboard.jsx";
import {Route, Routes} from "react-router-dom";
import AddApplication from "./addApplication/addApplication.jsx";

function App(){

  return(
      <>
          <Routes>
              <Route path={"/dashboard"} element={<Dashboard/>}></Route>
              {<Route path={"/add-application"} element={<AddApplication/>}></Route>}
              {/*<Route path={"/account"} element={<Account/>}></Route>*/}

          </Routes>
      </>

  );
}

export default App
