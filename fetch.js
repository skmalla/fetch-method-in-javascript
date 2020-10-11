document.getElementById("getText").addEventListener("click", getText);
document.getElementById("getUsers").addEventListener("click", getUsers);
document.getElementById("getPosts").addEventListener("click", getPosts);
document.getElementById("addPosts").addEventListener("submit", addPosts);

function getText() {
  let url = "sampleText.txt";
  fetch(url)
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      document.getElementById("output").innerHTML = data;
    })
    .catch((err) => console.log(err));
}

function getUsers() {
  let url = "users.json";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let output = "<h3>USERS</h3>";
      data.forEach((users) => {
        output += `
          <ul class="list-group mb-3">
            <li class="list-group-item">SNO :${users.id}</li>
            <li class="list-group-item">NAME:${users.name}</li>
            <li class="list-group-item">EMAIL:${users.email}</li>
          </ul> 
          `;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => console.log(err));
}

function getPosts() {
  let url = "https://jsonplaceholder.typicode.com/comments";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let output = "<h3>POSTS</h3>";
      data.forEach((posts) => {
        output += `
          <div class="card card-body mb-4">
            <h3>${posts.name}</h3>
            <p>${posts.body}</p>
          </div>
          `;
      });
      document.getElementById("output").innerHTML = output;
    });
}

function addPosts(e) {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;
  let url = "https://jsonplaceholder.typicode.com/comments";
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      body: body,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
