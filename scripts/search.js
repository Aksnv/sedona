"use strict";

/* ------------- Search form ------------- */

var searchForm = document.querySelector(".search__form");
var searchFormButton = document.querySelector(".search__button");

/*document.addEventListener("DOMContentLoaded", function() {
  searchForm.classList.add("search__form_visible");
});*/

searchFormButton.addEventListener("click", function(e) {
  e.preventDefault();
  if (searchForm.classList.contains("search__form_visible")) {
    searchForm.classList.remove("search__form_visible");
    searchForm.classList.add("search__form_invisible");
  } else {
    searchForm.classList.add("search__form_visible");
    searchForm.classList.remove("search__form_invisible");
  }
  /*searchForm.classList.toggle("search__form_visible");*/
  /*searchForm.offsetWidth;*/
});
