import './App.css';
import DashBorad from './component/DashBorad';
import NavBar from './component/NavBar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Update from './component/Update';
import ViewUser from './component/ViewUser';
import AddProduct from './component/AddProduct';
import Resgiter from './component/Resgiter';


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={DashBorad}/>
        <Route exact path="/update/:id" component={Update}/>
        <Route exact path="/view-user/:id" component={ViewUser}/>
        <Route exact path="/product" component={AddProduct}/>
        <Route exact path="/resgiter" component={Resgiter}/>
      </Switch>
      </Router>
    
    </div>
  );
}

export default App;
