let companyVertex = {};

let MCPVertexs = localStorage.getItem('MCPs')
  ? JSON.parse(localStorage.getItem('MCPs'))
  : [
      {
        lati: 10.748285429708451,
        longti: 106.63473038607164,
        address: 'A',
      },
      {
        lati: 10.754058881386277,
        longti: 106.65132009782434,
        address: 'C',
      },
    ];

const routeObj = {
  vertex: [companyVertex, ...MCPVertexs],
  color: 'red',
};

export const getMCPs = () => MCPVertexs;
export const getRouteObj = () => routeObj;
export const addMCP = (address, pos) => {
  MCPVertexs = [...MCPVertexs, { address, ...pos }];
  saveMCPs();
};
export const saveMCPs = () =>
  localStorage.setItem('MCPs', JSON.stringify(MCPVertexs));

export const updateMcp = (i, pos) => {
  if (i <= 0) return;
  MCPVertexs[i - 1] = { ...MCPVertexs[i - 1], ...pos };
  saveMCPs();
};
