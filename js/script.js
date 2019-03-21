var search = document.querySelector(".search-hotels-button");
var form = document.querySelector(".search");
var input = form.querySelectorAll("input[type=text]");
var inp1 = form.querySelector("input[id=date-in]");
var inp2 = form.querySelector("input[id=date-out]");
var inp3 = form.querySelector("input[id=bigs]");
var inp4 = form.querySelector("input[id=kids]");
var submit = form.querySelector(".search-button");
var isStorageSupport = true;
var storage_bigs = "";
var storage_kids = "";

try {
  storage_bigs = localStorage.getItem("bigs");
  storage_kids = localStorage.getItem("kids");
} catch (err) {
  isStorageSupport = false;
}

search.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.toggle("form-show");

  if (submit.classList.contains("error")) {
      submit.classList.remove("error");
    }

  if (storage_bigs && storage_kids) {
      inp3.value = storage_bigs;
      inp4.value = storage_kids;
    }
})

submit.addEventListener("click", function(evt) {
  if (!inp1.value || !inp2.value || !inp3.value || !inp4.value) {
    evt.preventDefault();
    console.log("Все поля должны быть заполнены!!!");
    submit.classList.remove("error");
    submit.offsetWidth = submit.offsetWidth;
    submit.classList.add("error");
  } else {
      if (isStorageSupport) {
        localStorage.setItem("bigs", inp3.value);
        localStorage.setItem("kids", inp4.value);
        }
    }
})
