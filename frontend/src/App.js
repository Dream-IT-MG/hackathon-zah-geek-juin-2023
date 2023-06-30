import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from "@mui/material/styles";

// import './App.css';
import { DetailFormation } from './views/DetailFormation';
import theme from "./assets/theme";


function App() {
  return (
    // <div className="App">
      <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path = "/" element={<DetailFormation/>} />
        </Routes>
      </Router>

      </ThemeProvider>
    // </div>
  );
}

export default App;
