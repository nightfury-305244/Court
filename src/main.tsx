import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'
import "./assets/fonts/stylesheet.css"
import { ThemeProvider } from '@emotion/react'
import { Container } from '@mui/material'
import { theme } from './styles/theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm" >
          <App />
        </Container>
      </ThemeProvider>
    </Provider>
)
