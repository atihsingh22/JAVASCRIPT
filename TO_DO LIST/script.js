// const h2 = document.createElement("h2");
// h2.innerText = "Ishita";
// h2.style.color = 'Red';
// h2.id = Math.random()*10+1;

// console.log(document.body.appendChild(h2));

const newli = document.createElement("li");
newli.innerText = "Dr. Strange";
newli.style.color = 'blue';
document.querySelector(".heroes").appendChild(newli);

// const addHero = (heroname) => {
//     const newli = document.createElement("li");
//     newli.innerText = `${heroname}`;
//     newli.style.color = "blue";
//     document.querySelector(".heroes").appendChild(newli);
// }
//better in performance wise for larger data 
const addHero2 = (heroname) => {
    const newli = document.createElement("li");
    const textData = document.createTextNode(heroname);
    newli.appendChild(textData);
    newli.style.color = "blue";
    document.querySelector(".heroes").appendChild(newli);
};
addHero2('Gauri');
addHero2('Ishita');
addHero2('Mahi');
//edit DOM Element
// const edithero = document.querySelector("li:first-child");
// const edithero = document.querySelector("li:last-child");
// const edithero = document.querySelector('li:nth-child(2)'); //2 is the position
// edithero.innerText = 'Doga';
// const edithero = (pos, textData) => {
//     querySelector("li:pos");
// }
// edithero('first-child', 'doga');
const removeHero = (pos) => {
    const rm = document.querySelector(`li:nth-child(${pos})`);
    rm.remove();
    return rm.innerText;
};
console.log("Removed", removeHero(2));
console.log("Removed", removeHero(1));


