import React from 'react';
import { connect } from 'react-redux'
import SessionForm from './SessionForm';
import { editSession, removeSession } from '../actions/sessions';

//accessing the match params props. This has been injected via a dynamic URL
const EditSession = (props) => {
    console.log('here is props');
    console.log(props);

    return (
        <div>
            Editing session with id of {props.match.params.id}
            <SessionForm 
            session={props.session}
            // lat={props.session.lat} 
            // long={props.session.long} 
            onSubmit={(session) => {
                //console.log('Update', session);
                //call and return home
                props.dispatch(editSession(props.session.id, session));
                props.history.push('/');
            }}
            />
            <button onClick={()=>{
                props.dispatch(removeSession({id: props.session.id}));
                props.history.push('/');
            }}>Delete</button>
        </div>  
    );
}

//finding the relevants sesssion
const mapStateToProps = (state, props) => {
    return {
        session: state.sessions.find((session) => {
            return session.id === props.match.params.id;
        })
    };
};

export default connect(mapStateToProps)(EditSession);