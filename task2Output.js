let header = document.querySelector("header");
let element = header.getElementsByTagName("li")[2];
element.querySelector('a').textContent="Projects";

let div = document.querySelector(".accordian-wrapper");
let divElementsList = div.querySelectorAll("div");
let divElement = divElementsList[3];
let clone = divElement.cloneNode(true);
let heading = clone.querySelector("h3");
let para = clone.querySelector("p");

heading.textContent="Skills";
para.textContent="I posses a very good command over the Full Stack development technologies like MERN which can be seen in my work over the Github";
para.style.display="block"
divElement.after(clone);