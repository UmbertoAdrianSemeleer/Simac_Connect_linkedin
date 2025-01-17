document.addEventListener("DOMContentLoaded", function () {
  // Load Header and Footer
  fetch("../components/header.html")
    .then(response => response.text())
    .then(data => document.getElementById("header-placeholder").innerHTML = data);

  fetch("../components/footer.html")
    .then(response => response.text())
    .then(data => document.getElementById("footer-placeholder").innerHTML = data);

  // Sample Employee Connections Data for Cytoscape.js
  const networkData = {
    nodes: [
      { data: { id: 'john', label: 'John Smith', role: 'Developer', department: 'Software Development' } },
      { data: { id: 'jane', label: 'Jane Doe', role: 'Manager', department: 'IT & Technology Solutions' } },
      { data: { id: 'emily', label: 'Emily White', role: 'Designer', department: 'Marketing & Communications' } },
      { data: { id: 'alex', label: 'Alex Johnson', role: 'Automation Engineer', department: 'Industrial Automation' } },
    ],
    edges: [
      { data: { source: 'jane', target: 'john' } },
      { data: { source: 'jane', target: 'emily' } },
      { data: { source: 'jane', target: 'alex' } },
    ],
  };

  // Initialize Cytoscape.js
  cytoscape({
    container: document.getElementById('employeeNetwork'), // Reference to the container div

    elements: networkData,

    style: [
      {
        selector: 'node',
        style: {
          'background-color': '#CC142F',
          'label': 'data(label)',
          'width': '60px',
          'height': '60px',
          'text-valign': 'center',
          'text-halign': 'center',
          'font-size': '12px',
          'color': '#FFF',
          'text-background-color': '#005876',
          'text-background-opacity': 0.8,
          'text-background-padding': '4px',
          'text-border-width': 1,
          'text-border-color': '#CC142F',
        },
      },
      {
        selector: 'edge',
        style: {
          'width': 2,
          'line-color': '#ccc',
          'target-arrow-color': '#ccc',
          'target-arrow-shape': 'triangle',
          'curve-style': 'bezier',
        },
      },
    ],

    layout: {
      name: 'cose', // A force-directed layout
      animate: true,
    },
  });
});
