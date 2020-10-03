import React from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import Pagination from "@material-ui/lab/Pagination";
import NormalButton from "../components/NormalButton";
import StringButton from "../components/StringButton";
import Input from "../components/Input";
import PhoneBookItem from "./components/PhoneBookItem";
import AddForm from "./components/AddForm";
import { getContactSelector, getListContactSelector } from "./selector";
import ContactView from "./components/ContactView";
import EditItem from "./components/ContactEdit";
import {
  PhoneBookWrapper,
  PhoneBookHeader,
  PhoneBookBody,
  AddContact,
  ContactList,
  ShowContact,
} from "./style";
import {
  onInputChange,
  submitAddContact,
  clearFormData,
  onSubmitEditContact,
  onDeleteContact,
} from "./action";

class PhoneBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      isShowModal: false,
      search: "",
      contactSelected: {},
      typeModal: "add",
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.listContact !== nextProps.listContact &&
      nextProps.listContact.length
    ) {
      this.setState({
        ...this.state,
        contactSelected: nextProps.listContact[0],
      });
    }
  }
  handleClickAddContact = () => {
    this.setState({
      ...this.state,
      isShowModal: !this.state.isShowModal,
    });
  };

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({
      ...this.state,
      text: value,
    });
  };

  onCancelModal = () => {
    const { handleClearFormData } = this.props;
    this.setState({
      ...this.state,
      isShowModal: !this.state.isShowModal,
    });
    handleClearFormData();
  };

  handleInputChange = (event) => {
    const { handleInputChange } = this.props;
    handleInputChange(event);
  };

  submitAddContact = () => {
    const { handleSubmitAddContact } = this.props;
    handleSubmitAddContact();
    this.setState({
      ...this.state,
      isShowModal: false,
    });
  };

  handleSearchItem = (e) => {
    this.setState({
      ...this.state,
      search: e.target.value,
    });
  };

  handleSelectContact = (contact) => {
    this.setState({
      ...this.state,
      contactSelected: contact,
    });
  };

  handleEditToggle = () => {
    this.setState({
      ...this.state,
      typeModal: "edit",
    });
  };

  handleCancelToggle = () => {
    this.setState({
      ...this.state,
      typeModal: "add",
    });
  };

  handleChangeEdit = (event) => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      contactSelected: {
        ...this.state.contactSelected,
        [name]: value,
      },
    });
  };

  onSubmitEditContact = (contact) => {
    const { handleSubmitEditContact } = this.props;
    handleSubmitEditContact(contact);
    this.setState({
      ...this.state,
      typeModal: "add",
    })
  }

  onDeleteContact = (contact) => {
    const { handleDeleteContact } = this.props;
    handleDeleteContact(contact);
    this.setState({
      ...this.state,
      typeModal: "add",
    })
  };

  render() {
    const { isShowModal, search, contactSelected, typeModal } = this.state;
    const { contact, listContact } = this.props;
    let newListContact = listContact;
    if (search) {
      newListContact = newListContact.filter((it, index) => {
        return it.name.toLowerCase().includes(search.toLowerCase());
      });
    }
    return (
      <PhoneBookWrapper>
        {isShowModal ? (
          <AddForm
            contact={contact}
            handleSubmitAddContact={this.submitAddContact}
            handleCancel={this.onCancelModal}
            onChangeInput={this.handleInputChange}
            type={typeModal}
          />
        ) : null}
        <PhoneBookHeader>
          <div className="logo-header">
            <i className="fas fa-user-friends"></i>
            <span className="title">Danh bạ</span>
          </div>
          <div className="search">
            <Input
              name="search"
              value={search}
              type="text"
              label=""
              icon=""
              placeholder="Tìm kiếm danh bạ"
              onChange={(e) => this.handleSearchItem(e)}
            />
          </div>
          <div className="edit">
            {typeModal === "add" ? (
              <StringButton
                color="#2F80ED"
                icon="edit"
                content="Chỉnh sửa"
                onClick={this.handleEditToggle}
              />
            ) : (
              <StringButton
                color="red"
                icon="edit"
                content="Thoát"
                onClick={this.handleCancelToggle}
              />
            )}
          </div>
        </PhoneBookHeader>
        <PhoneBookBody>
          <AddContact>
            <NormalButton
              name="Thêm liên hệ"
              onClick={this.handleClickAddContact}
            />
          </AddContact>
          <ContactList>
            {newListContact.length
              ? newListContact.map((it, index) => {
                  return (
                    <PhoneBookItem
                      contact={it}
                      key={it.id}
                      onClick={this.handleSelectContact}
                    />
                  );
                })
              : null}
            <div className="pagination">
              <Pagination count={1} color="primary" />
            </div>
          </ContactList>
          <ShowContact>
            {typeModal === "add" ? (
              <ContactView contact={contactSelected} />
            ) : (
              <EditItem
                contact={contactSelected}
                onChangeEdit={this.handleChangeEdit}
                onSubmitEdit={this.onSubmitEditContact}
                onDeleteContact={this.onDeleteContact}
              />
            )}
          </ShowContact>
        </PhoneBookBody>
      </PhoneBookWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listContact: getListContactSelector(state),
    contact: getContactSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange: (data) => dispatch(onInputChange(data)),
    handleSubmitAddContact: () => dispatch(submitAddContact()),
    handleClearFormData: () => dispatch(clearFormData()),
    handleSubmitEditContact: (data) => dispatch(onSubmitEditContact(data)),
    handleDeleteContact: (data) => dispatch(onDeleteContact(data)),
  };
};
// PhoneBook.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
