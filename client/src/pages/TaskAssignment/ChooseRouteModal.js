import React from 'react';
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import AreaMap from '../../components/AreaMap';
import { useSelector } from 'react-redux';
<<<<<<< HEAD
//import MCPModal from '../../components/modals/MCPModal';

const ChooseRouteModal = ({setIsOpen}) => {
=======
import { FormControlLabel } from '@mui/material';
//import MCPModal from '../../components/modals/MCPModal';

const ChooseRouteModal = ({ setIsOpen }) => {
>>>>>>> 546e87314bb40dd4756b80e8f1842af29a3c5246

    const [area, setArea] = useState([10.66, 106.67]);
    const areas = useSelector((state) => state.areas.areas);

    return (
        <>
            <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <div className={styles.heading}> Choose Route </div>
                    </div>
                    <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                        <RiCloseLine style={{ marginBottom: "-3px" }} />
                    </button>
                    <div className={styles.modalContent}>
<<<<<<< HEAD
                        <Form.Select className={styles.dropbox}
                            onChange={(e) => { const pos = JSON.parse(e.target.value); setArea([pos.lat, pos.lng]); }}>
                            {areas && areas.map((item, i) => {
                                return (<option key={i} value={JSON.stringify(item.bounds[0][0])}> {item.name} </option>);
                            })}
                        </Form.Select>
                        <div className={styles.mapContainer}>
                            <AreaMap className={styles.mapSize} routing areas={areas} area={area} />
                        </div>
                        <span></span>
=======
                        <div className={styles.boxWrapper}>
                            <Form.Select className={styles.dropBox}
                                onChange={(e) => { const pos = JSON.parse(e.target.value); setArea([pos.lat, pos.lng]); }}>
                                {areas && areas.map((item, i) => {
                                    return (<option key={i} value={JSON.stringify(item.bounds[0][0])}> {item.name} </option>);
                                })}
                            </Form.Select>
                        </div>
                        <div className={styles.mapContainer}>
                            <AreaMap className={styles.mapSize} routing areas={areas} area={area} />
                        </div>
                        <div className={styles.boxWrapper}>
                            <Form.Group controlId='formInlineName'>
                                <FormControlLabel>Schema Name</FormControlLabel>
                                <Form.Control type='text' placeholder='Example: OpRoute' />
                            </Form.Group>
                        </div>
>>>>>>> 546e87314bb40dd4756b80e8f1842af29a3c5246
                    </div>
                    <div className={styles.modalActions}>
                        <div className={styles.actionsContainer}>
                            <button className={styles.deleteBtn} onClick={() => setIsOpen(false)}> Save </button>
                            <button className={styles.cancelBtn} onClick={() => setIsOpen(false)}> Assign </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ChooseRouteModal;