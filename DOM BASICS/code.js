const heading = document.querySelectorAll("h2");
// for (let i = 0; i < heading.length; i++){
//     heading[i].style.backgroundColor = "Yellow";
//     heading[i].style.padding = "10px";
//     heading[i].style.borderRadius = "15px";
// }
heading.forEach((h2) => {
    h2.style.backgroundColor = "lavender";
    h2.style.color = "black";
    h2.style.padding = "10px";
    h2.style.borderRadius = "15px";

});

