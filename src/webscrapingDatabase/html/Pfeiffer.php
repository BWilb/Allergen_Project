<!----output of script is code itself, still working on it--> n
<html>
<head>
    <meta charset="UTF-8">
    <title>Pfeiffer Dining Hall</title>

</head>
<body>
<table>
    <thead>
        <tr>
            <th>
                Food_ID
            </th>
            <th>
                Food_Name
            </th>
            <th>
                Peanut_Free
            </th>
            <th>
                Dairy_Free
            </th>
            <th>
                Gluten_Free
            </th>
            <th>
                Location
            </th>
        </tr>
    </thead>
    <tbody>
    <?php
     $servername = "allergen-db1.cutjc5tgzcff.us-east-2.rds.amazonaws.com";
     $username = "admin";
     $password = "Bismarck66!";
     $database = "Food";

     $connection = new mysqli($servername, $username, $password, $database);

     if($connection->connect_error){
        die("Connection failed: ".$connection -> connect_error)
        }

        $sql = "SELECT * FROM Food";
        $result = $connection->query($sql);

        if(!$result){
        die("Invalid query: ".$connection->error);
        }

        while($row = $result->fetch_assoc()){
        echo "<tr>
            <td>".$row["Food_ID"]."</td>"
            <td>".$row["Food_Name"]."</td>"
            <td>".$row["Peanut_Free"]."</td>"
            <td>".$row["Dairy_Free"]."</td>"
            <td>".$row["Gluten_Free"]."</td>"
            <td>".$row["Location"]."</td>"
        </tr>"
        }
    ?>
    </tbody>
</table>

</body>
</html>