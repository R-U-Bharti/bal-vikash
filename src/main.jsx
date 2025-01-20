import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
const App = lazy(() => import('./App.jsx'));
import { BrowserRouter } from 'react-router-dom'
const ErrorBoundary = lazy(() => import('./Components/ErrorBoundary'));
const CompLoader = lazy(() => import('./Components/CompLoader'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary errorMsg="Something went wrong!">
      <BrowserRouter>
        <Suspense fallback={<CompLoader />}>
          <App />
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
