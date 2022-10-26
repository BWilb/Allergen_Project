
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
    var inputPeanut, inputGluten, inputDairy, filterPeanut, filterGluten, filterDairy, ul, li, a, i, txtValue;
    inputPeanut = 'Peanut';
    inputDairy = 'Milk';
    inputGluten = 'Flour';
    filterPeanut = inputPeanut.value.toUpperCase();
    filterGluten = inputGluten.value.toUpperCase();
    filterDairy = inputDairy.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filterPeanut) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }    for (i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filterGluten) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }    for (i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filterDairy) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}