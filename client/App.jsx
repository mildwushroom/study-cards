import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import MainContainer from "./containers/MainContainer";
import HomePage from "./pages/HomePage";
import EditorPage from "./pages/EditorPage";
import QuizPage from "./pages/QuizPage";

const App = () => {
  return (
    // <MainContainer />
    <BrowserRouter>
      <Routes>
        <Route
          exact path='/editor/:category' element={<EditorPage />} />
        <Route
          exact path='/' element={<HomePage />} />
        <Route
          exact path='/quiz/:category' element={<QuizPage />} />
        <Route
          path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;