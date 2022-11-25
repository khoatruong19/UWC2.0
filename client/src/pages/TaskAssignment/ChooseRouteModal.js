import React from 'react';
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

import { mainTextColor, mainGreen } from '../../utils/constants';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import AreaMap from '../../components/AreaMap';
import MCPModal from '../../components/modals/MCPModal';
import { useSelector } from 'react-redux';

const ChooseRouteModal = ({ setIsOpen }) => {

    const [area, setArea] = useState([10.66, 106.67]);
    const areas = useSelector((state) => state.areas.areas);

    //console.log({ areas });

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
                        <Form.Select className={styles.dropbox}
                            onChange={(e) => { const pos = JSON.parse(e.target.value); setArea([pos.lat, pos.lng]); }}>
                            {areas && areas.map((item, i) => {
                                return (<option key={i} value={JSON.stringify(item.bounds[0][0])}> {item.name} </option>);
                            })}
                        </Form.Select>
                        <div className={styles.mapContainer}>
                            <AreaMap className={styles.mapSize} routing areas={areas} area={area} />
                        </div>
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