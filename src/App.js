import Contacts from './components/header/contacts/Contacts';
import Navbar from './components/header/Navbar';
import logo from './logo.svg';
import './styles/App.scss';
import { povider, Provider } from "react-redux";
import store from './store';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
        <h1 className="text-dark">Welcome To Contact Book Application</h1>
          <Provider store={store}>
                  <div className="container">
                      <div className="py-3">
                          <Contacts/>
                      </div>
                  </div>
          </Provider>
    </div>
  );
}

export default App;
