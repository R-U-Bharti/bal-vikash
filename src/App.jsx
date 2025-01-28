import { lazy } from 'react';
import './App.css'
import 'animate.css'
import { Route, Routes } from "react-router-dom"
const NotFound = lazy(() => import('./Components/NotFound'));
const Gallery = lazy(() => import('./Pages/Gallery/Gallery'));
const Home = lazy(() => import("./Pages/Home/Home"));
const NavPage = lazy(() => import("./components/NavPage"));

const App = () => {

  const routes = [
    { path: '/', element: <Home /> },
    { path: '/about-us', element: '' },
    { path: '/gallery', element: <Gallery /> },
    { path: '/career', element: '' },
    { path: '/contact-us', element: '' },
  ]

  return (
    <div>
      <Routes>
        <Route element={<NavPage />}>
          {
            routes.map(route => <Route path={route.path} element={route.element} key={route.path} />)
          }
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App