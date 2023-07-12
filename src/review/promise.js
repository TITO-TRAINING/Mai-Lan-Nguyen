/* A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation completed successfully.
rejected: meaning that the operation failed. */

function getDataFromAPI() {
  return new Promise(function (resolve, reject) {
    fetch('https://restcountries.com/v2/all')
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Lỗi khi gọi API');
        }
      })
      .then(function (data) {
        resolve(data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

// Sử dụng Promise để lấy dữ liệu từ API
getDataFromAPI()
  .then(function (data) {
    return data; // Output: Dữ liệu từ API
  })
  .catch(function (error) {
    return error; // Output: Lỗi khi gọi API
  });

//async/await
function fetchURL(url) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (url === 'https://restcountries.com/v2/all') {
        let data = 'Dữ liệu từ URL: ' + url;
        resolve(data);
      } else {
        reject('URL không hợp lệ');
      }
    }, 2000);
  });
}

async function loadURL() {
  let url = 'https://restcountries.com/v2/all';

  try {
    let data = await fetchURL(url);
    console.log(data); // Output: Dữ liệu từ URL: https://restcountries.com/v2/all
  } catch (error) {
    console.log(error); // Output: URL không hợp lệ
  }
}

loadURL();
