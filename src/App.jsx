
import './App.css'
import {
  createBrowserRouter,
} from "react-router-dom";
import Productform from './components/Productform/Productform';
import SuccessPay from './components/SuccessPay/SuccessPay';

const App = createBrowserRouter([
  {
    path: "/",
    element:<Productform></Productform>
  },
  {
    path: "/ssl-payment-success",
    element:<SuccessPay></SuccessPay>
  },
]);

export default App
