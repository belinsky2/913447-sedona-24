var search=document.querySelector(".search-hotels-button"),form=document.querySelector(".search"),input=form.querySelectorAll("input[type=text]"),inp1=form.querySelector("input[id=date-in]"),inp2=form.querySelector("input[id=date-out]"),inp3=form.querySelector("input[id=bigs]"),inp4=form.querySelector("input[id=kids]"),submit=form.querySelector(".search-button"),isStorageSupport=!0,storage_bigs="",storage_kids="";try{storage_bigs=localStorage.getItem("bigs"),storage_kids=localStorage.getItem("kids")}catch(e){isStorageSupport=!1}search.addEventListener("click",function(e){e.preventDefault(),form.classList.toggle("form-show"),submit.classList.contains("error")&&submit.classList.remove("error"),storage_bigs&&storage_kids&&(inp3.value=storage_bigs,inp4.value=storage_kids)}),submit.addEventListener("click",function(e){inp1.value&&inp2.value&&inp3.value&&inp4.value?isStorageSupport&&(localStorage.setItem("bigs",inp3.value),localStorage.setItem("kids",inp4.value)):(e.preventDefault(),console.log("Все поля должны быть заполнены!!!"),submit.classList.remove("error"),submit.offsetWidth=submit.offsetWidth,submit.classList.add("error"))});