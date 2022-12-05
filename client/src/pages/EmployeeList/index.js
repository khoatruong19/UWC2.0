import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import React from 'react'
import { employees } from './employees'
import './style.css'

function EmployeeList() {
    const [employeeType, setEmployeeType] = React.useState('');

    const handleChange = (event) => {
        setEmployeeType(event.target.value);
    };
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
            <div className="mb-2 dropdown">

                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={employeeType}
                        onChange={handleChange}
                        autoWidth
                        label="Type"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Janitor</MenuItem>
                        <MenuItem value={21}>Collector</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <TableContainer style={{
                backgroundColor: "#A8E890",
                color: "#fff"
            }} component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead style={{ textColor: "#fff" }}>
                        <TableRow style={{
                            backgroundColor: "#749F82",
                        }}>
                            <TableCell style={{color: "#026333"}}>Employee ID</TableCell>
                            <TableCell style={{color: "#026333"}} align="center">Name</TableCell>
                            <TableCell style={{color: "#026333"}} align="center">Age</TableCell>
                            <TableCell style={{color: "#026333"}} align="center">Address</TableCell>
                            <TableCell style={{color: "#026333"}} align="center">Phone no</TableCell>
                            <TableCell style={{color: "#026333"}} align="center">Action</TableCell>
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
                                <TableCell align="center" style={{ display: "flex", height: "65.6px" }}>
                                    <div className="icons-flex-container" style={{ display: "flex", margin: "0 auto" }}>
                                        <div className="pencil-icon">
                                            <svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M3 18L15 6l3 3L6 21H3v-3ZM16 5l2-2l3 3l-2.001 2.001L16 5Z" /></svg>
                                        </div>
                                        <div className="trash-icon">
                                            <svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4 5h3V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1h3a1 1 0 0 1 0 2h-1v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7H4a1 1 0 1 1 0-2Zm3 2v13h10V7H7Zm2-2h6V4H9v1Zm0 4h2v9H9V9Zm4 0h2v9h-2V9Z" /></svg>
                                        </div>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default EmployeeList