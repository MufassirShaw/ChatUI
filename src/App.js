import React,{Fragment} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import io from "socket.io-client";
import Main from "./Components/Layout/Main";
import Form from "./Components/Layout/Form";
import "./assests/custom.css";
import "typeface-roboto";
const url = "http://localhost:8000/"; // This is the url where our server is setup
class App extends React.Component {
  constructor(){
    super();

    this.state = !(localStorage.getItem("id") 
                      && 
                  localStorage.getItem("nickName")) //if there is no user stored in local storage
      ?
    {
      nickName: null,
      id:null,
      socket: null,
    }
      :
    {
      nickName: localStorage.getItem("nickName"),
      id: localStorage.getItem("id"),
      socket: null,
    }; //maintaing user state

  }  

  storeUserLocally = (user)=>{
    localStorage.setItem("id" ,user.id);
    localStorage.setItem("nickName", user.nickName); 
  }

  isUserStoredLocally=()=>{
    return !(localStorage.getItem("id") && localStorage.getItem("nickName")) //if there is no user stored in local storag
            ?
          false 
            : 
          true;
  }

  
  render() {
    return (
      <Fragment>
        <CssBaseline/>
        <div className="App">
          {
            !this.state.nickName
              ?
            <Form socket={this.state.socket}/>
              :
            <Main 
            />
          }
        </div>
      </Fragment>
    );
  }
}

export default App;
