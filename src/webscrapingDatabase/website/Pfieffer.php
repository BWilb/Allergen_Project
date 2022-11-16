<HTML>
    <HEAD>

    </HEAD>
    <BODY>

        <?php
        require('db.php');
        $sql = mysql_query("SELECT * FROM Food ORDER BY id ASC");

        $Food_ID = 'Food_ID';
        $Food_Name = 'Food_Name';
        $Calories = 'Calories';
        $Peanut_Free = 'Peanut_Free';
        $Dairy_Free = 'Dairy_Free';
        $Gluten_Free = 'Gluten_Free';
        //while loop removed from here
        ?>
        <table width="100%" border="1">
            <thead>
                <tr>
                    <td>Food_ID</td>
                    <td>Food_Name</td>
                    <td>Calories</td>
                    <td>Peanut_Free</td>
                    <td>Dairy_Free</td>
                    <td>Gluten_Free</td>
                    <td>Location</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><?php echo $rows['Food_ID']; ?></td>
                    <td><?php echo $rows['Food_Name']; ?></td>
                    <td><?php echo $rows['Calories']; ?></td>
                    <td><?php echo $rows['Peanut_Free']; ?></td>
                    <td><?php echo $rows['Dairy_Free']; ?></td>
                    <td><?php echo $rows['Gluten_Free']; ?></td>
                    <td><?php echo $rows['Location']; ?></td>
                </tr>
            </tbody>
        </table>

    </BODY>
</HTML>