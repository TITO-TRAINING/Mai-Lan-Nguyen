export const chapter14 = () => {
  console.log('chapter14');
};

// Sample data set of mountains
var mountains = [
  { name: 'Kilimanjaro', height: 5895, place: 'Tanzania' },
  { name: 'Everest', height: 8848, place: 'Nepal' },
  { name: 'Denali', height: 6190, place: 'United States' },
];

function createTable(data) {
  // Get the first object to extract column names
  var columns = Object.keys(data[0]);

  // Create the table element
  var table = document.createElement('table');

  // Create the header row
  var headerRow = document.createElement('tr');
  for (var i = 0; i < columns.length; i++) {
    var headerCell = document.createElement('th');
    headerCell.textContent = columns[i];
    headerRow.appendChild(headerCell);
  }
  table.appendChild(headerRow);

  // Create rows for each object in the data set
  for (var j = 0; j < data.length; j++) {
    var rowData = data[j];
    var row = document.createElement('tr');

    for (var k = 0; k < columns.length; k++) {
      var cell = document.createElement('td');
      cell.textContent = rowData[columns[k]];

      // Add "number" class to number value cells for right alignment
      if (typeof rowData[columns[k]] === 'number') {
        cell.classList.add('number');
      }

      row.appendChild(cell);
    }

    table.appendChild(row);
  }

  return table;
}

// Get the element where the table will be appended
var mountainsElement = document.getElementById('mountains');

// Create the table
var mountainTable = createTable(mountains);

// Append the table to the mountains element
mountainsElement.appendChild(mountainTable);

function getElementsByTagName(node, tagName) {
  var elements = [];

  function traverse(node) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      if (node.nodeName.toLowerCase() === tagName.toLowerCase()) {
        elements.push(node);
      }

      var children = node.childNodes;
      for (var i = 0; i < children.length; i++) {
        traverse(children[i]);
      }
    }
  }

  traverse(node);
  return elements;
}

var container = document.getElementById('container'); // ví dụ với nút bắt đầu
var tagName = 'div'; // ví dụ với tên thẻ

var matchingElements = getElementsByTagName(container, tagName);
console.log(matchingElements); // Mảng các phần tử div con

var cat = document.querySelector('#cat');
var hat = document.querySelector('#hat');

var angle = 0,
  lastTime = null;
function animate(time) {
  if (lastTime != null) angle += (time - lastTime) * 0.0015;
  lastTime = time;

  cat.style.top = Math.sin(angle) * 50 + 80 + 'px';
  cat.style.left = Math.cos(angle) * 200 + 230 + 'px';
  // By adding π to the angle, the hat ends up half a circle ahead of the cat
  var hatAngle = angle + Math.PI;
  hat.style.top = Math.sin(hatAngle) * 50 + 80 + 'px';
  hat.style.left = Math.cos(hatAngle) * 200 + 230 + 'px';

  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
