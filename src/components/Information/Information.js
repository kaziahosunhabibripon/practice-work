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
                <h4>< FontAwesomeIcon icon={faBuilding} />{ company.name }</h4>
                <h4>< FontAwesomeIcon icon={faGlobe} />{ name }</h4>
                <h4>< FontAwesomeIcon icon={faUser} />{ username }</h4>
                <p><small>< FontAwesomeIcon icon={faEnvelope} />{ email }</small></p>
                <p>< FontAwesomeIcon icon={faDollarSign} />{ company.salary }</p>
                <p> < FontAwesomeIcon icon={faMobile} />{ phone }</p>
                <button onClick={ ()=> props.handleAddUser(props.usr)}>
                    add user < FontAwesomeIcon icon={faPlusSquare} />
                </button>
            </div>
        </div>
    );
};

export default Information;