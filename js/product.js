let ratingStarInput = [...document.querySelectorAll('.rating-star')];

ratingStarInput.map((star, index) => {
    star.addEventListener('click', () => {
        for(let i = 0; i < 5; i++){
            if(i <= index){
                ratingStarInput[i].src = `img/fill star.png`;
            } else{
                ratingStarInput[i].src = `img/no fill star.png`;
            }
        }
    })
})

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

//sub

document.getElementById("subscription-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const emailInput = document.getElementById("email");
  const successAlert = document.getElementById("success-alert");
  const errorAlert = document.getElementById("error-alert");

  // Simulate subscription success (you can replace this with your subscription logic)
  const isSubscriptionSuccessful = Math.random() < 0.5;

  if (isSubscriptionSuccessful) {
    // Show success alert and hide error alert
    successAlert.style.display = "block";
    errorAlert.style.display = "none";
    emailInput.value = ""; // Clear email input on success
  } else {
    // Show error alert and hide success alert
    errorAlert.style.display = "block";
    successAlert.style.display = "none";
  }
});

$(document).ready(function() {
  $("#subscription-form").submit(function(e) {
      $("#subscription-form").fadeOut("slow", function() {
      });
  });
});
