// import React from 'react'
import * as React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Modal, Button, Avatar} from '@mui/material';
// import {Divider} from '@mui/material';
import "./hover.css";

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

  export function JanitorAssignment(janitor){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div
            onClick={handleOpen}
            style = {{
                // backgroundColor: '#425F57',
                // marginTop: '5px',
                // color: '#A8E890',
                // fontSize: '1.2rem',
                // fontWeight: 'bold',
                cursor: 'pointer'
            }} 
            className="schedule-cells">
                {janitor.name === "" ?  "No janitor" : janitor.name}
            </div>
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
            >
                <Box sx = {{...style, width: 400, display: "flex", flexDirection: "column"}}>
                    <h2 style = {{textAlign: "center"}}>Assign janitor</h2>
                    <Box style = {{
                        backgroundColor: "#A8E890", 
                        borderRadius: "6px",
                        flexGrow: "1",
                        display: "flex"
                    }}>
                        I love you 
                    </Box>
                    <Button 
                        style = {{
                            backgroundColor: '#425F57',
                            marginTop: '5px',
                            color: '#A8E890',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                        }}
                        onClick = {handleClose}>
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
        </>
    )
  }

//   function JanitorSchedule() {
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => {
//       setOpen(true);
//     };
//     const handleClose = () => {
//       setOpen(false);
//     };

//     function createData(workshift, monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
//         return { workshift, monday, tuesday, wednesday, thursday, friday, saturday, sunday};
//       }
      
//     const rows = [
//         createData('Frozen yoghurt', JanitorAssignment({name: "John"}), 6.0, 24, 4.0, 1, 1, 1),
//         createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//         createData('Eclair', 262, 16.0, 24, 6.0),
//     ];
  
//     return (
//       <React.Fragment>
//         <Button 
//             onClick={handleOpen}
//             style = {{
//                 backgroundColor: '#425F57',
//                 marginTop: '5px',
//                 color: '#A8E890',
//                 fontSize: '1.2rem',
//                 fontWeight: 'bold',
//             }}
//         >
//                 Add Janitor
//         </Button>
//         <Modal
//           hideBackdrop
//           open={open}
//           onClose={handleClose}
//         //   aria-labelledby="child-modal-title"
//         //   aria-describedby="child-modal-description"
//         >
//           <Box sx={{ ...style, width: 1000, display: "flex", flexDirection: "column", backgroundColor: "#E5D9B6" }}>
//             <h2 style = {{textAlign: "center"}} id="child-modal-title">Janitor schedule</h2>
//             <Box style = {{
//                 // padding: "1rem",
//                 backgroundColor: "#A8E890", 
//                 borderRadius: "6px",
//                 flexGrow: "1",
//                 display: "flex"
//             }}>
//                 <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Worshift</TableCell>
//                             {/* <Divider orientation="vertical" /> */}
//                             <TableCell align="center">Monday</TableCell>
//                             <TableCell align="center">Tuesday</TableCell>
//                             <TableCell align="center">Wednesday</TableCell>
//                             <TableCell align="center">Thursday</TableCell>
//                             <TableCell align="center">Friday</TableCell>
//                             <TableCell align="center">Saturday</TableCell>
//                             <TableCell align="center">Sunday</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                     {rows.map((row) => (
//                         <TableRow
//                             key={row.workshift}
//                             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                         >
//                             <TableCell component="th" scope="row">
//                                 {row.workshift}
//                             </TableCell>
//                             <TableCell align="center">{row.monday}</TableCell>
//                             <TableCell align="center">{row.tuesday}</TableCell>
//                             <TableCell align="center">{row.wednesday}</TableCell>
//                             <TableCell align="center">{row.thursday}</TableCell>
//                             <TableCell align="center">{row.friday}</TableCell>
//                             <TableCell align="center">{row.saturday}</TableCell>
//                             <TableCell align="center">{row.sunday}</TableCell>
//                         </TableRow>
//                     ))}
//                     <TableRow></TableRow>
//                     </TableBody>
//                 </Table>
//             </Box>
//             <Button style = {{backgroundColor: "#425F57", color: "#A8E890", fontSize: "1.2rem", fontWeight: "bold", marginTop: "5px"}} onClick={handleClose}>Finish</Button>
//             <div
//                 style={{ position: 'absolute', right: '-0', top: '-0' }}
//                 className="hover"
//                 onClick={handleClose}
//             >
//                 <XMarkIcon style={{ width: '2rem', height: '2rem' }} />
//             </div>
//           </Box>
//         </Modal>
//       </React.Fragment>
//     );
//   }

const MCPInfoModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    function createData(workshift, monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
        return { workshift, monday, tuesday, wednesday, thursday, friday, saturday, sunday};
      }
      
    const rows = [
        createData('Frozen yoghurt', JanitorAssignment({name: "John"}), 6.0, 24, 4.0, 1, 1, 1),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
    ];

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
        },
        {
            className: "MCP-workers",
            text: "Workers: Janitor1"
        }
    ]
  
    return (
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
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
                            <Box sx ={{height: "2.5rem", color: "#E6E5A3", backgroundColor: "#7D8F69", paddingLeft: "0.5rem", borderRadius: "6px", marginBottom: "0.5rem", display: "flex", wordWrap: "break-word"}}>
                                <div style = {{margin: "auto 0"}} className = {`${info.className}`} >{info.text}</div>  
                            </Box>
                        ))}
                        
                    </div>
                </div>
                <Box>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Worshift</TableCell>
                                {/* <Divider orientation="vertical" /> */}
                                <TableCell align="center">Monday</TableCell>
                                <TableCell align="center">Tuesday</TableCell>
                                <TableCell align="center">Wednesday</TableCell>
                                <TableCell align="center">Thursday</TableCell>
                                <TableCell align="center">Friday</TableCell>
                                <TableCell align="center">Saturday</TableCell>
                                <TableCell align="center">Sunday</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.workshift}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.workshift}
                                </TableCell>
                                <TableCell align="center">{row.monday}</TableCell>
                                <TableCell align="center">{row.tuesday}</TableCell>
                                <TableCell align="center">{row.wednesday}</TableCell>
                                <TableCell align="center">{row.thursday}</TableCell>
                                <TableCell align="center">{row.friday}</TableCell>
                                <TableCell align="center">{row.saturday}</TableCell>
                                <TableCell align="center">{row.sunday}</TableCell>
                            </TableRow>
                        ))}
                        <TableRow></TableRow>
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