import React from "react";
import PropTypes from "prop-types";
import Input from "../../../components/Input";
import StringButton from "../../../components/StringButton";
import { AddFormWrapper } from "./style";

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleCancel = () => {
    const { handleCancel } = this.props;
    handleCancel();
  };

  handleSubmitAddContact = () => {
    const { handleSubmitAddContact } = this.props;
    handleSubmitAddContact();
  };

  handleInputChange = (event) => {
    const { onChangeInput } = this.props;
    onChangeInput(event);
  };

  render() {
    const { contact } = this.props;
    const { surname, name, company, telephone, iphone, note } = contact;
    return (
      <AddFormWrapper>
        <div className="form">
          <div className="header-form">
            <span className="title-header">Tạo địa chỉ liên hệ mới</span>
          </div>
          <div className="body-form">
            <div className="avatar-info">
              <div className="avatar">
                <img src="" alt="avatar" />
                <i className="fas fa-camera"></i>
                <input type="file" />
              </div>
              <div className="form-info">
                <Input
                  placeholder="Họ"
                  type="text"
                  value={surname}
                  autoComplete="off"
                  name="surname"
                  onChange={this.handleInputChange}
                />
                <Input
                  name="name"
                  value={name}
                  type="text"
                  autoComplete="off"
                  placeholder="tên"
                  onChange={this.handleInputChange}
                />
                <Input
                  name="company"
                  value={company}
                  type="text"
                  autoComplete="off"
                  placeholder="Công ty"
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="telephone">
              <Input
                name="telephone"
                value={telephone}
                type="text"
                autoComplete="off"
                placeholder="+84012345678"
                iconSortDown="true"
                label="Di động"
                onChange={this.handleInputChange}
              />
              <Input
                name="iphone"
                value={iphone}
                type="text"
                autoComplete="off"
                placeholder="+84012345678"
                iconSortDown="true"
                label="Iphone"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="note">
              <span className="note-title">Ghi chú</span>
              <textarea
                name="note"
                value={note}
                onChange={() => {}}
                className="note-content"
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="footer-form">
            <StringButton
              content="Hủy"
              color="#2F80ED"
              onClick={this.handleCancel}
            />
            <StringButton
              disabled={!(name && telephone)}
              content="Xong"
              color="#2F80ED"
              onClick={this.handleSubmitAddContact}
            />
          </div>
        </div>
      </AddFormWrapper>
    );
  }
}

AddForm.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  handleSubmitAddContact: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired,
};
export default AddForm;
