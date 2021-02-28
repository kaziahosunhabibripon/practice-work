import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faUser  } from '@fortawesome/free-solid-svg-icons';
<i class="fab fa-product-hunt"></i>
const User = (props) => {
    const employee  = props.employee;
    console.log(employee);
    
    const total = employee.reduce((total, employee)=> total + employee.company.salary, 0);
    
    // let total= 0;
    // for (let index = 0; index < employee.length; index++) {
    //     let company = employee[index].company;
    //     total = total + company.salary;
        
    // }
  
  let tax = ( total /10);
  let yearlySalary = (total- tax) * 12;
//   const userImage = employee.company.image;
  
    
    
    return (
        <div className="employeer-information">
             {/* <img src={userImage} alt="not finding" /> */}
            <h3> < FontAwesomeIcon icon={faUser}/> Employee Name:{employee.name } </h3>
            <h2>{ employee.length }</h2>
            <p>< FontAwesomeIcon icon={faDollarSign}/>Total Salary :{ total} </p>
            <p>< FontAwesomeIcon icon={faDollarSign}/>Taxa Amount :{ tax} </p>
            <p>< FontAwesomeIcon icon={faDollarSign}/>Yearly Salary: {yearlySalary}</p>   
        </div>
    );
};

export default User;