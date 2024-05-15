import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider} from "./context/AuthContext.jsx";

// The app is inspired from the following -: https://youtu.be/k4mjF4sPITE
ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AuthContextProvider>,
)
