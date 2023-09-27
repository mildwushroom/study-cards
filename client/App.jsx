import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import MainContainer from "./containers/MainContainer";
import HomePage from "./pages/HomePage";
import EditorPage from "./pages/EditorPage"

const App = () => {
  return (
    // <MainContainer />
    <BrowserRouter>
      <Routes>
        <Route
          exact path='/editor' element={<EditorPage />} />
        <Route
          exact path='/' element={<HomePage />} />
        <Route
          path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;