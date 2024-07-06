import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import Layout from '@/src/common/components/layouts';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
