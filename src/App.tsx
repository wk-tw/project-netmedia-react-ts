import { Stack } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";

type AppRoot = {
  path: string;
  element: JSX.Element;
};

function App(): React.ReactElement {
  const appRoutes: AppRoot[] = [{ path: "/", element: <div /> }];

  const user = null;

  return (
    <div className="app">
      {!user ? <LoginPage /> : <HomePage />}

      <Stack direction="column" spacing={{ xs: 1, sm: 2, md: 4 }}>
        <Routes>
          {appRoutes.map((item) => (
            <Route key={item.path} path={item.path} element={item.element} />
          ))}
        </Routes>
      </Stack>
    </div>
  );
}

export default App;
