import React, { useState } from 'react'
import styles from "../TAModal/Modal.module.css"
import { Box, Modal, Button, table, thead, tr, TableCell, tbody } from '@mui/material';
import { Collectors } from "../TAModal/Collectors";


const JanitorTable = ({ setOpened }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = useState("");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
      setOpen(false);
  };
  return (
    <div>
      <div onClick={handleOpen} style={{ cursor: 'pointer' }} className="schedule-cells">
                {selected === "" ? "No employee" : selected}
            </div>
      <div
        style={{
          display: (open) ? "block" : "none"
        }}
      >
      <div onClick={() => { setOpened(false) }} />
      <div className={styles.centered}>
        <div className="background">

          <div className="closeButton" onClick={() => { setOpen(false) }}>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9369 13.9769C14.537 13.377 15.3508 13.04 16.1993 13.04C17.0478 13.04 17.8616 13.377 18.4617 13.9769L32.1993 27.7145L45.9369 13.9769C46.2321 13.6713 46.5852 13.4275 46.9756 13.2598C47.366 13.0921 47.7859 13.0038 48.2108 13.0001C48.6357 12.9964 49.0571 13.0774 49.4504 13.2383C49.8436 13.3992 50.2009 13.6368 50.5014 13.9373C50.8018 14.2377 51.0394 14.595 51.2003 14.9883C51.3612 15.3815 51.4422 15.8029 51.4385 16.2278C51.4348 16.6527 51.3465 17.0726 51.1788 17.463C51.0111 17.8534 50.7673 18.2065 50.4617 18.5017L36.7241 32.2393L50.4617 45.9769C51.0446 46.5804 51.3672 47.3888 51.3599 48.2278C51.3526 49.0668 51.016 49.8694 50.4227 50.4627C49.8294 51.056 49.0268 51.3926 48.1878 51.3999C47.3488 51.4072 46.5404 51.0846 45.9369 50.5017L32.1993 36.7641L18.4617 50.5017C17.8582 51.0846 17.0499 51.4072 16.2108 51.3999C15.3718 51.3926 14.5692 51.056 13.9759 50.4627C13.3826 49.8694 13.046 49.0668 13.0388 48.2278C13.0315 47.3888 13.354 46.5804 13.9369 45.9769L27.6745 32.2393L13.9369 18.5017C13.337 17.9016 13 17.0878 13 16.2393C13 15.3908 13.337 14.577 13.9369 13.9769Z" fill="#425F57" />
            </svg>
          </div>

          <p className='header'>Assign Janitor</p>
          <input className='input' type="text" id="myInput" placeholder="Search by name..."
          />
          <div class="table-container">
            <table className='table'>
              <thead>
                <tr
                  style={{
                    backgroundColor: "A8E890"
                  }}
                >
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
                      setOpen(false);
                      setSelected(collector.name);
                    }
                    }>
                    <TableCell>{collector.id}</TableCell>
                    <TableCell>{collector.name}</TableCell>
                    <TableCell
                      style={{
                        color: (collector.status === "Assigned") ? "red" : "blue"
                      }}
                    >{collector.status}</TableCell>
                    <TableCell onClick={() => { }}>
                      <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48h-48z" fill="none" /><path d="M22 34h4v-12h-4v12zm2-30c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm0 36c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z" /></svg>
                    </TableCell>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
          <button className='button' onClick={() => { setOpen(false) }}>Done</button>
        </div>
        </div>
      </div>
    </div>

  )
}
export default JanitorTable