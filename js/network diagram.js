// Simac IT NL Hierarchy Data
const simacITData = {
  nodes: [
    { data: { id: 'ceo', label: 'CEO: Maartje van Schagen', image: 'https://via.placeholder.com/50' } },

    // Managers
    { data: { id: 'mgr_connectivity', label: 'Manager: John Smith (Connectivity)', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'mgr_security', label: 'Manager: Jane Doe (Security)', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'mgr_multicloud', label: 'Manager: Robert Johnson (Multicloud)', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'mgr_sap', label: 'Manager: Emily Davis (SAP)', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'mgr_support', label: 'Manager: Michael Brown (Support)', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'mgr_workplace', label: 'Manager: Sarah Wilson (Workplace)', image: 'https://via.placeholder.com/50' } },

    // Employees
    { data: { id: 'emp_connectivity1', label: 'Employee: Alex Carter (Connectivity)', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'emp_connectivity2', label: 'Employee: Lisa Martin (Connectivity)', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'emp_security1', label: 'Employee: Daniel Lee (Security)', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'emp_security2', label: 'Employee: Sophia Wright (Security)', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'emp_multicloud1', label: 'Employee: Kevin Anderson (Multicloud)', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'emp_multicloud2', label: 'Employee: Chloe Hernandez (Multicloud)', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'emp_sap1', label: 'Employee: Nathan White (SAP)', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'emp_sap2', label: 'Employee: Olivia Thomas (SAP)', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'emp_support1', label: 'Employee: Jacob Harris (Support)', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'emp_support2', label: 'Employee: Mia Moore (Support)', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'emp_workplace1', label: 'Employee: Ethan Walker (Workplace)', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'emp_workplace2', label: 'Employee: Ava Scott (Workplace)', image: 'https://via.placeholder.com/50' } },

    // Clients
    { data: { id: 'hema', label: 'Client: HEMA', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'jumbo', label: 'Client: Jumbo', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'basicfit', label: 'Client: Basic-Fit', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'psv', label: 'Client: PSV', image: 'https://via.placeholder.com/50' } },
  ],
  edges: [
    { data: { source: 'ceo', target: 'mgr_connectivity' } },
    { data: { source: 'ceo', target: 'mgr_security' } },
    { data: { source: 'ceo', target: 'mgr_multicloud' } },
    { data: { source: 'ceo', target: 'mgr_sap' } },
    { data: { source: 'ceo', target: 'mgr_support' } },
    { data: { source: 'ceo', target: 'mgr_workplace' } },

    { data: { source: 'mgr_connectivity', target: 'emp_connectivity1' } },
    { data: { source: 'mgr_connectivity', target: 'emp_connectivity2' } },
    { data: { source: 'mgr_security', target: 'emp_security1' } },
    { data: { source: 'mgr_security', target: 'emp_security2' } },
    { data: { source: 'mgr_multicloud', target: 'emp_multicloud1' } },
    { data: { source: 'mgr_multicloud', target: 'emp_multicloud2' } },
    { data: { source: 'mgr_sap', target: 'emp_sap1' } },
    { data: { source: 'mgr_sap', target: 'emp_sap2' } },
    { data: { source: 'mgr_support', target: 'emp_support1' } },
    { data: { source: 'mgr_support', target: 'emp_support2' } },
    { data: { source: 'mgr_workplace', target: 'emp_workplace1' } },
    { data: { source: 'mgr_workplace', target: 'emp_workplace2' } },

    { data: { source: 'mgr_connectivity', target: 'psv' } },
    { data: { source: 'mgr_security', target: 'hema' } },
    { data: { source: 'mgr_multicloud', target: 'jumbo' } },
    { data: { source: 'mgr_sap', target: 'basicfit' } },
    { data: { source: 'mgr_support', target: 'psv' } },
  ],
};

// Initialize Cytoscape.js
const cy = cytoscape({
  container: document.getElementById('simac-it-graph'),

  elements: simacITData,

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
        'font-size': '10px',
        'text-background-color': '#fff',
        'text-background-opacity': 0.7,
        'text-background-padding': '3px',
      },
    },
    {
      selector: 'edge',
      style: {
        width: 2,
        'line-color': '#ccc',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle',
      },
    },
    {
      selector: '.highlighted',
      style: {
        'background-color': '#ff6666',
        'line-color': '#ff6666',
        'transition-property': 'background-color, line-color',
        'transition-duration': '0.3s',
      },
    },
  ],

  layout: {
    name: 'cose',
    animate: true,
  },
});

// Add Interactivity
cy.on('tap', 'node', function (evt) {
  const node = evt.target;

  // Reset highlights
  cy.elements().removeClass('highlighted');

  // Highlight the selected node and its connected edges/nodes
  node.addClass('highlighted');
  node.connectedEdges().addClass('highlighted');
  node.connectedEdges().targets().addClass('highlighted');
});



// Filtering by Department/Service
document.getElementById('department-filter').addEventListener('change', (event) => {
  const filter = event.target.value;

  // Reset all elements to visible
  cy.elements().style('display', 'element');

  // Apply filter based on selected department/service
  if (filter === 'connectivity') {
    cy.elements('node[id ^= "mgr_connectivity"], node[id ^= "emp_connectivity"], node[id ^= "client"]').style('display', 'element');
    cy.elements('node[id ^= "mgr_"]:not([id ^= "mgr_connectivity"]), node[id ^= "emp_"]:not([id ^= "emp_connectivity"])').style('display', 'none');
    cy.elements('edge[source ^= "mgr_connectivity"], edge[target ^= "mgr_connectivity"]').style('display', 'element');
    cy.elements('edge:not([source ^= "mgr_connectivity"]):not([target ^= "mgr_connectivity"])').style('display', 'none');
  } else if (filter === 'security') {
    cy.elements('node[id ^= "mgr_security"], node[id ^= "emp_security"], node[id ^= "client"]').style('display', 'element');
    cy.elements('node[id ^= "mgr_"]:not([id ^= "mgr_security"]), node[id ^= "emp_"]:not([id ^= "emp_security"])').style('display', 'none');
    cy.elements('edge[source ^= "mgr_security"], edge[target ^= "mgr_security"]').style('display', 'element');
    cy.elements('edge:not([source ^= "mgr_security"]):not([target ^= "mgr_security"])').style('display', 'none');
  } else if (filter === 'multicloud') {
    cy.elements('node[id ^= "mgr_multicloud"], node[id ^= "emp_multicloud"], node[id ^= "client"]').style('display', 'element');
    cy.elements('node[id ^= "mgr_"]:not([id ^= "mgr_multicloud"]), node[id ^= "emp_"]:not([id ^= "emp_multicloud"])').style('display', 'none');
    cy.elements('edge[source ^= "mgr_multicloud"], edge[target ^= "mgr_multicloud"]').style('display', 'element');
    cy.elements('edge:not([source ^= "mgr_multicloud"]):not([target ^= "mgr_multicloud"])').style('display', 'none');
  } else if (filter === 'sap') {
    cy.elements('node[id ^= "mgr_sap"], node[id ^= "emp_sap"], node[id ^= "client"]').style('display', 'element');
    cy.elements('node[id ^= "mgr_"]:not([id ^= "mgr_sap"]), node[id ^= "emp_"]:not([id ^= "emp_sap"])').style('display', 'none');
    cy.elements('edge[source ^= "mgr_sap"], edge[target ^= "mgr_sap"]').style('display', 'element');
    cy.elements('edge:not([source ^= "mgr_sap"]):not([target ^= "mgr_sap"])').style('display', 'none');
  } else if (filter === 'support') {
    cy.elements('node[id ^= "mgr_support"], node[id ^= "emp_support"], node[id ^= "client"]').style('display', 'element');
    cy.elements('node[id ^= "mgr_"]:not([id ^= "mgr_support"]), node[id ^= "emp_"]:not([id ^= "emp_support"])').style('display', 'none');
    cy.elements('edge[source ^= "mgr_support"], edge[target ^= "mgr_support"]').style('display', 'element');
    cy.elements('edge:not([source ^= "mgr_support"]):not([target ^= "mgr_support"])').style('display', 'none');
  } else if (filter === 'workplace') {
    cy.elements('node[id ^= "mgr_workplace"], node[id ^= "emp_workplace"], node[id ^= "client"]').style('display', 'element');
    cy.elements('node[id ^= "mgr_"]:not([id ^= "mgr_workplace"]), node[id ^= "emp_"]:not([id ^= "emp_workplace"])').style('display', 'none');
    cy.elements('edge[source ^= "mgr_workplace"], edge[target ^= "mgr_workplace"]').style('display', 'element');
    cy.elements('edge:not([source ^= "mgr_workplace"]):not([target ^= "mgr_workplace"])').style('display', 'none');
  }
});

// Filtering by Relationships
document.getElementById('relationship-filter').addEventListener('change', (event) => {
  const filter = event.target.value;

  // Reset all elements to visible
  cy.elements().style('display', 'element');

  // Apply filter based on selected relationship
  if (filter === 'manager-employee') {
    // Show only Manager-to-Employee edges and connected nodes
    cy.elements('edge[source ^= "mgr_"][target ^= "emp_"]').style('display', 'element');
    cy.elements('node').style('display', 'none');
    cy.elements('edge[source ^= "mgr_"][target ^= "emp_"]').connectedNodes().style('display', 'element');
  } else if (filter === 'manager-client') {
    // Show only Manager-to-Client edges and connected nodes
    cy.elements('edge[source ^= "mgr_"][target ^= "client"]').style('display', 'element');
    cy.elements('node').style('display', 'none');
    cy.elements('edge[source ^= "mgr_"][target ^= "client"]').connectedNodes().style('display', 'element');
  } else if (filter === 'employee-collaboration') {
    // Show only Employee-to-Employee edges and connected nodes (if any)
    cy.elements('edge[source ^= "emp_"][target ^= "emp_"]').style('display', 'element');
    cy.elements('node').style('display', 'none');
    cy.elements('edge[source ^= "emp_"][target ^= "emp_"]').connectedNodes().style('display', 'element');
  }
});


