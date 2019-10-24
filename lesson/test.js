// alert("Hello World!")

// var myVar1 = 10;
// var myVar2 = "hi";
// alert(myVar1 + myVar2);

var links = document.getElementsByTagName("a");

for (i = 0; i < links.length; i++) {
    console.log(links[i].outerHTML);
    console.log(links[i].innerText);
}

console.log(links)