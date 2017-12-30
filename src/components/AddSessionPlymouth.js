import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './SessionForm';
import { addSessionPlymouth } from '../actions/sessions';

//onsubmit prop added to session form, so form can be reused
const AddSessionPlymouth = (props) => (
    <div>
      <h1>Add Session - Plymouth</h1>
      <SessionForm
        lat={50.3755} 
        long={-4.143841} 
        onSubmit={(session) => {
        //console.log(session);
        props.dispatch(addSessionPlymouth(session))
        //redirect
        props.history.push('/');
      }}
      />
    </div>
);

export default connect()(AddSessionPlymouth);