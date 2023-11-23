
//jquery css manipulation
$('.section-bg1').css('filter', 'brightness(70%)');

// navbar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(scrollY >= 100){
        navbar.classList.add('bg');
    } else{
        navbar.classList.remove('bg');
    }
})



//sub form
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

//pop up

const productLink = document.getElementById('product-link');
const productDropdown = document.getElementById('product-dropdown');

productLink.addEventListener('mouseover', function(event) {
    event.preventDefault();

    if (productDropdown.style.display === 'block') {
        productDropdown.style.display = 'none';
    } else {
        productDropdown.style.display = 'block';
    }
});

document.addEventListener('click', function(event) {
    if (!event.target.matches('#product-link')) {
        productDropdown.style.display = 'none';
    }
});


// image collage

const collageImages = [...document.querySelectorAll('.collage-img')]

collageImages.map((item, i) => {
    item.addEventListener('mouseover', () => {
        collageImages.map((image, index) => {
            if(index != i){
                image.style.filter = `blur(10px)`;
                item.style.zIndex = 2;
            }
        })
    })

    item.addEventListener('mouseleave', () => {
        collageImages.map((image, index) => {
            image.style = null;
        })
    })
})

//rating

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

//to top
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})


//Filter

filterSelection("all")
function filterSelection(c) {
  var buttonSound = document.getElementById("submit-sound");
  buttonSound.play();

  var x, i;
  x = document.getElementsByClassName("product-card");
  if (c == "all") c = "";

  for (i = 0; i < x.length; i++) {
     RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1)  AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function  RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
