import {createTheme, ThemeProvider} from "@mui/material";
import './App.css'
import Register from "./pages/Register.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login.jsx";




const theme = createTheme({
    palette: {
    }
})

function App() {

  return (
      <BrowserRouter>
          <ThemeProvider theme = {theme}>
              <Routes>
                  <Route path = "/">
                      <Route index element={<Login/>} />
                      <Route path="chat" element={<ChatPage />} />
                      <Route path="signUp" element={<Register />} />
                  </Route>

              </Routes>
          </ThemeProvider>
      </BrowserRouter>
  )
}

export default App
