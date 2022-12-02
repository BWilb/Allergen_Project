
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
    inputDairy = "Milk";
    inputGluten = "Cookie";
    filterPeanut = inputPeanut.value.toUpperCase();
    filterGluten = inputGluten.value.toUpperCase();
    filterDairy = inputDairy.value.toUpperCase();
    table = document.getElementById("dataTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++){
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filterPeanut) > -1) {
                tr[i].classList.add("box Dairy Gluten");
            } else if (txtValue.toUpperCase().indexOf(filterGluten) > -1) {
                tr[i].classList.add("box Dairy Peanut");
            } else if (txtValue.toUpperCase().indexOf(filterDairy) > -1) {
                tr[i].classList.add("box Gluten Peanut");
            } else if (txtValue.toUpperCase().indexOf(filterPeanut) > -1 && txtValue.toUpperCase().indexOf(filterGluten) > -1) {
                tr[i].classList.add("box Dairy");
            } else if (txtValue.toUpperCase().indexOf(filterPeanut) > -1 && txtValue.toUpperCase().indexOf(filterDairy) > -1) {
                tr[i].classList.add("box Gluten");
            } else if (txtValue.toUpperCase().indexOf(filterGluten) > -1 && txtValue.toUpperCase().indexOf(filterDairy) > -1) {
                tr[i].classList.add("box Peanut");
            } else if (txtValue.toUpperCase().indexOf(filterGluten) > -1 &&
                txtValue.toUpperCase().indexOf(filterDairy) > -1 &&
                txtValue.toUpperCase().indexOf(filterPeanut) > -1) {
                tr[i].classList.add("box");
            } else {
                tr[i].classList.add("box Peanut Dairy Peanut");
            }
        }
    }
}

document.getElementsByName()