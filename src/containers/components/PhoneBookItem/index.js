import React from "react";
import PropTypes from "prop-types";
import { PhoneBookItemWrapper } from "./style";

class PhoneBookItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  handleClick = (contact) => {
    const { onClick } = this.props;
    onClick(contact);
    this.setState({
      ...this.state,
      isActive: true,
    });
  };

  render() {
    const { contact } = this.props;
    const { isActive } = this.state;
    const { name, surname } = contact;
    return (
      <PhoneBookItemWrapper
        className={isActive ? "isActive" : ""}
        onClick={() => this.handleClick(contact)}
      >
        <span className="name">{name} {surname}</span>
      </PhoneBookItemWrapper>
    );
  }
}

PhoneBookItem.propTypes = {
  contact: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PhoneBookItem;
