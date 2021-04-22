window.onload = function () {
  console.log("started");
  var m1title = document.getElementById("m1title");
  var uid1;
  
  fetch("https://cricapi.com/api/cricket/uJtfZiOErvetroxtV8NlQO9Fdk82")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var m1t = data.data[13].title;
      m1title.textContent = m1t;

      uid1 = data.data[0].unique_id;
      
      getscore1(uid1);
     
    })
    .catch(() => {
      var error = document.getElementById("error");
      error.textContent = "Sorry , No IPL Matches right now!!";
    });
};

function getscore1(uid) {
  var m1score = document.getElementById("m1score");
  fetch(
    "http://cricapi.com/api/cricketScore/uJtfZiOErvetroxtV8NlQO9Fdk82?unique_id=" +
      uid
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var score = data.stat;
      m1score.textContent = score;
    })
    .catch(() => {
      var error = document.getElementById("error");
      error.textContent = "Sorry , No IPL Matches right now!!";
    });
}



document.getElementById("refresh").onclick = function () {
  history.go(0);
};
