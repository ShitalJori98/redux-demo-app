import logo from './logo.svg';
import './styles/App.scss';
import { povider, Provider } from "react-redux";
import store from './store';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/header/Navbar';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact'
import EditContact from './components/contacts/EditContact'
function App() {
  return (
    <Provider store={store}>
          <Router>
          <div className="App">
                <Navbar/>
                   <h1 className="text-dark" >Welcome To Contact Book Application</h1>
                     <div className="container">
                         <div className="py-3">
                          <Switch>
                            <Route exact path="/" component={Contacts}/>
                            <Route exact path="/contacts/add" component={AddContact}/>
                            <Route exact path="/contacts/edit/:id" component={EditContact}/>
                          </Switch>
                         </div>
                      </div>
              </div>   
          </Router>  
      </Provider>
  
  );
}

export default App;
