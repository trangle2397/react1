import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';

const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : DataUser,
      searchText:'',
      editUserStatus:false,
      userEditObject:{}
    }
  }

  deleteUser = (idUser) => {
    var tempData = this.state.data.filter(item => item.id !== idUser);
      this.setState({
        data:tempData
      });
    // console.log(tempData);

    // tempData.forEach((value,key) => {
    //   if(value.id === idUser){
    //     console.log(key);
    //     this.state.data
    //   }
    // })
  }

  getUserEditInfoApp = (info) => {
    this.state.data.forEach((value,key) => {
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.Permission = info.Permission;
      }
    })
  }

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus : !this.state.editUserStatus
    });
  }
  
  editUser = (user) => {
    this.setState({
      userEditObject:user
    });
  }

  getNewUserData = (name,tel,Permission) => {
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.Permission = Permission;
    var items = this.state.data;
    this.setState({
      data:items
    });
    items.push(item);
  }

  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    });
  }

  render() {
    var ketqua = [];
    this.state.data.forEach((item)=>{
      if(item.name.indexOf(this.state.searchText) !== -1){
        ketqua.push(item);
      }
    })
    // console.log(ketqua);
    // console.log(this.state.data);
    return (
      <div>
        <Header/>
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search getUserEditInfoApp={(info) => this.getUserEditInfoApp(info)}
              userEditObject={this.state.userEditObject} checkConnectProps={(dl)=>this.getTextSearch(dl)} editUserStatus={this.state.editUserStatus} changeEditUserStatus = {() => this.changeEditUserStatus()}/>
              <TableData 
              deleteUser = {(idUser) => this.deleteUser(idUser)}
              editFun = {(user) => this.editUser(user)} dataUserProps={ketqua} 
              changeEditUserStatus = {() => this.changeEditUserStatus()}/>
              <AddUser add={(name,tel,Permission) => this.getNewUserData(name,tel,Permission)}/>  
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
