import { Route, Routes } from 'react-router';
import './App.css';
import Detail from './components/Detail';
import TopRated from './components/TopRated';
import { Stack } from '@mui/material';

type AppRoot = {
  path: string,
  element: JSX.Element
}

function App() {

  const appRoutes: AppRoot[] = [
    { path: '/', element: <TopRated /> },
    { path: '/detail/:id', element: <Detail /> },
  ]

  return (
    <Stack direction="column" spacing={{ xs: 1, sm: 2, md: 4 }}>
      <div className='header-bar'>Welcome to NETMEDIA : the movie library </div>
      <Routes>
        {
          appRoutes.map((item, index) => (
            <Route key={index} path={item.path} element={item.element} />
          ))
        }
      </Routes>
    </Stack>
  )
}

export default App
