import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Profile extends Component {
  renderSpinner() {
    if (this.props.loading) {
      return (
        <div>
          <img alt="spinner" src="loading-bars.svg" />
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return null;
    }
  }

  renderProfile() {
    const { profile } = this.props;
    if (profile.firstName) {
      return (
        <div>
          <img src={profile.picture} alt="pic" />
          <h3>{profile.firstName}</h3>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="Profile">
        <div className="profile-container">
          {this.renderProfile()}
          {this.renderSpinner()}
        </div>
        <div className="button-container">
          <button
            className="btn btn-warning btn-lg"
            onClick={this.props.fetchProfile}
          >
            Click this Button
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ loading, profile }) => {
  return {
    loading,
    profile
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchProfile: () => {dispatch(actions.fetchProfile())}
//   }
// }

export default connect(mapStateToProps, actions)(Profile);
