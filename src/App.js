import { Component } from 'react';
import './App.css';
import Header from './Header' ;
import Main from './Main';
import Tolbar from './Toolbar';
import SideDrawer from './SideDrawer';


class App extends Component {
state = {
  sideDrawerOpen:false
};

drawerToggleClickHandler = () => {
  this.setState((prevState) => {
    return {sideDrawerOpen: !prevState.sideDrawerOpen};
  });

};  

render(){
let sideDrawer;

if (this.state.sideDrawerOpen){
  sideDrawer =  <SideDrawer />
}
  return (
    <div >
      <Header />
       <Tolbar />
        <Main  drawerClickHandler={this.drawerToggleClickHandler}/>
       {sideDrawer}
    </div>
  );
}
}
export default App;
