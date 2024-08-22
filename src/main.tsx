import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
// Soft UI Dashboard React Context Provider

import { SoftUIControllerProvider } from './context/index.tsx'
import { ThemeProvider } from '@emotion/react'
import theme from './assets/theme/theme-rtl.ts'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SoftUIControllerProvider>
          <App />
        </SoftUIControllerProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
