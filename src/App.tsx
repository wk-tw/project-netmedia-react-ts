import { Stack } from "@mui/material";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import { auth } from "./firebase";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";

type AppRoot = {
  path: string;
  element: JSX.Element;
};

function App(): React.ReactElement {
  const appRoutes: AppRoot[] = [{ path: "/", element: <div /> }];

  const user = null;

  useEffect(() => {
    return auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
      } else {
        // Logged out
      }
    });
  }, []);

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
