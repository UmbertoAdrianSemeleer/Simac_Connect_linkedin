// Simac Departments Data
const companyData = {
  nodes: [
    // Health Department
    { data: { id: 'health_director', label: 'Dr. Alice van Dijk (Health IT Director)', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'health_it1', label: 'Michael Janssen (Healthcare Solutions Architect)', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'health_it2', label: 'Jessica Bakker (Telemedicine Specialist)', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'health_it3', label: 'David Visser (Health Data Analyst)', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'health_nurse', label: 'Emily de Vries (Occupational Health Nurse)', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'health_inspector', label: 'Daniel Willems (Health and Safety Inspector)', image: 'https://via.placeholder.com/50' } },

    // Retail Department
    { data: { id: 'retail_director', label: 'John van den Berg (Retail IT Director)', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'retail_it1', label: 'Sophia Hendriks (Point of Sale Specialist)', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'retail_it2', label: 'Liam Verhoeven (E-commerce Solutions Architect)', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'retail_it3', label: 'Emma Meijer (Retail Data Analyst)', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'retail_manager', label: 'Lucas de Boer (Store Operations Manager)', image: 'https://via.placeholder.com/50' } },
    { data: { id: 'retail_security', label: 'Noah Jansen (Retail Security Specialist)', image: 'https://via.placeholder.com/50' } },
  ],
  edges: [
    // Health Department Reporting Structure
    { data: { source: 'health_director', target: 'health_it1' } },
    { data: { source: 'health_director', target: 'health_it2' } },
    { data: { source: 'health_director', target: 'health_it3' } },
    { data: { source: 'health_director', target: 'health_nurse' } },
    { data: { source: 'health_director', target: 'health_inspector' } },

    // Health Department Collaborations
    { data: { source: 'health_it1', target: 'health_it2' } },
    { data: { source: 'health_it2', target: 'health_it3' } },
    { data: { source: 'health_nurse', target: 'health_inspector' } },
    { data: { source: 'health_it3', target: 'health_nurse' } },

    // Retail Department Reporting Structure
    { data: { source: 'retail_director', target: 'retail_it1' } },
    { data: { source: 'retail_director', target: 'retail_it2' } },
    { data: { source: 'retail_director', target: 'retail_it3' } },
    { data: { source: 'retail_director', target: 'retail_manager' } },
    { data: { source: 'retail_director', target: 'retail_security' } },

    // Retail Department Collaborations
    { data: { source: 'retail_it1', target: 'retail_it2' } },
    { data: { source: 'retail_it2', target: 'retail_it3' } },
    { data: { source: 'retail_manager', target: 'retail_security' } },
    { data: { source: 'retail_it3', target: 'retail_manager' } },

    // Collaboration between Health and Retail Directors
    { data: { source: 'health_director', target: 'retail_director' } },
  ],
};

// Initialize Cytoscape.js
const cy = cytoscape({
  container: document.getElementById('company-graph'), // Reference to the container

  elements: companyData,

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
        'transition-duration': 0.3s',
      },
    },
  ],

  layout: {
    name: 'cose', // A force-directed layout for clear visualization
    animate: true,
  },
});

// Add Interactivity: Highlight connections when clicking on a node
cy.on('tap', 'node', function (evt) {
  const node = evt.target;

  // Reset highlights
  cy.elements().removeClass('highlighted');

  // Highlight the selected node and its connected edges/nodes
  node.addClass('highlighted');
  node.connectedEdges().addClass('highlighted');
  node.connectedEdges().targets().addClass('highlighted');
});
