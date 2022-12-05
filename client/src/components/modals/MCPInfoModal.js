// import React from 'react'
import * as React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import {Box, Modal, Button, Avatar, Table, TableHead, TableRow, TableCell, TableBody, TextField} from '@mui/material';
import Calendar from '../TAModal';
import EmployeeAssignment from '../TAModal/EmployeeAssignmentModal';
import JanitorTable from '../JanitorTable/JanitorTable';
import { janitorSchedule } from '../TAModal/EmployeeList';
import MCPicon from '../../images/recycling-place.png'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

const MCPInfoModal = ({open, setOpen}) => {
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const MCPInformation = [
        {
            className: "MCP-id",
            text: "MCP ID: 123456"
        },
        {
            className: "MCP-capacity",
            text: "MCP capacity: 3/5 (tons)"
        },
        {
            className: "MCP-percentage",
            text: "MCP full percentage: 60%"
        }
    ]
    
    const [rows, setRows] = React.useState(janitorSchedule);

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
      <div>
        {/* <Button onClick={handleOpen}>
            <img style = {{width: 40, height: 40}} src={MCPicon}/>
        </Button> */}
        <Modal
          open={open}
          onClose={handleClose}
        //   aria-labelledby="parent-modal-title"
        //   aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 1000, display: "flex", flexDirection: "column", backgroundColor: "#E5D9B6"  }}>
            <h2 style = {{textAlign: "center"}} id="parent-modal-title">MCP Info</h2>
            <Box style={{
                // width: "300px", 
                // height: "10rem", 
                padding: "1rem",
                backgroundColor: "#A8E890", 
                borderRadius: "6px",
                flexGrow: "1",
                display: "flex",
                flexDirection: "column",
            }}>
                <div style = {{display: "flex"}}className="MCP-header">
                    <Avatar style = {{width: 200, height: 200, alignSelf: "center"}} alt="MCP" src="https://th.bing.com/th/id/OIP.46d8j0sxVHhrjsI3LBKJVAHaHa?pid=ImgDet&rs=1" />
                    <div style = {{
                        lineHeight: "2rem",
                        fontSize: "1.2rem",
                        // fontWeight: "500",
                        // fontFamily: "Inter",
                        margin: "5px",
                        paddingLeft: "10px",
                        flexGrow: "1",
                        wordBreak: "break-all",
                        display : "flex",
                        flexDirection: "column",
                    }} className="MCP-information">
                        {MCPInformation.map((info) => (
                            <Box sx ={{height: "2.5rem", color: "#E6E5A3", backgroundColor: "#7D8F69", paddingLeft: "0.5rem", borderRadius: "6px", marginBottom: "1.68rem", display: "flex", wordWrap: "break-word"}}>
                                <div style = {{margin: "auto 0"}} className = {`${info.className}`} >{info.text}</div>  
                            </Box>
                        ))}
                        
                    </div>
                </div>
                {/* <Calendar data = {janitorSchedule} /> */}
                <Box style={{
                width: "900px",
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
                        <TableCell align="center">
                            <div onClick={open && <JanitorTable setIsOpen={setOpen} />}>
                                {row.monday}
                            </div>
                        </TableCell>
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
            </Box>
            
            <Button 
                onClick={handleClose}
                style = {{
                    backgroundColor: '#425F57',
                    marginTop: '5px',
                    color: '#A8E890',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                }}
            >
                    Finish
            </Button>
            <div
                style={{ position: 'absolute', right: '-0', top: '-0' }}
                className="hover"
                onClick={handleClose}
            >
                <XMarkIcon style={{ width: '2rem', height: '2rem' }} />
            </div>
          </Box>
        </Modal>
      </div>
    );
}

export default MCPInfoModal
