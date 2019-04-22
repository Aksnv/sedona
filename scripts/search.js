"use strict";

/* ------------- Search form ------------- */

var searchForm = document.querySelector(".search__form");
var searchFormButtonToggle = document.querySelector(".search__button");
var searchFormButtons = document.querySelectorAll(".search-form__button");

var searchFormFieldAdults = document.querySelector(".search-form__field_adults");
var searchFormDecreaseButtonAdults = document.querySelector(".search-form__button_decrease_adults");
var searchFormIncreaseButtonAdults = document.querySelector(".search-form__button_increase_adults");

var searchFormFieldChildren = document.querySelector(".search-form__field_children");
var searchFormDecreaseButtonChildren = document.querySelector(".search-form__button_decrease_children");
var searchFormIncreaseButtonChildren = document.querySelector(".search-form__button_increase_children");

var decreaseNumber = function(field) {
  if (+field.value > 0) {
    field.value = +field.value - 1;
  }
}

var increaseNumber = function(field) {
  if (+field.value < 10) {
    field.value = +field.value + 1;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  for (var i = searchFormButtons.length - 1; i >= 0; i--) {
    searchFormButtons[i].removeAttribute("disabled");
  }
});

searchFormButtonToggle.addEventListener("click", function(e) {
  e.preventDefault();
  if (searchForm.classList.contains("search__form_visible")) {
    searchForm.classList.remove("search__form_visible");
    searchForm.classList.add("search__form_invisible");
  } else {
    searchForm.classList.add("search__form_visible");
    searchForm.classList.remove("search__form_invisible");
  }
});

searchFormDecreaseButtonAdults.addEventListener("click", function(e) {
  e.preventDefault();
  decreaseNumber(searchFormFieldAdults);
});

searchFormIncreaseButtonAdults.addEventListener("click", function(e) {
  e.preventDefault();
  increaseNumber(searchFormFieldAdults);
});

searchFormDecreaseButtonChildren.addEventListener("click", function(e) {
  e.preventDefault();
  decreaseNumber(searchFormFieldChildren);
});

searchFormIncreaseButtonChildren.addEventListener("click", function(e) {
  e.preventDefault();
  increaseNumber(searchFormFieldChildren);
});
