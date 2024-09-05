var color = [, "#3C9EE7", "#E7993C",
    "#E73C99", "#3CE746", "#E7993C"];

document.querySelector("div").addEventListener(
"mouseover", function () {

document.querySelector("div").style.background
    = color[(Math.floor(Math.random() * color.length))];
})