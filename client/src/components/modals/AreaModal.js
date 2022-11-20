import React, { useEffect, useState } from 'react';
import ModalLayout from './ModalLayout';
import { mainGreen, mainTextColor } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import {
  createArea,
  updateArea,
  triggerAreaModal,
} from '../../store/slices/AreasSlice';
import { XMarkIcon } from '@heroicons/react/24/solid';

const AreaModal = () => {
  const [areaName, setAreaName] = useState('');
  const { openAreaModal } = useSelector((state) => state.areas);

  const dispatch = useDispatch();
  const handleCreateArea = () => {
    dispatch(
      createArea({
        ...openAreaModal.data,
        name: areaName,
      })
    );
  };

  const handleUpdateArea = () => {
    dispatch(
      updateArea({
        ...openAreaModal.data,
        name: areaName,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (areaName.length === 0) alert('Area name cant be empty!');
    if (openAreaModal.type === 'ADD') {
      handleCreateArea();
    } else handleUpdateArea();
    setAreaName('');
  };

  useEffect(() => {
    if (openAreaModal.type === 'UPDATE') setAreaName(openAreaModal.data.name);
  }, [openAreaModal]);

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
          {openAreaModal.type === 'UPDATE' ? 'Update' : 'Create'} Area
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Area Name"
            className="input rounded placeholder-gray mb-2"
            value={areaName}
            onChange={(e) => setAreaName(e.target.value)}
            style={{
              height: '2.5rem',
              border: '1px solid green',
              width: '100%',
              background: mainTextColor,
              paddingLeft: '0.6rem',
              color: 'whitesmoke',
            }}
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
            {openAreaModal.type === 'UPDATE' ? 'Update' : 'Add'}
          </button>
        </form>
        <div
          style={{ position: 'absolute', right: '-0.3rem', top: '-1.7rem' }}
          className="hover"
          onClick={() => dispatch(triggerAreaModal(null))}
        >
          <XMarkIcon style={{ width: '2rem', height: '2rem' }} />
        </div>
      </div>
    </ModalLayout>
  );
};

export default AreaModal;
