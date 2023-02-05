import { Stack } from "@mui/material";
import { Route, Routes } from "react-router";
import Detail from "./components/Detail";
import TopRated from "./components/TopRated";

type AppRoot = {
  path: string;
  element: JSX.Element;
};

function App() {
  const appRoutes: AppRoot[] = [
    { path: "/", element: <TopRated /> },
    { path: "/detail/:id", element: <Detail /> },
  ];

  return (
    <Stack direction="column" spacing={{ xs: 1, sm: 2, md: 4 }}>
      <div className="header-bar">Welcome to NETMEDIA : the movie library </div>
      <Routes>
        {appRoutes.map((item) => (
          <Route key={item.path} path={item.path} element={item.element} />
        ))}
      </Routes>
    </Stack>
  );
}

export default App;
