import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './SessionForm';
import { addSessionExmouth } from '../actions/sessions';

//onsubmit prop added to session form, so form can be reused
const AddSessionExmouth = (props) => (
    <div>
      <h1>Add Session - Exmouth</h1>
      <SessionForm
        lat={50.6200} 
        long={-3.40233} 
        onSubmit={(session) => {
        //console.log(session);
        props.dispatch(addSessionExmouth(session))
        //redirect
        props.history.push('/');
      }}
      />
    </div>
);

export default connect()(AddSessionExmouth);