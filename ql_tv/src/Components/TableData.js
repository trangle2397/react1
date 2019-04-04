import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
  deleteButtonClick = (idUser) => {
    this.props.deleteUser(idUser);
  }
  mappingDataUser = () => this.props.dataUserProps.map((value,key) => (
    <TableDataRow
     deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)}
     editFunClick={(user) => this.props.editFun(value)} userName={value.name} key={key} stt={key} tel={value.tel} permission={value.Permission} changeEditUserStatus = {() => this.props.changeEditUserStatus()} id={value.id}/>
  ))

    render() {
      // console.log(this.state.dataUserProps);
        return (
            <div className="col-9">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Họ tên</th>
                  <th>Điện thoại</th>
                  <th>Quyền</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {this.mappingDataUser()}
              </tbody>
            </table>
          </div>
        );
    }
}

export default TableData;