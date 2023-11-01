
import './App.css'
import {
  createBrowserRouter,
} from "react-router-dom";
import Productform from './components/Productform/Productform';
import SuccessPay from './components/SuccessPay/SuccessPay';
import FailPay from './components/FailPay/FailPay';

const App = createBrowserRouter([
  {
    path: "/",
    element:<Productform></Productform>
  },
  {
    path: "/ssl-payment-success",
    element:<SuccessPay></SuccessPay>
  },
  {
    path: "/ssl-payment-fail",
    element:<FailPay></FailPay>
  },
]);

export default App
