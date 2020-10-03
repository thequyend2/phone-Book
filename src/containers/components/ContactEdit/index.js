import React from "react";
import PropTypes from "prop-types";
import { EditItemWrapper } from "./style";
import Input from "../../../components/Input";
import StringButton from "../../../components/StringButton";

class EditItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChangeInput = (event) => {
    const { onChangeEdit } = this.props;
    onChangeEdit(event);
  };

  handleSubmitEditContact = (contact) => {
    const { onSubmitEdit } = this.props;
    onSubmitEdit(contact);
  };

  handleDeleteItem = (contact) => {
    // console.log("handleDeleteItem===", contact)
    const { onDeleteContact } = this.props;
    onDeleteContact(contact);
  }

  render() {
    const { contact } = this.props;
    const { name, surname, company, telephone, note, iphone } = contact;
    return (
      <EditItemWrapper>
        <div className="avatar-info">
          <div className="avatar">
            <img src="" alt="avatar" />
            <i className="fas fa-camera"></i>
            <input type="file" />
          </div>
          <div className="info-personal">
            <Input
              name="surname"
              value={surname}
              type="text"
              autoComplete="off"
              placeholder="Họ"
              onChange={(event) => this.handleChangeInput(event)}
            />
            <Input
              name="name"
              value={name}
              type="text"
              autoComplete="off"
              placeholder="Tên"
              onChange={(event) => this.handleChangeInput(event)}
            />
            <Input
              name="company"
              value={company}
              type="text"
              autoComplete="off"
              placeholder="Công ty"
              onChange={(event) => this.handleChangeInput(event)}
            />
          </div>
        </div>
        <div className="telephone-numbers">
          <Input
            name="telephone"
            value={telephone}
            type="text"
            iconSortDown="true"
            label="Di động"
            icon="true"
            placeholder=""
            onChange={(event) => this.handleChangeInput(event)}
          />
          <Input
            name="iphone"
            value={iphone}
            type="text"
            iconSortDown="true"
            icon="true"
            label="Iphone"
            placeholder=""
            onChange={(event) => this.handleChangeInput(event)}
          />
        </div>
        <div className="note">
          <span>Ghi chú</span>
          <textarea
            name="note"
            type="text"
            autoComplete="off"
            value={note}
            onChange={(event) => this.handleChangeInput(event)}
          ></textarea>
        </div>
        <div className="action">
          <StringButton
            content="Xóa liên hệ"
            icon="delete"
            color="red"
            onClick={() => this.handleDeleteItem(contact)}
          />

          anh
          <StringButton
            content="Xong"
            icon=""
            color="#2F80ED"
            onClick={() => this.handleSubmitEditContact(contact)}
          />
        </div>
      </EditItemWrapper>
    );
  }
}
export default EditItem;

EditItem.propTypes = {
  contact: PropTypes.object.isRequired,
  onChangeEdit: PropTypes.func.isRequired,
  onSubmitEdit: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired
};
