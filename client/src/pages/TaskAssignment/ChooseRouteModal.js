import React, { useEffect } from 'react';
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
import { useMap } from 'react-leaflet';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
//import MCPModal from '../../components/modals/MCPModal';

const ChooseRouteModal = ({ setIsOpen }) => {
    const [area, setArea] = useState([10.66, 106.67]);
    const areas = useSelector((state) => state.areas.areas);
    const [selectedArea, setSelectedArea] = useState(areas[0])
    const [outMCPs, setOutMCPs] = useState([])

    const handleOutMCP = (MCP) => {
        let area = selectedArea
        let newOutMCPs = [...outMCPs, MCP]
        setOutMCPs(newOutMCPs)
        const restMCPs = selectedArea.MCPs.filter(item => item.id !== MCP.id)
        area = { ...area, MCPs: restMCPs }
        setSelectedArea(area)
    }

    const handlelUnOutMCP = () => {
        const lastOutMCP = outMCPs[outMCPs.length - 1]
        const newMCPs = [...selectedArea.MCPs, lastOutMCP]
        setSelectedArea(prev => ({ ...prev, MCPs: newMCPs }))
        let newOutMCPs = outMCPs
        newOutMCPs = newOutMCPs.filter(MCP => MCP.id !== lastOutMCP.id)
        setOutMCPs(newOutMCPs)
    }

    const handleClear = () => {
        const newMCPs = [...selectedArea.MCPs, ...outMCPs]
        setSelectedArea(prev => ({ ...prev, MCPs: newMCPs }))
        setOutMCPs([])
    }

    const handleGetRoute = (instructions) => {
        alert(JSON.stringify(instructions))

    }

    const handleAssignRoute = (instructions) => {
    }

    useEffect(() => {
        const rightArea = areas.find(area => area.id === selectedArea.id)
        if (rightArea) setSelectedArea(rightArea)
    }, [areas, selectedArea.id])


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
                        {outMCPs.length > 0 && <button onClick={handlelUnOutMCP}><ArrowUturnLeftIcon style={{ width: '1.5rem', height: '1.5rem' }} /></button>}
                        <div className={styles.mapContainer}>
                            <AreaMap zIndex={10} handleGetRoute={handleGetRoute} handleOutMCP={handleOutMCP} height={'300px'} routing areas={[selectedArea]} area={area} />
                        </div>
                        <div className={styles.formText}>
                            <Form>
                                <Form.Group as={Row} className='mb-3' controlId='formHorizontalRoute'>
                                    <Col componentClass={Control.Label} className={styles.b4Form} sm={1}>
                                        Message
                                    </Col>
                                    <Col sm={5}>
                                        <Form.Control type="text" placeholder='Ex: Road often jammed at 8 p.m.' />
                                    </Col>
                                    <Col sm={5}>
                                        <Form.Select className={styles.dropBoxLarge}
                                            onChange={(e) => {
                                                const item = JSON.parse(e.target.value);
                                                setArea([item.bounds[0][0].lat - 0.006, item.bounds[0][0].lng - 0.01]);
                                                setSelectedArea(item)
                                            }}>
                                            {areas && areas.map((item, i) => {
                                                return (<option key={i} value={JSON.stringify(item)}> {item.name} </option>);
                                            })}
                                        </Form.Select>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </div>
                        <div onClick={handleAssignRoute}>
                            <button className={styles.checkBtn} onClick={() => setIsOpen(false)} > Assign </button>
                        </div>
                    </div>
                    <div className={styles.modalActions}>
                        <div className={styles.actionsContainer}>
                            <button className={styles.cancelBtn} onClick={() => setIsOpen(false)}> Back </button>
                            <button className={styles.cancelBtn} onClick={handleClear}> Clear </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ChooseRouteModal;