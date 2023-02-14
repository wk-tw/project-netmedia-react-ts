import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import "./App.css";
import { auth } from "./firebase";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { login, logout, selectUser } from "./redux/userSlice";

type AppRoot = {
  path: string;
  element: JSX.Element;
};

function App(): React.ReactElement {
  const appRoutes: AppRoot[] = [
    { path: "/", element: <HomePage /> },
    { path: "/profile", element: <ProfilePage /> },
  ];
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  useEffect(() => {
    return auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          }),
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      {!user ? (
        <LoginPage />
      ) : (
        <Routes>
          {appRoutes.map((item) => (
            <Route key={item.path} path={item.path} element={item.element} />
          ))}
        </Routes>
      )}
    </div>
  );
}

export default App;
