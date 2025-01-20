import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
const App = lazy(() => import('./App.jsx'));
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './components/ThemeProvider';
const Background = lazy(() => import('./components/Background'));
const ErrorBoundary = lazy(() => import('./components/ErrorBoundary'));
const CompLoader = lazy(() => import('./components/CompLoader'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary errorMsg="Something went wrong!">
      <BrowserRouter basename='bal-vikash'>
        <Suspense fallback={<CompLoader />}>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Background>
              <App />
            </Background>
          </ThemeProvider>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
