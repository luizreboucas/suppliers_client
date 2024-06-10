import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { Provider } from 'react-redux'
import { store } from './redux/store/store.ts'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
