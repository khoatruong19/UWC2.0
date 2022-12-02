import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Box, Modal, Button } from '@mui/material';
import CollectorTable from '../CollectorTable/CollectorTable';
import "./hover.css"

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

const EmployeeAssignment = (props) => {
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
                cursor: 'pointer'
            }} 
            className="schedule-cells">
                {props.employee ? props.employee.name : "No employee"}
            </div>
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
            >
                <Box sx = {{...style, width: 400, display: "flex", flexDirection: "column"}}>
                    <h2 style = {{textAlign: "center"}}>Assign employee</h2>
                    <Box style = {{
                        // backgroundColor: "#A8E890", 
                        // borderRadius: "6px",
                        // flexGrow: "1",
                        // display: "flex"
                    }}>
                        {open && < CollectorTable setOpened={setOpen} />}
                    </Box>
                    {/* <Button 
                        style = {{
                            backgroundColor: '#425F57',
                            marginTop: '5px',
                            color: '#A8E890',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                        }}
                        onClick = {handleClose}
                    >
                        Finish
                    </Button> */}
                    {/* <div
                        style={{ position: 'absolute', right: '-0', top: '-0' }}
                        className="hover"
                        onClick={handleClose}
                    >
                        <XMarkIcon style={{ width: '2rem', height: '2rem' }} />
                    </div> */}
                </Box>
            </Modal>
        </>
    )
} 

export default EmployeeAssignment