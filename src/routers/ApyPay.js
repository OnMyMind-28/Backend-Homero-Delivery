const options = {method: 'GET'};

fetch('http://localhost:3000/api/v1/pay/', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));