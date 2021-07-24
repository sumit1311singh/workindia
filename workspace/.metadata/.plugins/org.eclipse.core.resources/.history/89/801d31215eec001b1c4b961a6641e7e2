package com.higradius;

import java.io.IOException;
import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import com.higradius.DatabaseConnection;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class dataAdding
 */
@WebServlet("/dataAdding")
public class dataAdding extends HttpServlet {
	private static final long serialVersionUID = 1L;
	static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	static final String DB_URL = "jdbc:mysql://localhost/highradiusdata";
	static final String USER = "root";
	static final String PASS = "root";
    //Connection con=null;
    /**
     * @see HttpServlet#HttpServlet()
     */
    public dataAdding() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try {
	    	 //Class.forName(JDBC_DRIVER);
	         //con = DriverManager.getConnection(DB_URL, USER, PASS);
	         // Initialize the database
	         //Connection con = DatabaseConnection.initializeDatabase();
	
	         // Create a SQL query to insert data into demo table
	         // demo table consists of two columns, so two '?' is used
			 Connection con = DatabaseConnection.initializeDatabase();
	         PreparedStatement ps = con.prepareStatement("insert into mytable (cust_number,name_customer,invoice_id,total_open_amount,due_in_date) values(?, ?, ?, ?, ?)");
	
	         // For the first parameter,
	         // get the data using request object
	         // sets the data to ps pointer
	         ps.setString(2, request.getParameter("name_customer"));
	
	         // Same for second parameter
	         ps.setString(1, request.getParameter("cust_number"));
	         
	         ps.setString(3, request.getParameter("invoice_id"));
	         ps.setDouble(4, Double.valueOf(request.getParameter("total_open_amount"))); 
	         ps.setDate(5, Date.valueOf(request.getParameter("due_in_date")));
	         // Execute the insert command using executeUpdate()
	         // to make changes in database
	         int status=ps.executeUpdate();
				String json;
				if(status>0) {
					System.out.println("Success");
					json="{\"status_code\":"+status+" , \"message\":\"Success\"}";
				}
				else {
					System.out.println("Error");
					json="{\"status_code\":"+status+" , \"message\":\"Error\"}";
				}
				response.setContentType("application/JSON");
				
				try {
					response.getWriter().write(json);
				}
				catch (IOException e){
					e.printStackTrace();
				}
	         //ps.executeUpdate();
	
	         // Close all the connections
	         ps.close();
	         con.close();
	
	         // Get a writer pointer 
	         // to display the successful result
	         /*PrintWriter out = response.getWriter();
	         out.println("<html><body><b>Successfully Inserted"
	                     + "</b></body></html>");*/
	     }
	     catch (Exception e) {
	         e.printStackTrace();
	     }
		//doGet(request, response);
	}

}
