fetch('https://randomuser.me/api')
    .then(response => response.json())
    .then(data => {
        const user = data.results[0];
        displayUserInfo1(user);
    })
    .catch(error => console.error('Error fetching data:', error));

function displayUserInfo1(user) {
    const userPicture = document.getElementById('user-picture1');
    const userName = document.getElementById('user-name1');
    const userCell = document.getElementById('user-cell1');
    const userCity = document.getElementById('user-city1');
    const userCountry = document.getElementById('user-country1');

    userPicture.src = user.picture.large;
    userName.textContent = `Name: ${user.name.first} ${user.name.last}`;
    userCell.textContent = `Cell: ${user.cell}`;
    userCity.textContent = `City: ${user.location.city}`;
    userCountry.textContent = `Country: ${user.location.country}`;
}
function getUserInfo() {
    return new Promise((resolve, reject) => {
        fetch('https://randomuser.me/api')
            .then(response => response.json())
            .then(data => {
                const user = data.results[0];
                resolve(user);
            })
            .catch(error => reject(error));
    });
}

function displayUserInfo2(user) {
    const userPicture = document.getElementById('user-picture2');
    const userName = document.getElementById('user-name2');
    const userCell = document.getElementById('user-cell2');
    const userCity = document.getElementById('user-city2');
    const userCountry = document.getElementById('user-country2');

    userPicture.src = user.picture.large;
    userName.textContent = `Name: ${user.name.first} ${user.name.last}`;
    userCell.textContent = `Cell: ${user.cell}`;
    userCity.textContent = `City: ${user.location.city}`;
    userCountry.textContent = `Country: ${user.location.country}`;
}

getUserInfo()
    .then(user => displayUserInfo2(user))
    .catch(error => console.error('Error fetching data:', error));


