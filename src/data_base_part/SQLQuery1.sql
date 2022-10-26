-- Sample of AWS database created

IF DB_ID('Allergens') IS NULL
CREATE DATABASE Allergens


GO 
USE Allergens

GO
if SCHEMA_ID('Foods') is NULL
Begin
Exec('Create Schema Foods AUTHORIZATION dbo')
END

USE Allergens

IF OBJECT_ID('Foods.Food', 'U') is NOT NULL
DROP TABLE Foods.Food

Create Table Foods.Food
(
	Food_ID			INT			NOT NULL,
	Food_Name		VarChar(20) NOT NULL,
	Peanut_Free		VarChar(3)	NOT NULL	Default ' ',
	Gluten_Free		VarChar(3)	NOT NULL	Default ' ',
	Dairy_Free		VarChar(3)	NOT NULL	Default ' ',
	Food_Location	VarChar(15) NOT NULL	Default ' ',

	PRIMARY KEY(Food_ID),
)