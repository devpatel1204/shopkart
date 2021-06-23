import logo from './logo.svg';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header'
import Home from './components/Home/Home';
import Cart from './components/Cart/cart';
function App() {
  return (
    <BrowserRouter className="App">
     <Header></Header>
     <Switch>
       <Route exact path="/" component={Home}></Route>
       <Route path="/Cart" component={Cart}></Route>
     </Switch>
     </BrowserRouter>
  );
}

export default App;
