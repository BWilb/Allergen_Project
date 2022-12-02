import mysql.connector
import webbrowser

conn = mysql.connector.connect(user='admin', password='Bismarck66!',
                               host='allergen-db1.cutjc5tgzcff.us-east-2.rds.amazonaws.com', database='Foods')

if conn:
    print("Connected Successfully")
else:
    print("Connection Not Established")

select_all = """SELECT * FROM Food"""
cursor = conn.cursor()
cursor.execute(select_all)
result = cursor.fetchall()

p = []

tbl = "<tr><th>Food_ID</th><th>Food_Name</th><th>Calories</th><th>Peanut_Free</th><th>Dairy_Free</th><th>Gluten_Free</th><th>Location</th></tr>"
p.append(tbl)

for row in result:
    a = "<tr><td>%s</td>" % row[0]
    p.append(a)
    b = "<td>%s</td>" % row[1]
    p.append(b)
    c = "<td>%s</td>" % row[2]
    p.append(c)
    d = "<td>%s</td>" % row[3]
    p.append(d)
    e = "<td>%s</td>" % row[4]
    p.append(e)
    f = "<td>%s</td>" % row[5]
    p.append(f)
    g = "<td>%s</td></tr>" % row[6]
    p.append(g)
print(p)
c = " ".join(p)
contents = '''<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

    <style>

.navbar {
  overflow: hidden;
  background-color: #333;
  font-family: Arial, Helvetica, sans-serif;
}

.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  cursor: pointer;
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar a:hover, .dropdown:hover .dropbtn, .dropbtn:focus {
  background-color: red;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.show {
  display: block;
}

h1.dining{
      text-align: center;
}

table.data-base-table{
      padding-left: 100px;
      padding-right: 100px;
}
th.data-id{
      padding-left: 75px;
      padding-right: 25px;
}

th.data-name{
      padding-left: 75px;
      padding-right: 25px;
 }

th.data-cals{
      padding-left: 75px;
      padding-right: 25px;
}

th.data-peanut{
  padding-left: 75px;
      padding-right: 25px;
}

th.data-dairy{
      padding-left: 75px;
      padding-right: 25px;
}

th.data-gluten{
      padding-left: 75px;
      padding-right: 100px;
}

th.location {
      padding-left: 75px;
      padding-right: 25px;
}
</style>
</head>
<body>


<div class="container">
    <h1 class="text-center mt-3 mb-3"></h1>

<h1 style="text-align: center">Pfieffer Dining Hall</h1>
</div>

<div class="navbar">
    <div class="dropdown">
        <button class="dropbtn" onclick="myFunction()">Dropdown
            <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content" id="myDropdown">
            <a href="#" id="Monday">Monday</a>
            <a href="#" id="Tuesday">Tuesday</a>
            <a href="#" id="Wednesday" >Wednesday</a>
            <a href="#" id="Thursday">Thursday</a>
            <a href="#" id="Friday">Friday</a>
            <a href="#" id="Saturday">Saturday</a>
            <a href="#" id="Sunday">Sunday</a>
        </div>
    </div>
</div>
    <div class="container mt-4">
        <p class="alert alert-success mt-4"></p>
<table id="dataTable" class="table" onload="findAllergy"()>
    %s
</table>

</div>

<script>
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
</script>
<script></script>
<script src="js/filter.js"></script>
</body>
</html>
'''%(c)

filename = 'Pfieffer.html'


def main(contents, filename):
    output = open(filename, "w")
    output.write(contents)
    output.close()


main(contents, filename)
webbrowser.open(filename)

if (conn.is_connected()):
    cursor.close()
    conn.close()
    print("MySQL connection is closed.")
