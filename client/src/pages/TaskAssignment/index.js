import React from 'react';
import AreaMap from '../../components/AreaMap';
import Calendar from '../../components/TAModal';
import { mainTextColor, mainGreen } from '../../utils/constants';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import MCPModal from '../../components/modals/MCPModal';
import { useSelector } from 'react-redux';
<<<<<<< HEAD
import styles from "./Modal.module.css";
import ChooseRouteModal from './ChooseRouteModal';
import { janitorSchedule } from '../../components/Calendar/EmployeeList';
=======
import styles from "../../components/TAModal/Modal.module.css";
import ChooseRouteModal from '../../components/TAModal/ChooseRouteModal';
import { janitorSchedule } from '../../components/TAModal/EmployeeList';
import JanitorTable from '../../components/JanitorTable/JanitorTable';
>>>>>>> 299e66f30e8ed91f83050f07635a1c4d8dc282bf

const TaskAssignment = () => {
    const [area, setArea] = useState([10.66, 106.67]);
    const areas = useSelector((state) => state.areas.areas);
    return (
        <div 
            className="conntainer p-5"
            style={{
                width: '100%',
                zIndex: "0",
                overflowY: 'scroll',
            }}
        >  
                <h2 className='mb-4'>Task assignment</h2>
                <div>
                    <div 
                        className={styles.mapContainer}
                        style={{
                            width: '100%',
                            marginTop: '1rem',
                            position: 'relative',
                            zIndex: 1
                        }}
                    >   
                        <AreaMap height={'350px'} routing areas={areas} area={area} />
                    </div>
                    <div className="mt-5" >
                        <Calendar style={{border: "1px solid black", borderRadius: "3px"}} data = {janitorSchedule} />
                    </div>
                </div>
        </div>
    )
};

export default TaskAssignment;

