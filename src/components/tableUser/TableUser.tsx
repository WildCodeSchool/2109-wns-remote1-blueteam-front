import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { IUser } from '../../interfaces/users';

// Generate Order Data

const TableUsers = () => {
  const [users, setUsers] = useState([]);

  const GETALLUSERS = gql`
    query Query {
      getAllUsers {
        id
        firstname
        lastname
        email
        job
        role
      }
    }
  `;

  const { data, error, loading } =
    useQuery<{ getAllUsers: IUser[] }>(GETALLUSERS);

  if (error) {
    return <Typography>something went wrong : {error.message}</Typography>;
  }
  if (loading) {
    return <Typography> Please wait </Typography>;
  }
  return (
    <>
      <h2>Users</h2>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>FirstName</TableCell>
            <TableCell>LastName</TableCell>
            <TableCell>Job</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.getAllUsers.map((user: IUser) => (
            <TableRow key={user.id}>
              <TableCell>{user.firstname}</TableCell>
              <TableCell>{user.lastname}</TableCell>
              <TableCell>{user.job}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell align="right">{`$${user.role}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TableUsers;
