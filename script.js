function myFunction() {
  var x = document.getElementById("my-nav");
  if (x.className === "nav") {
    x.className += " responsive";
  } 
  
  else {
    x.className = "nav";
  }
}


const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav a");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); 
    }
  });

  navLi.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
};