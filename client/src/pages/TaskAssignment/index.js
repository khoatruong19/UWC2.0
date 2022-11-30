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
import CollectorTable from '../../components/CollectorTable/CollectorTable';


const TaskAssignment = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    return (
        <div>
            <p>
            <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}> Open Modal </button>
            {isOpen && <ChooseRouteModal setIsOpen={setIsOpen} />}
            </p>
            <p>
    {/* <button className={styles.primaryBtn} onClick={() => setIsOpen2(true)}> Open Modal 2 </button>
         {isOpen && < CollectorTable setIsOpen2={setIsOpen2} />}   */}
          <CollectorTable/>
         </p>
        </div>
    )
};

export default TaskAssignment;

