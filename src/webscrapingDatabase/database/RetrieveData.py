import mysql.connector
import webbrowser
from bs4 import BeautifulSoup

conn = mysql.connector.connect(user='admin', password='Bismarck66!',
                               host='allergen-db1.cutjc5tgzcff.us-east-2.rds.amazonaws.com',database='Foods')

if conn:
    print ("Connected Successfully")
else:
    print ("Connection Not Established")


select_all = """SELECT * FROM Food"""
cursor = conn.cursor()
cursor.execute(select_all)
result = cursor.fetchall()

filename = 'Pfieffer.html'
soup = BeautifulSoup(filename, 'html.parser')
table = soup.find(id="dataTable")

p = []

tbl = "<tr><td>ID</td><td>Name</td><td>Email</td><td>Phone</td></tr>"
p.append(table)

tbl = "<tr><td>Food_ID</td><td id='id'>Food_Name</td><td>Calories</td><td>Peanut_Free</td><td>Dairy_Free</td><td>Gluten_Free</td><td>Location</td></tr>"
p.append(tbl)


for row in result:
    a = "<tr><td>%s</td>"%row[0]
    p.append(a)
    b = "<td>%s</td>"%row[1]
    p.append(b)
    c = "<td>%s</td>"%row[2]
    p.append(c)
    d = "<td>%s</td>"%row[3]
    p.append(d)
    e = "<td>%s</td>"%row[4]
    p.append(e)
    f = "<td>%s</td>"%row[5]
    p.append(f)

    g = "<td>%s</td></tr>"%row[6]
    p.append(g)


contents = '''<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta content="text/html; charset=ISO-8859-1"
http-equiv="content-type">
<title>Python Webbrowser</title>
</head>
<body>
<table style="padding-left: 50px">
%s
</table>
</body>
</html>
'''%(p)


# filename = 'Pfieffer.html'

filename = 'practice_table.html'



def main(table1, filename1):
    output = open(filename1,"w")
    output.write(table1)
    output.close()


main(table, filename)
webbrowser.open(filename)


if(conn.is_connected()):
    cursor.close()
    conn.close()
    print("MySQL connection is closed.")