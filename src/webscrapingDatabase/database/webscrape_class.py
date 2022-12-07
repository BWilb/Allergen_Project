from bs4 import BeautifulSoup
import requests
import mysql.connector

#creation of mysql connection
db = mysql.connector.connect(
    host="allergen-db1.cutjc5tgzcff.us-east-2.rds.amazonaws.com",
    user='admin',
    password='Bismarck66!',
    database='Foods'
)

mycursor = db.cursor()

mycursor.execute("DELETE FROM Food")

#retreival of website data
url = "https://menus.sodexomyway.com/BiteMenu/Menu?menuId=14740&locationId=10395001&whereami=https://simpsondining-preview.sodexomyway.com/dining-near-me/pfieffer-dining-hall"
result = requests.get(url)
doc = BeautifulSoup(result.text, "html.parser")

database_values = [[]]
#arrays for specific items
food = []
calorie = []
peanuts = []
dairy = []
gluten = []

"""Beginning of Webscraping script"""
#html parsers for specific items
foods = doc.find_all("a", attrs={"class":"get-nutritioncalculator"})
calories = doc.find_all("a", attrs={"class":"get-nutrition"})
allergens = doc.find_all("img", attrs={"class":"icon-allergen"})

for i in range(0, len(foods)):
    calorie.append(calories[i].text.strip())
    if(allergens[i]['alt'] == 'contains peanuts'):
        peanuts.append("contains peanuts")
    else:
        peanuts.append('peanut free')

    if(allergens[i]['alt'] == 'contains milk'):
       dairy.append('contains milk')
    else:
        dairy.append("dairy free")

    if(allergens[i]['alt'] == 'contains gluten'):
        gluten.append('contains gluten')
        #gluten.append("contains gluten")
    else:
        gluten.append("gluten free")

    """end of webscraping script"""


    """Beginning of database pushing script"""
    if foods[i].text == 'Peripherals':
        #database_values.append([foods[i].text, '0cal' 'peanut free', 'dairy free', 'gluten free'])
        mycursor.execute("INSERT INTO Food (Food_ID, Food_Name, Calories, Peanut_Free, Dairy_Free, Gluten_Free) VALUES (%s, %s, %s, %s, %s, %s)",
        (i, foods[i].text, "0cal", "peanut free", "dairy free", "gluten free"))
    else:
        #database_values.append([foods[i].text, calorie[i], peanuts[i], dairy[i], gluten[i]])
        mycursor.execute("INSERT INTO Food (Food_ID, Food_Name, Calories, Peanut_Free, Dairy_Free, Gluten_Free) VALUES (%s, %s, %s, %s, %s, %s)",
        (i, foods[i].text, calorie[i], peanuts[i], dairy[i], gluten[i]))

db.commit()
"""end of database pushing script"""
