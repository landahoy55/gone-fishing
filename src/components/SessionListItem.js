import React from 'react';
import { Link } from 'react-router-dom';

const SessionListItem = (props) => (
    <div>
        <Link to={`/edit/${props.session.id}`}>
            <h3>{props.session.location}</h3>
        </Link>
        <h5>{props.session.createdAt}</h5>
        <p>{props.session.note}</p>
    </div>
);

export default SessionListItem;