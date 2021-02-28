import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faUser  } from '@fortawesome/free-solid-svg-icons';
<i class="fab fa-product-hunt"></i>
const User = (props) => {
    const employee  = props.employee;
    
    const total = employee.reduce((total, employee)=> total + employee.company.salary, 0);
    
    // let total= 0;
    // for (let index = 0; index < employee.length; index++) {
    //     let company = employee[index].company;
    //     total = total + company.salary;
        
    // }
  
  let tax = ( total /10);
  let yearlySalary = (total- tax) * 12;

    
    
    return (
        <div className="employeer-information">
            <h3>  Employee Salary Information </h3>
            
            <table className="salary-information">
                <thead>
                    <tr>
                        <td>
                         Employee Count
                        </td>
                        <td>
                        < FontAwesomeIcon icon={faUser}/> &nbsp; { employee.length }
                        </td>
                    </tr>    
                    <tr>
                        <td>
                            Salary Amount
                        </td>
                        <td>
                        < FontAwesomeIcon icon={faDollarSign}/> &nbsp; { total}
                        </td>
                    </tr>  
                    <tr>
                        <td>
                        Tax Amount
                        </td>
                        <td>
                        < FontAwesomeIcon icon={faDollarSign}/> &nbsp;   { tax }
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Yearly Salary Amount
                        </td>
                        <td>
                        < FontAwesomeIcon icon={faDollarSign}/> &nbsp;   { yearlySalary}
                        </td>
                    </tr>
                </thead>    
            </table> 
            <button className="Link-btn" > Home Page </button>
        </div>
    );
};

export default User;