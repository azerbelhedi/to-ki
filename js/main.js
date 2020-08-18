var text = "Über uns";

// Über uns
// About us
//우리에 대해
//عننا
//à propos de nous

// if (text === "Über uns") {
//   text = "About us";
// }

// console.log(text);

setInterval(function () {
  if (text === "Über uns") {
    text = "About us";
  } else if (text === "About us") {
    text = "우리에 대해";
  } else if (text === "우리에 대해") {
    text = "عننا";
  } else if (text === "عننا") {
    text = "à propos de nous";
  } else if (text === "à propos de nous") {
    text = "Über uns";
  }

  document.querySelector("#the-welcome-item").innerHTML = text;
}, 2000);

// document.querySelector("body").style.backgroundColor = "red"

setInterval(function () {
  // Math.floor(Math.random() * 10);
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 56);

  var deg = Math.floor(Math.random() * 361);
  var color1 = "rgb(" + r + "," + g + "," + b + ")";
  var color2 = "rgb(" + b + "," + b + "," + r + ")";

  document.querySelector("body").style.backgroundImage =
    "linear-gradient(" + deg + "deg," + color1 + ", " + color2 + ")";
  // "rgb(" + r + "," + g + "," + b + ")";
  //   console.log("rgb(" + r + "," + g + "," + b + ")");
}, 100);

// var firstName = "ki"
// var secondName = "azer"
// var thirdName = "ayssar"

// var names = firstName + ", " + secondName + ", " + thirdName

// var nummber =+ 5 + 8 + 6
