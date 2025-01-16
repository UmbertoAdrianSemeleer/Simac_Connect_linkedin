// Define the network data
const networkData = {
  nodes: [
    { data: { id: 'manager', label: 'Manager', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'emp1', label: 'Employee 1', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'emp2', label: 'Employee 2', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'emp3', label: 'Employee 3', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'emp4', label: 'Employee 4', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'emp5', label: 'Employee 5', image: 'https://via.placeholder.com/50' } },
  ],
  edges: [
    // Reporting structure (Manager to employees)
    { data: { source: 'manager', target: 'emp1' } },
    { data: { source: 'manager', target: 'emp2' } },
    { data: { source: 'manager', target: 'emp3' } },
    { data: { source: 'manager', target: 'emp4' } },
    { data: { source: 'manager', target: 'emp5' } },

    // Employee-to-employee connections
    { data: { source: 'emp1', target: 'emp2' } },
    { data: { source: 'emp2', target: 'emp3' } },
    { data: { source: 'emp4', target: 'emp5' } },
  ],
};

// Initialize Cytoscape.js
const cy = cytoscape({
  container: document.getElementById('network-diagram'),

  elements: networkData,

  style: [
    {
      selector: 'node',
      style: {
        'background-image': 'data(image)',
        'background-fit': 'cover',
        'width': '60px',
        'height': '60px',
        label: 'data(label)',
        'text-valign': 'bottom',
        'text-halign': 'center',
        'font-size': '10px',
        'text-background-color': '#ffffff',
        'text-background-opacity': 0.7,
        'text-background-padding': '5px',
        'border-color': '#666',
        'border-width': 2,
      },
    },
    {
      selector: 'edge',
      style: {
        width: 2,
        'line-color': '#999',
        'target-arrow-color': '#999',
        'target-arrow-shape': 'triangle',
        'curve-style': 'bezier',
      },
    },
    {
      selector: '.highlighted',
      style: {
        'background-color': '#ff6666',
        'line-color': '#ff6666',
        'target-arrow-color': '#ff6666',
        'transition-property': 'background-color, line-color',
        'transition-duration': '0.3s',
      },
    },
  ],

  layout: {
    name: 'cose', // A force-directed layout for better spacing
    animate: true,
    fit: true,
    padding: 20,
  },
});

// Add interactivity: Highlight connections when clicking a node
cy.on('tap', 'node', function (evt) {
  const node = evt.target;

  // Clear previous highlights
  cy.elements().removeClass('highlighted');

  // Highlight the selected node and its connected edges/nodes
  node.addClass('highlighted');
  node.connectedEdges().addClass('highlighted');
  node.connectedEdges().targets().addClass('highlighted');
});
