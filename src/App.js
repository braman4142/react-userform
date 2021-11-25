import React, { useState, useEffect} from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAllUsers } from "./actions/userActions";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/register";
import Login from "./Pages/login";


function App(props) {
  
  //const [users, setUsers] = useState([]);
  //useEffect(() => {
//		props.getAllUsers();
//	}, []);

  


 // function addUser(user) {
  
  //  setUsers([...users, user]);
  

  return (
    <BrowserRouter>
			<Route exact path="/" component={Home} />
			<Route path="/register" component={Register} />
			<Route path="/login" component={Login} />
		</BrowserRouter>
  );
}
   // <div className="App">
     // <UserForm addUser={addUser} />
     // <UserList data={users} />
    //</div>
  //);
//}

const mapDispatchToProps = {
	getAllUsers: getAllUsers,
};


        export default App;