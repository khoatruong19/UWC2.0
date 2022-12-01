import React from 'react';
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import AreaMap from '../../components/AreaMap';
import { useSelector } from 'react-redux';
import { FormControlLabel } from '@mui/material';
import Col from 'react-bootstrap/esm/Col';
import { Control } from 'leaflet';
import Select, { components, DropdownIndicatorProps } from 'react-select';
//import MCPModal from '../../components/modals/MCPModal';

const ChooseRouteModal = ({ setIsOpen }) => {

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
                        <div className={styles.mapContainer}>
                            <AreaMap className={styles.mapSize} routing areas={areas} area={area} />
                        </div>
                        <div className={styles.formText}>
                            <Form>
                                <Form.Group as={Row} className='mb-3' controlId='formHorizontalRoute'>
                                    <Col componentClass={Control.Label} className={styles.b4Form} sm={1}>
                                        Message
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Control type="text" placeholder='Ex: Road often jammed at 8 p.m.' />
                                    </Col>
                                    <Col sm={5}>
                                        <Form.Select className={styles.dropBoxLarge}
                                            onChange={(e) => { const pos = JSON.parse(e.target.value); setArea([pos.lat, pos.lng]); }}>
                                            {areas && areas.map((item, i) => {
                                                return (<option key={i} value={JSON.stringify(item.bounds[0][0])}> {item.name} </option>);
                                            })}
                                        </Form.Select>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </div>
                        <div>
                            <button className={styles.checkBtn} onClick={() => setIsOpen(false)}> Assign </button>
                        </div>
                    </div>
                    <div className={styles.modalActions}>
                        <div className={styles.actionsContainer}>
                            <button className={styles.cancelBtn} onClick={() => setIsOpen(false)}> Back </button>
                            <button className={styles.cancelBtn} onClick={() => setIsOpen(false)}> Clear </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ChooseRouteModal;