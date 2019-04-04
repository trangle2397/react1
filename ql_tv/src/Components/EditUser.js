import React, { Component } from 'react'

export default class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id : this.props.userEditObject.id,
      name : this.props.userEditObject.name,
      tel : this.props.userEditObject.tel,
      Permission : this.props.userEditObject.Permission
    }
  }
  
  saveButton = () => {
    var info = {};
    info.id = this.state.id;
    info.name = this.state.name;
    info.tel = this.state.tel;
    info.Permission = this.state.Permission;

    // console.log("info là: " + info.name);
    this.props.getUserEditInfo(info);
    this.props.changeEditUserStatus();//Ẩn form
  }

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]:value});
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <form method="post">
            <div className="card border-primary mb-3 mt-2">
              <div className="card-header text-center">Sửu thông tin User trong hệ thống</div>
              <div className="card-body text-primary">
                <div className="form-group">
                  <input onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.name} type="text" name="name" className="form-control"  placeholder="Tên user" />
                </div>
                <div className="form-group">
                  <input onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.tel} type="text" name="tel" className="form-control"  placeholder="Điện thoại" />
                </div>
                <div className="form-group">
                  <select onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.Permission} className="custom-select" name="Permission" required>
                    <option value>Chọn Quyền mặc định</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Moderator</option>
                    <option value={3}>Normal</option>
                  </select>
                </div>
                <div className="form-group">
                  <input type="button" className="btn btn-block btn-primary" value="Lưu" onClick={() => this.saveButton()}/>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
