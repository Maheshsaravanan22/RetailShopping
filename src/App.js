import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './Pages/Login';
import PurchaseOrder from './Pages/PurchaseOrder';
import SupplyOrder from "./Pages/SupplyOrder";
import Home from "./Pages/Home";
import Report from "./Pages/Report";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/PurchaseOrder" element={<PurchaseOrder/>} />
          <Route path="/SupplyOrder" element={<SupplyOrder/>} />
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Report" element={<Report/>}/>
        </Routes>     
      </Router>
    </div>
  );
}

export default App;
