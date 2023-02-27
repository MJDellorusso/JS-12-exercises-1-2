const randomFolks = document.querySelector(".random-peeps");

const getData = async function () {
  const userRequest = await fetch("https://randomuser.me/api/?results=5");
  const data = await userRequest.json();
  const userResults = data.results;
  console.log(data);
  displayUsers(userResults);
};

getData();

displayUsers = function (userResults) {
  //Clear the randomFolks element
  randomFolks.innerHTML = "";

  for (const user of userResults) {
    const country = user.location.country;
    const name = user.name.first;
    const imageUrl = user.picture.medium;

    const userDiv = document.createElement("div");
    userDiv.innerHTML = `
    <h3>${name}</h3>
    <p>${country}</p>
    <img src=$${imageUrl} alt="User avatar"/>
    `;
    randomFolks.append(userDiv);
  }
};
