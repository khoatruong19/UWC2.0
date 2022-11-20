import React, { useState } from 'react';
import ModalLayout from './ModalLayout';
import { mainGreen, mainTextColor } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addMCP, triggerMCPModal } from '../../store/slices/AreasSlice';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useMap } from 'react-leaflet';

const MCPModal = () => {
  const dispatch = useDispatch();
  const { openMCPModal } = useSelector((state) => state.areas);

  const [address, setAddress] = useState('');
  const [maxCapacity, setMaxCapacity] = useState(0);

  const handleAddMCP = () => {
    dispatch(
      addMCP({
        areaId: openMCPModal.data.areaId,
        MCP: {
          ...openMCPModal.data.latlng,
          address,
          maxCapacity,
        },
      })
    );
  };
  const handleSubmit = (e) => {
    if (address.length === 0) return alert('Address cant be empty!');
    if (maxCapacity === 0) return alert('Max capacity must be larger than 0!');
    if (openMCPModal.type === 'ADD') {
      handleAddMCP();
    }
    setAddress('');
    setMaxCapacity(0);
  };

  return (
    <ModalLayout>
      <div
        className="rounded p-3 w-25"
        style={{ backgroundColor: mainGreen, position: 'relative' }}
      >
        <h1
          className="text-center mb-4"
          style={{ color: 'black', fontWeight: 700 }}
        >
          Add MCP
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="MCP address"
            className="input rounded placeholder-gray mb-2"
            style={{
              height: '2.5rem',
              border: '1px solid green',
              width: '100%',
              background: mainTextColor,
              paddingLeft: '0.6rem',
              color: 'whitesmoke',
            }}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max Capacity"
            className="input rounded placeholder-gray"
            style={{
              height: '2.5rem',
              border: '1px solid green',
              width: '100%',
              background: mainTextColor,
              paddingLeft: '0.6rem',
              color: 'whitesmoke',
            }}
            value={maxCapacity}
            onChange={(e) => setMaxCapacity(e.target.value)}
          />
          <button
            type="submit"
            className="btn hover"
            style={{
              backgroundColor: mainTextColor,
              color: mainGreen,
              width: '100%',
              marginTop: '1rem',
              fontSize: '2rem',
              fontWeight: 600,
            }}
          >
            Add
          </button>
        </form>
        <div
          style={{ position: 'absolute', right: '-0.3rem', top: '-1.7rem' }}
          className="hover"
          onClick={() => dispatch(triggerMCPModal(null))}
        >
          <XMarkIcon style={{ width: '2rem', height: '2rem' }} />
        </div>
      </div>
    </ModalLayout>
  );
};

export default MCPModal;
