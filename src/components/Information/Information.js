import React from 'react';
import './Information.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBuilding,faEnvelope, faGlobe, faDollarSign, faMobile, faUser ,faPlusSquare } from '@fortawesome/free-solid-svg-icons';
const Information = (props) => {
    const { name, username, email, company, phone } = props.usr;
    
    return (
        <div className="user-information">
            <div className="user-info-left">
                <img src={company.image} alt="not finding" />
            </div>
            <div className="user-info-right">
                <h5>< FontAwesomeIcon icon={faBuilding} /> &nbsp;{ company.name }</h5>
                <h5>< FontAwesomeIcon icon={faGlobe} /> &nbsp;{ name }</h5>
                <h5>< FontAwesomeIcon icon={faUser} /> &nbsp;{ username }</h5>
                <p>< FontAwesomeIcon icon={faEnvelope} /> &nbsp;{ email }</p>
                <p>< FontAwesomeIcon icon={faDollarSign} /> &nbsp;{ company.salary }</p>
                <p> < FontAwesomeIcon icon={faMobile} /> &nbsp;{ phone }</p>
                <button onClick={ ()=> props.handleAddUser(props.usr)}>
                    add user < FontAwesomeIcon icon={faPlusSquare} />
                </button>
            </div>
        </div>
    );
};

export default Information;