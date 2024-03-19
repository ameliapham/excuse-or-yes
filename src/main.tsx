import ReactDOM from 'react-dom/client'
import { App } from './App/App'
import { theme } from './theme'
import { ThemeProvider } from "@mui/material/styles"
import { I18nFetchingSuspense } from './i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <I18nFetchingSuspense fallback={null}>
    <ThemeProvider theme={theme}>
      <App />

    </ThemeProvider>
  </I18nFetchingSuspense>
)
