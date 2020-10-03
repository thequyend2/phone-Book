import React from "react";
import PropTypes from "prop-types";
import { InputWrapper } from "./style";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleOnChangeInput = (event) => {
    const { onChange } = this.props;
    onChange(event);
  };
  render() {
    const { label, icon, value, placeholder, name, iconSortDown } = this.props;
    return (
      <InputWrapper>
        {iconSortDown ? <i className="fas fa-sort-down"></i> : null}
        {label ? <span className="label">{label}</span> : null}
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          autoComplete="off"
          name={name}
          onChange={(event) => this.handleOnChangeInput(event)}
        />
        {icon ? (
          <i class="fas fa-trash-alt" style={{ color: "red" }}></i>
        ) : null}
      </InputWrapper>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  iconSortDown: PropTypes.bool,
};
export default Input;
