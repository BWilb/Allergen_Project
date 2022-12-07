import mysql.connector
import webbrowser

conn = mysql.connector.connect(user='admin', password='Bismarck66!',
                               host='allergen-db1.cutjc5tgzcff.us-east-2.rds.amazonaws.com', database='Foods')

if conn:
    print("Connected Successfully")
else:
    print("Connection Not Established")

select_all = """SELECT Food_Name, Calories, Peanut_Free, Dairy_Free, Gluten_Free FROM Foods.Food"""
cursor = conn.cursor()
cursor.execute(select_all)
result = cursor.fetchall()

p = []

tbl = "<tr style='border: 1px solid black'><th id='name'>Food_Name</th><th style='padding-right: 145px' id='cal'>Calories</th><th style='padding-right: 145px' id='peanut'>Peanut_Free</th><th style='padding-right: 145px' id='dairy'>Dairy_Free</th><th style='145px' id='gluten'>Gluten_Free</th></tr>"
p.append(tbl)

for row in result:
    a = "<tr style='border: 1px solid black'><td>%s</td>" % row[0]
    p.append(a)
    b = "<td>%s</td>" % row[1]
    p.append(b)
    c = "<td>%s</td>" % row[2]
    p.append(c)
    d = "<td>%s</td>" % row[3]
    p.append(d)
    e = "<td>%s</td>" % row[4]
    p.append(e)
    # f = "<td>%s</td>" % row[5]
    # p.append(f)
    # g = "<td>%s</td></tr>" % row[6]
    # p.append(g)

c = " ".join(p)
contents = '''
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name = "viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name = "author" content="">
    <link rel="stylesheet" type="text/css" href="main.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

    <style>
body {
            padding: 0;
            margin: 0;
            background-image: url('backgroundimage.jpg');
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover;
        }
        .header {
            background-image: url('backgroundimage.jpg');
            background-size: cover;
            background-position: center;
            position: relative;
        }
        .description h1 {
            color: #6583ad;
        }
        .description p {
            color: #6583ad;
            font-size: 1.3rem;
            line-height: 1.5;
        }
        .navbar a {
            float: left;
            padding: 7px;
            color: white;
            text-decoration: none;
            font-size: 17px;
        }
        .description button {
            border:1px solid #6583ad;
            background:#6583ad;
            border-radius: 0;
            color:#fff;
        }
        .description button:hover {
            border:1px solid #fff;
            background:#fff;
            color:#000;
        }
        .show{
            display: block;
        }
        .btn{
            color:#0000
        }
        .d-flex{
            text-align: right;
            margin-left: 400px;
        }
        .nav-item {
            display: inline-block;
            white-space: nowrap;
        }    
</style>
</head>
<body onload="findAllergy()">

<header class="page-header header container-fluid">
</header>
<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

<nav class="navbar navbar-expand-lg" style="background-color: #6583ad;">
    <div class="container-fluid">
        <a class="navbar-brand" href="#"style="color: darkblue ">CMSC-375</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class = "nav-item active">
                    <a class="nav-link" href="Home.html">Home <span class="sr-only"></span></a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="Restaurants.html">Restaurants</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="AllergenFinder.html">Allergen Finder</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="HowTo.html">How To</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="AboutUs.html">About Us</a>
                </li>
            </ul>
            <form class="d-flex" role="search" >

                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" >
                <div style="text-align: right">
                    <button class="btn btn-outline-success" type="submit" >Search</button>
                </div>
            </form>
        </div>
    </div>
</nav>

<div class="container">
    <h1 class="text-center mt-3 mb-3"></h1>

    <h1 style="text-align: center">Pfieffer Dining Hall</h1>
</div>
<div class="card" style="width: 18rem; height: 15rem">
    <div class="card-body" style="text-align: center" >
        <h5 class="card-title">Allergen Finder</h5>
        <h6 class="card-subtitle mb-2 text-muted">Click an allergen</h6>

        <a class="btn btn-primary click" id="all" onclick="filterObjects('all')" value="allbutton" href="#" role="button" style="text-align: center">All</a>
        <a class="btn btn-primary click" id="glutenbutton" onclick="filterObjects('Gluten')" value="glutenbutton" href="#" role="button" style="text-align: center">Gluten</a>
        <a class="btn btn-primary click2" id="dairybutton" onclick="filterObjects('Dairy')" value="dairybutton" href="#" role="button" style="text-align: center">Dairy</a>
        <a class="btn btn-primary click3" id="peanutbutton" onclick="filterObjects('Peanut')"  value="peanutbutton" href="#" role="button" style="text-align: center">Peanut</a>

    </div>
</div>
<div class="container mt-4">
    <p class="alert alert-success mt-4"></p>
    <table id="dataTable">
        %s
    </table>

</div>

<script>
    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
</script>
<script src="webscrapingDatabase/database/filter.js"></script>
</body>
</html>
'''%(c)

filename = 'pfieffer.html'#'../../Pfieffer.html'


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
