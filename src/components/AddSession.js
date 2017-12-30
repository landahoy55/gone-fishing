import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './SessionForm';
import { addSession } from '../actions/sessions';
//import SimpleMap from './Map';

//onsubmit prop added to session form, so form can be reused
const AddSession = (props) => (
    <div>
      <h1>Add Session - Torquay</h1>
      <SessionForm 
        lat={50.4619} 
        long={-3.5253} 
        onSubmit={(session) => {
        //console.log(props);
        props.dispatch(addSession(session))
        //redirect
        props.history.push('/');
      }}
      />
      
    </div>
);

export default connect()(AddSession);