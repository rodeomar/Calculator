
window.addEventListener("load", (event) => {
  console.log("page is fully loaded");


  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");
  
  buttons.forEach(function(button) {
    console.log("test");
    button.addEventListener("click", function() {
      let value = button.dataset;
      
      screen.innerHTML += value;
    })
  });
});

  equal.addEventListener("click", function(e) {
    screen.value = "";

      let answer = eval(screen.value);
      screen.value = answer;
    });

  clear.addEventListener("click", function(e) {
      screen.value = "";
    })
