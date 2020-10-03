import React from "react";
import PropTypes from "prop-types";
import { InfoItemWrapper } from "./style";

class ContactView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { contact } = this.props;
    const { name, surname, telephone, iphone, note } = contact;
    return (
      <InfoItemWrapper>
        <div className="avatar-name">
          <div className="avatar">
            <img src="" alt="avatar" />
            <i className="fas fa-camera"></i>
            <input type="file" />
          </div>
          <span className="name">
            {name} {surname}
          </span>
        </div>
        <div className="telephone-numbers">
          <div className="type-telephone">
            <span className="type">Di động</span>
            <span className="type">Công việc</span>
          </div>
          <div className="numbers">
            <span className="number">{telephone}</span>
            <span className="number">{iphone}</span>
            <span className="number"></span>
          </div>
        </div>
        <div className="note">
          <span className="title-note">Ghi chú</span>
          <span className="content-note">{note}</span>
        </div>
      </InfoItemWrapper>
    );
  }
}

ContactView.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactView;
