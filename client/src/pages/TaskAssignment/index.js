import React from 'react';
import AreaMap from '../../components/AreaMap';
import Calendar from '../../components/Calendar';
import { mainTextColor, mainGreen } from '../../utils/constants';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import MCPModal from '../../components/modals/MCPModal';
import { useSelector } from 'react-redux';
import styles from "./Modal.module.css";
import ChooseRouteModal from './ChooseRouteModal';
import CollectorTable from '../../components/CollectorTable/CollectorTable'
import { janitorSchedule } from '../../components/Calendar/EmployeeList';

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
                    style={{
                        width: '100%',
                        marginTop: '1rem',
                        position: 'relative',
                        zIndex: '9999'
                    }}
                    >
                        <AreaMap height={'450px'} areas={areas} area={area} />
                    </div>
                    <div className="mt-5">
                        <Calendar data = {janitorSchedule} />
                    </div>
                </div>
        </div>
    )
};

export default TaskAssignment;

