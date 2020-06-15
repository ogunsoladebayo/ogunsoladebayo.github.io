// const axios = require('axios').default;
document.querySelector('.get-jokes').addEventListener('click', fetchJokes);

async function fetchJokes(e) {
  const number = document.querySelector('input[type="number"]').value;
  axios
    .get(`https://api.icndb.com/jokes/random/${number}`)
    .then((res) => {
      const response = res.data.value;
      if (res.status === 200) {
        let output = '';
        if (res.data.type === 'success') {
          response.forEach((joke) => {
            output += `<li>${joke.joke}</li>`;
          });
        } else {
          output += 'Sorry, something went wrong...';
        }
        document.querySelector('.jokes').innerHTML = output;
      }
    })
    .catch((err) => console.log(err));
  e.preventDefault();
}
