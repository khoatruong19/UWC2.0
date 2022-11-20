import { createSlice } from '@reduxjs/toolkit';

const saveAreas = (areas) =>
  localStorage.setItem('areas', JSON.stringify(areas));

const initialState = {
  areas: localStorage.getItem('areas')
    ? JSON.parse(localStorage.getItem('areas'))
    : [],
  openAreaModal: null,
  openMCPModal: null,
  companyVertex: {
    lati: 10.777823448181152,
    longti: 106.65606689453125,
    address: '268 ly thuong kiet',
  },
};

const AreasSlice = createSlice({
  name: 'areas',
  initialState,
  reducers: {
    createArea(state, action) {
      const newAreas = [...state.areas, { ...action.payload, MCPs: [] }];
      state.areas = [...newAreas];
      state.openAreaModal = null;
      saveAreas(newAreas);
    },
    deleteArea(state, action) {
      state.areas = state.areas.filter((area) => area.id !== action.payload.id);
      saveAreas(state.areas);
    },
    updateArea(state, action) {
      state.areas = state.areas.map((area) => {
        if (area.id === action.payload.id) return action.payload;
        return area;
      });
      state.openAreaModal = null;
      saveAreas(state.areas);
    },
    addMCP(state, action) {
      state.areas = state.areas.map((area) => {
        if (area.id === action.payload.areaId)
          return { ...area, MCPs: [...area.MCPs, action.payload.MCP] };
        return area;
      });
      saveAreas(state.areas);
    },
    updateMCP(state, action) {},
    deleteMCP(state, action) {},
    triggerAreaModal(state, action) {
      state.openAreaModal = action.payload;
    },
    triggerMCPModal(state, action) {
      state.openMCPModal = action.payload;
    },
  },
});

export const {
  addMCP,
  updateMCP,
  deleteMCP,
  createArea,
  deleteArea,
  updateArea,
  triggerAreaModal,
  triggerMCPModal,
} = AreasSlice.actions;

export default AreasSlice.reducer;
