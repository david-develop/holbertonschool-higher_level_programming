-- Script lists the number of records with the same
-- Lists the number of records with the same score in the table second_table of the database hbtn_0c_0 in your MySQL server.
SELECT score, name FROM second_table WHERE name != "" ORDER BY score DESC;
