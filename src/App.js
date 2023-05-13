import logo from './logo.svg';
import './App.css';
import Cookie from './components/cookie';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';


const theme = createTheme({
  status: {
    danger: orange[500],
  },
});


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Cookie></Cookie>
      </ThemeProvider>
    </div>
  );
}

export default App;
