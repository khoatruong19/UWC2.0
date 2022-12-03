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

const initialMCPWorkshifts = [
  {
    workshift: '7h30 - 8:30',
    days: [[], [], [], [], [], [], []]
  },
  {
    workshift: '9h - 10:30',
    days: [[], [], [], [], [], [], []]
  },
]

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
          return { ...area, MCPs: [...area.MCPs, {...action.payload.MCP, schedule: initialMCPWorkshifts}]};
        return area;
      });
      state.openMCPModal = null
      saveAreas(state.areas);
    },
    updateMCPPos(state, action) {
      console.log("MCP, ", action.payload)
      state.areas = state.areas.map((area) => {
        if (area.id === action.payload.areaId)
          return {
            ...area,
            MCPs: area.MCPs.map((MCP) => {
              if (MCP.id === action.payload.id)
                return {
                  ...MCP,
                  lati: action.payload.lati,
                  longti: action.payload.longti,
                };
              return MCP;
            }),
          };
        return area;
      });
      saveAreas(state.areas);
    },
    deleteMCP(state, action) {
      let area = state.areas.find(item => item.id === action.payload.areaId)
      if(area){
        const restMCPs = area.MCPs.filter(MCP => MCP.id !== action.payload.id)
        area ={...area, MCPs: restMCPs}
      }
      state.areas = state.areas.map((item) => {
        if(item.id === area.id) return area
        return item
      });
      saveAreas(state.areas);
    },
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
  deleteMCP,
  createArea,
  deleteArea,
  updateArea,
  triggerAreaModal,
  triggerMCPModal,
  updateMCPPos,
} = AreasSlice.actions;

export default AreasSlice.reducer;
