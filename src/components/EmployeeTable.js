import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import convertString from '../hooks/convertString';

const EmployeeTable = ({ searchTerm }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=500&nat=US")
      .then((res) => res.json())
      .then((res) => {
        setEmployees(res.results);
      });
  }, []);

  const searchEmployee = ({ name, location }) =>
  !searchTerm || convertString(location.state, searchTerm) || convertString(name.first, searchTerm);
   

  return (
      
    <Table striped bordered hover variant="dark" responsive>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Location</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {employees
          .filter(searchEmployee)
          .map(({ name, email, picture, location, phone}, i) => (
            <EmployeeRow name={name} email={email} picture={picture} location={location} phone={phone} i={i} />
          ))}
      </tbody>
    </Table>
  );
};

const EmployeeRow = ({ name, email, picture, location, phone, i }) => (
  <tr key={i}>
    <td class="profile"><Image src={picture.thumbnail} roundedCircle/></td>
    <td>{name.first} {name.last}</td>
    <td>{location.city}, {location.state}</td> 
    <td>{email}</td>
    <td>{phone}</td>
    
  </tr>
);

export default EmployeeTable;