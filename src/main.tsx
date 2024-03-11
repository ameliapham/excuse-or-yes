import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { ThemeProvider, createTheme } from "@mui/material/styles"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider
    theme={createTheme({
      palette: {
        primary: {
          main: "#003049"
        },
        secondary: {
          main: "#bde0fe"
        },
        background: {
          default: "#ffe5ec",
          paper: "#ffc8dd",
        }
      },
      typography: {
        fontFamily: "geist",
        fontSize: 16,
      },      
    })}
  >
    <App />
  </ThemeProvider>,
)
