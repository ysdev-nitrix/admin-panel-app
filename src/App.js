import './style/dark.sass';
import HomePage from "./pages/HomePage/HomePage";
import ListPage from "./pages/ListPage/ListPage";
import SinglePage from "./pages/SinglePage/SinglePage";
import NewPage from "./pages/NewPage/NewPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { productInputs, userInputs } from "./formSource";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";



const App = () => {

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>

      <Router >

        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="users">
              <Route index element={<ListPage />} />
              <Route path=":userId" element={<SinglePage />} />
              <Route path="new" element={<NewPage inputs={userInputs} title='Add New User' />} />
            </Route>
            <Route path="products">
              <Route index element={<ListPage />} />
              <Route path=":productId" element={<SinglePage />} />
              <Route path="new" element={<NewPage inputs={productInputs} title='Add New Product' />} />
            </Route>
          </Route>
        </Routes>

      </Router>

    </div>
  );
}

export default App;
