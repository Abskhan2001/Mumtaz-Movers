import React from 'react';
import './EmployeesSection.css'
import t1 from '../../assets/t1.jpeg'
import t2 from '../../assets/t2.jpeg'
import t3 from '../../assets/t3.jpeg'
import t4 from '../../assets/t4.jpeg'
import t5 from '../../assets/t5.jpeg'
import t6 from '../../assets/t6.jpeg'
import t7 from '../../assets/t7.jpeg'

function EmployeesSection() {
  const employees = [
    {
      image: t1, 
      
    },
    {
        image: t7, 
      },
    {
        image: t5, 
      },
      {
        image: t6, 
      },
    
      {
        image: t4, 
      },
      {
        image: t3, 
      },
  ];

  return (
    <section className="employees-section">
      <h2>Our Team</h2>
      <div className="employees-list">
        {employees.map((employee, index) => (
          <div className="employee" key={index}>
            <img className='employees-img'  src={employee.image} alt={employee.name} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default EmployeesSection;