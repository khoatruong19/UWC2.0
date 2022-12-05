import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Box, Button, TextField } from '@mui/material';
import { JanitorAssignment } from '../modals/MCPInfoModal';
import EmployeeAssignment from './EmployeeAssignmentModal';
import { janitorSchedule } from './EmployeeList.js';

const Calendar = (props) => {
  const [rows, setRows] = React.useState(props.data);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRow = {
      workshift: event.target.newShift.value,
      monday: <EmployeeAssignment />,
      tuesday: <EmployeeAssignment />,
      wednesday: <EmployeeAssignment />,
      thursday: <EmployeeAssignment />,
      friday: <EmployeeAssignment />,
      saturday: <EmployeeAssignment />,
      sunday: <EmployeeAssignment />
    }

    setRows([...rows, newRow])

    event.target.newShift.value = "";
  }

  const validateSubmit = (event) => {
    if (!event.target.newShift.value) {
      return alert("Please enter workshift");
    }
    handleSubmit(event);
  }

  return (
    <Box style={{ ...props.style } || {
      width: "1000px",
      padding: "1rem",
      backgroundColor: "#A8E890",
      borderRadius: "6px",
    }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{color: "#749F82"}}>Workshift</TableCell>
            <TableCell style={{color: "#749F82"}} align="center">Monday</TableCell>
            <TableCell style={{color: "#749F82"}} align="center">Tuesday</TableCell>
            <TableCell style={{color: "#749F82"}} align="center">Wednesday</TableCell>
            <TableCell style={{color: "#749F82"}} align="center">Thursday</TableCell>
            <TableCell style={{color: "#749F82"}} align="center">Friday</TableCell>
            <TableCell style={{color: "#749F82"}} align="center">Saturday</TableCell>
            <TableCell style={{color: "#749F82"}} align="center">Sunday</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.workshift} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{row.workshift}</TableCell>
              <TableCell align="center">{row.monday}</TableCell>
              <TableCell align="center">{row.tuesday}</TableCell>
              <TableCell align="center">{row.wednesday}</TableCell>
              <TableCell align="center">{row.thursday}</TableCell>
              <TableCell align="center">{row.friday}</TableCell>
              <TableCell align="center">{row.saturday}</TableCell>
              <TableCell align="center">{row.sunday}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell style={{ width: "inherit" }}>
              <form style={{ display: "flex" }} onSubmit={validateSubmit}>
                <TextField type="text" placeholder="Enter new shift" name="newShift"></TextField>
                {document.onkeydown = event => { if (event.keyCode === 13) { handleSubmit(); } }}
              </form>
            </TableCell>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default Calendar;
