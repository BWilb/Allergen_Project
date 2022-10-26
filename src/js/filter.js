
// https://medium.com/@benjamin.flanders96/how-to-create-a-simple-javascript-filter-67e50b32ccb5

filterObjects("all");


function filterObjects(c){
    var x, i;
    x = document.getElementsByClassName("box");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++){
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}
function addClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for(i = 0; i < arr2.length; i++){
        if (arr1.indexOf(arr2[i]) == -1){
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++){
        while (arr1.indexOf(arr2[i]) > -1){
            arr1.splice(arr1.indexOf(arr2[1]), 1);
        }
    }
    element.className = arr1.join(" ");
}

//https://www.w3schools.com/howto/howto_js_filter_lists.asp
function findAllergy(){
    var inputPeanut, inputGluten, inputDairy,  filter, ul, li, a, i, txtValue;
    inputPeanut = document.getElementById("Peanut")
    inputDairy = document.getElementById("Dairy")
    inputGluten = document.getElementById("Gluten")

}