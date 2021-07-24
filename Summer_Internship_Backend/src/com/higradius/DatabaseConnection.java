package com.higradius;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {

	protected static Connection initializeDatabase()
		throws SQLException, ClassNotFoundException
		{
        // Initialize all the information regarding
        // Database Connection
        
			 String DRIVER = "com.mysql.jdbc.Driver";  
			 String DB_URL ="jdbc:mysql://localhost/highradiusdata";
        
			 String USER = "root";
			 String PASS ="root";
			Class.forName("com.mysql.cj.jdbc.Driver");
		Connection	conn = DriverManager.getConnection(DB_URL,USER,PASS);
        return conn;
		}

}