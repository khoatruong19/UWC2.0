import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import React from 'react'
import { employees } from './employees'

function EmployeeList() {
  return (
    <div 
        className="conntainer p-5"
        style={{
            width: '100%',
            zIndex: "0",
            overflowY: 'scroll',
        }}
    >  
        <h2 className='mb-4'>Employee List</h2>
            
        <TableContainer style={{
            backgroundColor: "#749F82",
            color: "#fff"
        }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead style={{textColor: "#fff"}}>
            <TableRow style={{
                backgroundColor: "#A8E890",
            }}>
                <TableCell style={{textColor: "#fff"}}>Employee ID</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Age</TableCell>
                <TableCell align="center">Address</TableCell>
                <TableCell align="center">Phone no</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {employees.map((row) => (
                <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {row.id}
                    </TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.age}</TableCell>
                    <TableCell align="center">{row.address}</TableCell>
                    <TableCell align="center">{row.phonenumber}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  )
}

export default EmployeeList