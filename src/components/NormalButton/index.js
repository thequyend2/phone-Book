import React from "react";
import PropTypes from "prop-types";
import { NormalButtonWrapper } from "./style";

class NormalButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    const { onClick } = this.props;
    onClick();
  }

  render() {
    const { name } = this.props;
    return (
      <NormalButtonWrapper onClick={this.handleClick}>
       <span className="icon">+</span>
       <span>{name}</span>
    </NormalButtonWrapper>
    )
  }
}


NormalButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
export default NormalButton;
