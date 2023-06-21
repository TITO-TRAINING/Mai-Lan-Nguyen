/* Build a Table
An HTML table is built with the following tag structure:
<table>
<tr>
<th>name</th>
<th>height</th>
<th>place</th>
</tr>
<tr>
<td>Kilimanjaro</td>
<td>5895</td>
<td>Tanzania</td>
</tr>
</table>
For each row, the <table> tag contains a <tr> tag. Inside of these <tr> tags,
we can put cell elements: either heading cells (<th>) or regular cells (<td>).
Given a data set of mountains, an array of objects with name, height, and
place properties, generate the DOM structure for a table that enumerates
the objects. It should have one column per key and one row per object, plus
a header row with <th> elements at the top, listing the column names.
Write this so that the columns are automatically derived from the
objects, by taking the property names of the first object in the data.
Add the resulting table to the element with an id attribute of "mountains"
so that it becomes visible in the document.
Once you have this working, right-align cells that contain number values
by setting their style.textAlign property to "right". */

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

/* Elements by Tag Name
The document.getElementsByTagName method returns all child elements with a
given tag name. Implement your own version of this as a function that takes
a node and a string (the tag name) as arguments and returns an array containing all descendant element nodes with the given tag name.
To find the tag name of an element, use its nodeName property. But note
that this will return the tag name in all uppercase. Use the toLowerCase or
toUpperCase string methods to compensate for this.
 */

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

/* The Cat’s Hat
Extend the cat animation defined in “Positioning and Animating” on
page 240 so that both the cat and his hat (<img src="img/hat.png">) orbit at
opposite sides of the ellipse.
Or make the hat circle around the cat. Or alter the animation in some
other interesting way.
To make positioning multiple objects easier, it is probably a good idea
to switch to absolute positioning. This means that top and left are counted
relative to the top left of the document. To avoid using negative coordinates,
which would cause the image to move outside of the visible page, you can
add a fixed number of pixels to the position values */

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
