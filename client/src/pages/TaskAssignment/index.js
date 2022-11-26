import React from 'react';
import AreaMap from '../../components/AreaMap';
import Calendar from '../../components/Calendar';
import CollectorTable from '../../components/CollectorTable/CollectorTable';

const TaskAssignment = () => {
  return (
    <div>
      <Calendar />
      <CollectorTable/>
    </div>
  );
};

export default TaskAssignment;
