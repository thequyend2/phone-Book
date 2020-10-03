import React from "react";
import PropTypes from "prop-types";
import { StringButtonWrapper } from "./style";

class StringButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    const { onClick } = this.props;
    onClick();
  };

  render() {
    const { icon, content, color, disabled } = this.props;
    return (
      <StringButtonWrapper
        onClick={this.handleClick}
        color={color}
        className={`${disabled ? "disabled" : ""}`}
      >
        {icon === "edit" ? (
          <i className="fas fa-edit"></i>
        ) : icon === "delete" ? (
          <i class="fas fa-trash-alt"></i>
        ) : null}
        <span className="content">{content}</span>
      </StringButtonWrapper>
    );
  }
}

export default StringButton;

StringButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
