import React, { useState } from 'react';
import Information from '../Information/Information';
import userData from '../../data/data.json';
import './Body.css';
import User from '../User/User';


const Body = () => {
    const [user, setUser] = useState(userData);
    // console.log(user);
    const [employee, setEmployee ] = useState([]);

    const handleAddUser = (usr) => {
        // console.log("user added", usr);
        const newEmployee = [...employee, usr];
        setEmployee(newEmployee);
      }  

    return (
        <div className="body-container">
            <div className="user">
                {
                    user.map(usr => <Information handleAddUser={handleAddUser} 
                       key={usr.id} usr={usr}></Information>
                    )
                }
            </div>
            <div className="user-container">
                <User employee = {employee}>  </User>
            </div>
           
        </div>
    );
};

export default Body;