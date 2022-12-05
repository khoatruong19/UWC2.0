import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Box, Modal, Button, Table, thead, tr, TableCell, tbody } from '@mui/material';
import CollectorTable from '../CollectorTable/CollectorTable';
import "./hover.css"
import { Collectors } from './Collectors';
import ChooseRouteModal from '../../pages/TaskAssignment/ChooseRouteModal';
import styles from "../../pages/TaskAssignment/Modal.module.css";
import "./CollectorTable.css"



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
    const [openChooseRoute, setOpenChooseRoute] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState("");
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const renderTable = (setOpened) => {
        return (
            <div>
                <div className={styles.darkBG} onClick={() => { setOpened(false) }} />
                <div className={styles.centered}>
                    <div className="background">
                        <div className="closeButton" onClick={() => { setOpened(false) }}>
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9369 13.9769C14.537 13.377 15.3508 13.04 16.1993 13.04C17.0478 13.04 17.8616 13.377 18.4617 13.9769L32.1993 27.7145L45.9369 13.9769C46.2321 13.6713 46.5852 13.4275 46.9756 13.2598C47.366 13.0921 47.7859 13.0038 48.2108 13.0001C48.6357 12.9964 49.0571 13.0774 49.4504 13.2383C49.8436 13.3992 50.2009 13.6368 50.5014 13.9373C50.8018 14.2377 51.0394 14.595 51.2003 14.9883C51.3612 15.3815 51.4422 15.8029 51.4385 16.2278C51.4348 16.6527 51.3465 17.0726 51.1788 17.463C51.0111 17.8534 50.7673 18.2065 50.4617 18.5017L36.7241 32.2393L50.4617 45.9769C51.0446 46.5804 51.3672 47.3888 51.3599 48.2278C51.3526 49.0668 51.016 49.8694 50.4227 50.4627C49.8294 51.056 49.0268 51.3926 48.1878 51.3999C47.3488 51.4072 46.5404 51.0846 45.9369 50.5017L32.1993 36.7641L18.4617 50.5017C17.8582 51.0846 17.0499 51.4072 16.2108 51.3999C15.3718 51.3926 14.5692 51.056 13.9759 50.4627C13.3826 49.8694 13.046 49.0668 13.0388 48.2278C13.0315 47.3888 13.354 46.5804 13.9369 45.9769L27.6745 32.2393L13.9369 18.5017C13.337 17.9016 13 17.0878 13 16.2393C13 15.3908 13.337 14.577 13.9369 13.9769Z" fill="#425F57" />
                            </svg>
                        </div>

                        <p className='header'>Assign Collector</p>
                        <input className='input' type="text" id="myInput" placeholder="Search by name..."
                        />
                        <div class="table-container">

                            <Table className='table'>
                                <thead>
                                    <tr>
                                        <TableCell>#</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell>Action</TableCell>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Collectors.map((collector, index) => (
                                        <tr
                                            key={collector.id}
                                            onClick={() => {
                                                handleClose();
                                                setSelected(collector.name);
                                            }
                                            }>
                                            <TableCell>{collector.id}</TableCell>
                                            <TableCell>{collector.name}</TableCell>
                                            <TableCell>{collector.status}</TableCell>
                                            <TableCell onClick={() => { setOpenChooseRoute(true) }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9838 2.54161C14.0711 2.71093 14.0928 2.92777 14.1361 3.36144C14.2182 4.1823 14.2593 4.59274 14.4311 4.81793C14.649 5.10358 15.0034 5.25038 15.3595 5.20248C15.6402 5.16472 15.9594 4.90352 16.5979 4.38113C16.9352 4.10515 17.1038 3.96716 17.2853 3.90918C17.5158 3.83555 17.7652 3.84798 17.9872 3.94419C18.162 4.01994 18.3161 4.17402 18.6243 4.4822L19.5178 5.37567C19.8259 5.68385 19.98 5.83794 20.0558 6.01275C20.152 6.23478 20.1644 6.48415 20.0908 6.71464C20.0328 6.89612 19.8948 7.06478 19.6188 7.4021C19.0964 8.0406 18.8352 8.35984 18.7975 8.64056C18.7496 8.99662 18.8964 9.35102 19.182 9.56893C19.4072 9.74072 19.8176 9.78176 20.6385 9.86385C21.0722 9.90722 21.2891 9.92891 21.4584 10.0162C21.6734 10.1272 21.841 10.3123 21.9299 10.5373C22 10.7145 22 10.9324 22 11.3682V12.6319C22 13.0676 22 13.2855 21.93 13.4626C21.841 13.6877 21.6734 13.8729 21.4583 13.9838C21.289 14.0711 21.0722 14.0928 20.6386 14.1361L20.6386 14.1361C19.818 14.2182 19.4077 14.2592 19.1825 14.4309C18.8967 14.6489 18.7499 15.0034 18.7979 15.3596C18.8357 15.6402 19.0968 15.9593 19.619 16.5976C19.8949 16.9348 20.0328 17.1034 20.0908 17.2848C20.1645 17.5154 20.152 17.7648 20.0558 17.9869C19.98 18.1617 19.826 18.3157 19.5179 18.6238L18.6243 19.5174C18.3162 19.8255 18.1621 19.9796 17.9873 20.0554C17.7652 20.1516 17.5159 20.164 17.2854 20.0904C17.1039 20.0324 16.9352 19.8944 16.5979 19.6184L16.5979 19.6184C15.9594 19.096 15.6402 18.8348 15.3595 18.7971C15.0034 18.7492 14.649 18.896 14.4311 19.1816C14.2593 19.4068 14.2183 19.8173 14.1362 20.6383C14.0928 21.0722 14.0711 21.2891 13.9837 21.4585C13.8728 21.6735 13.6877 21.8409 13.4628 21.9299C13.2856 22 13.0676 22 12.6316 22H11.3682C10.9324 22 10.7145 22 10.5373 21.9299C10.3123 21.841 10.1272 21.6734 10.0162 21.4584C9.92891 21.2891 9.90722 21.0722 9.86385 20.6385C9.78176 19.8176 9.74072 19.4072 9.56892 19.182C9.35101 18.8964 8.99663 18.7496 8.64057 18.7975C8.35985 18.8352 8.04059 19.0964 7.40208 19.6189L7.40206 19.6189C7.06473 19.8949 6.89607 20.0329 6.71458 20.0908C6.4841 20.1645 6.23474 20.152 6.01272 20.0558C5.8379 19.9801 5.6838 19.826 5.37561 19.5178L4.48217 18.6243C4.17398 18.3162 4.01988 18.1621 3.94414 17.9873C3.84794 17.7652 3.8355 17.5159 3.90913 17.2854C3.96711 17.1039 4.10511 16.9352 4.3811 16.5979C4.90351 15.9594 5.16471 15.6402 5.20247 15.3594C5.25037 15.0034 5.10357 14.649 4.81792 14.4311C4.59273 14.2593 4.1823 14.2182 3.36143 14.1361C2.92776 14.0928 2.71093 14.0711 2.54161 13.9838C2.32656 13.8728 2.15902 13.6877 2.07005 13.4627C2 13.2855 2 13.0676 2 12.6318V11.3683C2 10.9324 2 10.7144 2.07008 10.5372C2.15905 10.3123 2.32654 10.1272 2.54152 10.0163C2.71088 9.92891 2.92777 9.90722 3.36155 9.86384H3.36155H3.36156C4.18264 9.78173 4.59319 9.74068 4.81842 9.56881C5.10395 9.35092 5.2507 8.99664 5.20287 8.64066C5.16514 8.35987 4.90385 8.04052 4.38128 7.40182C4.10516 7.06435 3.96711 6.89561 3.90914 6.71405C3.83557 6.48364 3.848 6.23438 3.94413 6.01243C4.01988 5.83754 4.17403 5.68339 4.48233 5.37509L5.37565 4.48177L5.37566 4.48177C5.68385 4.17357 5.83795 4.01947 6.01277 3.94373C6.23478 3.84753 6.48414 3.8351 6.71463 3.90872C6.89612 3.9667 7.06481 4.10472 7.4022 4.38076C8.04061 4.9031 8.35982 5.16427 8.64044 5.20207C8.99661 5.25003 9.35113 5.10319 9.56907 4.81742C9.74077 4.59227 9.78181 4.18195 9.86387 3.36131C9.90722 2.92776 9.9289 2.71098 10.0162 2.5417C10.1271 2.32658 10.3123 2.15898 10.5374 2.07001C10.7145 2 10.9324 2 11.3681 2H12.6318C13.0676 2 13.2855 2 13.4627 2.07005C13.6877 2.15902 13.8728 2.32656 13.9838 2.54161ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#222222" />
                                                </svg>
                                            </TableCell>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                        <button className='button' onClick={() => { setOpened(false) }}>Done</button>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <>
            <div
                onClick={handleOpen}
                style={{
                    cursor: 'pointer'
                }}
                className="schedule-cells">
                {selected === "" ? "No employee" : selected}
            </div>
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
            >
                <Box sx={{ ...style, width: 400, display: "flex", flexDirection: "column" }}>
                    <h2 style={{ textAlign: "center" }}>Assign Collector</h2>
                    <Box style={{
                        // backgroundColor: "#A8E890", 
                        // borderRadius: "6px",
                        // flexGrow: "1",
                        // display: "flex"
                    }}>
                        {/* {open && < CollectorTable setOpened={setOpen} />} */}
                        {renderTable()}
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
                    <div
                        style={{ position: 'absolute', right: '-0', top: '-0' }}
                        className="hover"
                        onClick={handleClose}
                    >
                        <XMarkIcon style={{ width: '2rem', height: '2rem' }} />
                    </div>
                </Box>
            </Modal>
            {openChooseRoute && <ChooseRouteModal setIsOpen={setOpenChooseRoute} />}
        </>
    )
}

export default EmployeeAssignment