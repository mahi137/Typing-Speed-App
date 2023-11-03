import { GlobalStyle } from "./Styles/global";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./Context/ThemeContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import UserPage from "./Pages/UserPage";


function App() {

  const {theme} = useTheme()
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer/>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/user" element={<UserPage/>}></Route>
      </Routes>

    </ThemeProvider>
  );
}

export default App;
