import { lazy } from 'react';
import './App.css'
import 'animate.css'
import { Route, Routes } from "react-router-dom"
const Home = lazy(() => import("./Pages/Home/Home"));
const NavPage = lazy(() => import("./components/NavPage"));

const App = () => {

  const routes = [
    { path: '/', element: <Home /> },
    { path: '/about-us', element: '' },
    { path: '/gallery', element: '' },
    { path: '/career', element: '' },
    { path: '/contact-us', element: '' },
  ]

  return (
    <>
      <Routes>
        <Route element={<NavPage />}>
          {
            routes.map(route => <Route path={route.path} element={route.element} key={route.path} />)
          }
        </Route>
      </Routes>
    </>
  )
}

export default App