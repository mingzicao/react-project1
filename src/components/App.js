import React from 'react';
import '../styles/App.css';
import {Header} from './Header'
import { Main } from './Main'
class App extends React.Component {
   state = {
       isLoggedIn: false,
   }
   loginHandler = () => {
       this.setState({isLoggedIn: true});
   }

  render() {
    return (
      <div className="App">
        <Header/>
        <Main isLoggedIn = {this.state.isLoggedIn} loginHandler = {this.loginHandler}/>
      </div>
    );
  }
}

export default App;
