import ReactDOM from 'react-dom/client'
import { App } from './App/App'
import { theme } from './theme'
import { ThemeProvider } from "@mui/material/styles"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <App />
    
  </ThemeProvider>,
)
