const red = document.querySelector(".red");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
const cyan = document.querySelector(".cyan");


const center = document.querySelector(".center");

const getBgColor = (selectedElemet)=>{
    return window.getComputedStyle(selectedElemet).backgroundColor;
};

const magicColorCollector =(element,color)=>{
    return element.addEventListener("click", ()=>{
        center.style.background = color;
    });
};

magicColorCollector(red, getBgColor(red));
magicColorCollector(violet, getBgColor(violet));
magicColorCollector(cyan, getBgColor(cyan));
magicColorCollector(orange, getBgColor(orange));
magicColorCollector(pink, getBgColor(pink));

