
// https://medium.com/@benjamin.flanders96/how-to-create-a-simple-javascript-filter-67e50b32ccb5
// This next three functions are apart of the filter system that are looking at class names and
// showing and displaying items based on what corresponding filter button is pushed

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
//https://www.w3schools.com/howto/howto_js_add_class.asp
// This function should be searching through the file for different items for the different allergies
// the function then will assign class values according to to the corresponding allergy that is found
function findAllergy(){
    var inputPeanut, inputGluten, inputDairy, filterPeanut, filterGluten, filterDairy, table, tr, td, i, txtValue;
    inputPeanut = "Peanut";
    inputDairy = "1";
    inputGluten = "Cookie";
    inputGluten.type = "text";
    filterPeanut = inputPeanut.toUpperCase().valueOf();
    filterGluten = inputGluten.valueOf().toUpperCase();
    filterDairy = inputDairy.valueOf().toUpperCase();
    table = document.getElementById("dataTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++){
        td = tr[i].getElementsByTagName("td")[0];
        console.log(td)
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filterPeanut) > -1) {
                tr[i].classList.add("box");
                tr[i].classList.add("Dairy");
                tr[i].classList.add("Gluten");
            } else if (txtValue.toUpperCase().indexOf(filterGluten) > -1) {
                tr[i].classList.add("box");
                tr[i].classList.add("Dairy");
                tr[i].classList.add("Peanut");
            } else if (txtValue.toUpperCase().indexOf(filterDairy) > -1) {
                tr[i].classList.add("box");
                tr[i].classList.add("Gluten");
                tr[i].classList.add("Peanut");
            } else if (txtValue.toUpperCase().indexOf(filterPeanut) > -1 && txtValue.toUpperCase().indexOf(filterGluten) > -1) {
                tr[i].classList.add("box");
                tr[i].classList.add("Dairy");
            } else if (txtValue.toUpperCase().indexOf(filterPeanut) > -1 && txtValue.toUpperCase().indexOf(filterDairy) > -1) {
                tr[i].classList.add("box");
                tr[i].classList.add("Gluten");
            } else if (txtValue.toUpperCase().indexOf(filterGluten) > -1 && txtValue.toUpperCase().indexOf(filterDairy) > -1) {
                tr[i].classList.add("box");
                tr[i].classList.add("Peanut");
            } else if (txtValue.toUpperCase().indexOf(filterGluten) > -1 &&
                txtValue.toUpperCase().indexOf(filterDairy) > -1 &&
                txtValue.toUpperCase().indexOf(filterPeanut) > -1) {
                tr[i].classList.add("box");
            } else {
                tr[i].classList.add("box");
                tr[i].classList.add("Peanut");
                tr[i].classList.add("Dairy");
                tr[i].classList.add("Gluten");
            }
        }
    }
}

// document.getElementsByName();

function testFunction(){
    var table;
    table = document.getElementById("dataTable");
    table.classList.add("box");
}