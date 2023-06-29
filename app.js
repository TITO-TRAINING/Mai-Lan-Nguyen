// Validate form field
function validateField(value, fieldName) {
  if (value.trim() === '') {
    alert(fieldName + ' is required');
    return false;
  }
  return true;
}

// Validate form
function validateForm() {
  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;
  var address = document.getElementById('address').value;
  var email = document.getElementById('email').value;

  if (!validateField(name, 'Name')) {
    return false;
  }

  if (!validateField(age, 'Age')) {
    return false;
  } else if (age < 1) {
    alert('Age must not be zero or less than zero');
    return false;
  }

  if (!validateField(address, 'Address')) {
    return false;
  }

  if (!validateField(email, 'Email')) {
    return false;
  } else if (!email.includes('@')) {
    alert('Invalid email address');
    return false;
  }

  return true;
}

// Show data in table
function showData() {
  var peopleList = JSON.parse(localStorage.getItem('peopleList')) || [];

  var html = '';

  peopleList.forEach(function (element, index) {
    html += '<tr>';
    html += '<td>' + element.name + '</td>';
    html += '<td>' + element.age + '</td>';
    html += '<td>' + element.address + '</td>';
    html += '<td>' + element.email + '</td>';
    html +=
      '<td><button data-index="' +
      index +
      '" class="btn btn-danger">Delete</button><button data-index="' +
      index +
      '" class= "btn btn-warning m-2">Edit</button></td>';
    html += '</tr>';
  });

  document.querySelector('#crudTable tbody').innerHTML = html;
}

// Load data when document or page loaded
document.addEventListener('DOMContentLoaded', function () {
  showData();
});

// Add data
document.getElementById('Submit').addEventListener('click', function () {
  if (validateForm()) {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;

    var peopleList = JSON.parse(localStorage.getItem('peopleList')) || [];

    peopleList.push({
      name: name,
      age: age,
      address: address,
      email: email,
    });

    localStorage.setItem('peopleList', JSON.stringify(peopleList));
    showData();

    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('address').value = '';
    document.getElementById('email').value = '';
  }
});

// Delete data
document
  .querySelector('#crudTable')
  .addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-danger')) {
      var index = event.target.dataset.index;
      var peopleList = JSON.parse(localStorage.getItem('peopleList')) || [];

      peopleList.splice(index, 1);
      localStorage.setItem('peopleList', JSON.stringify(peopleList));
      showData();
    }
  });

// Update data
document
  .querySelector('#crudTable')
  .addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-warning')) {
      var index = event.target.dataset.index;
      var peopleList = JSON.parse(localStorage.getItem('peopleList')) || [];

      document.getElementById('Submit').style.display = 'none';
      document.getElementById('Update').style.display = 'block';

      document.getElementById('name').value = peopleList[index].name;
      document.getElementById('age').value = peopleList[index].age;
      document.getElementById('address').value = peopleList[index].address;
      document.getElementById('email').value = peopleList[index].email;

      document.querySelector('#Update').onclick = function () {
        if (validateForm()) {
          peopleList[index].name = document.getElementById('name').value;
          peopleList[index].age = document.getElementById('age').value;
          peopleList[index].address = document.getElementById('address').value;
          peopleList[index].email = document.getElementById('email').value;

          localStorage.setItem('peopleList', JSON.stringify(peopleList));
          showData();

          document.getElementById('name').value = '';
          document.getElementById('age').value = '';
          document.getElementById('address').value = '';
          document.getElementById('email').value = '';

          document.getElementById('Submit').style.display = 'block';
          document.getElementById('Update').style.display = 'none';
        }
      };
    }
  });
