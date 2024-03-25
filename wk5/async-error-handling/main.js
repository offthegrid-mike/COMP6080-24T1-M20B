const API_URL = 'https://jsonplaceholder.typicode.com'

const apiCall = (id) => {
  fetch("https://jsonplaceholder.typicode.com/users/" + id, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    },
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const name = data.name;

    const divElement = document.createElement("div");
    divElement.innerText = name;
    divElement.classList = "container-class";
    divElement.addEventListener("click", () => {
      document.getElementById("result").removeChild(divElement);
    })
    document.getElementById("result").appendChild(divElement);

    // document.getElementById("result").innerText = name;

    document.getElementById("result").style.display = "block";
  });
};

apiCall(1);

function getUserByIdAndUsername(id, username) {

}
