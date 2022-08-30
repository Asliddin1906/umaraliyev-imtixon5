import { useAuth } from "./hook/useAuth/useAuth";
import { Private } from "./Private";
import { Public } from "./Public";
import "./assets/css/main.css"
import "./App.css"
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/SignUp/SignUp";



function App() {
  const {token} = useAuth();
  
    // if (token) {
    //   return (
    //     <Private />
    //   );
    // }
    //   return (
    //     <Public/>
    //   )

      return <Private/>
      
}

export default App;
