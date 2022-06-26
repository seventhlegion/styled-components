import { ThemeProvider } from "styled-components";
import { Container } from "./Components/Style/Container.styled";
import Header from "./Components/Header";
import Card from "./Components/Card";
import GlobalStyles from "./Components/Style/Global";
import content from './Content'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme = { theme } >
      <>
      <GlobalStyles />
      <Header />
      <Container>
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
