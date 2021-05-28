'use strict';

import React from 'react';
import { connect } from 'react-redux';
// import * as Action from './actions';

const mapStateToProps = ( state, ownProps ) => {
  return {
    current_user: state.user.current_user,
  }
}

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return {
    updateCurrentUserData: (payload) => dispatch( Action.updateCurrentUserData(payload) ),
  }
}


let UserComponent = (props) => {

  let changeUserDetails = (field, value) => {
    props.updateCurrentUserData({ field: field, value: value });
  }

  return(
    <div>
      <h1>Hello { props.current_user.name }</h1>
      <p>Your email address is { props.current_user.email }</p>
      <div style={{ marginTop: 30 }}>
        <button onClick={ () => { changeUserDetails('name', 'Jame Smith') } }>Change Name</button>
        <button onClick={ () => { changeUserDetails('email', 'jane@gmail.com') } }>Change Email Address</button>
      </div>
    </div>
  )

}

const ConnectedUserComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserComponent)

export default ConnectedUserComponent;