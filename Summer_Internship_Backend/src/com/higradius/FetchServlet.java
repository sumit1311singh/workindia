package com.higradius;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import com.google.gson.GsonBuilder;
import com.google.gson.Gson;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class FetchServlet
 */
@WebServlet("/FetchServlet")
public class FetchServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	static final String DB_URL = "jdbc:mysql://localhost/todo";
	static final String USER = "root";
	static final String PASS = "root";
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FetchServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Connection conn = null;
		//System.out.println("inside do get");
		Statement stmt = null;
		ArrayList<Response> demoList=new ArrayList<Response>();
		try{
		//STEP 2: Register JDBC driver
		Class.forName("com.mysql.cj.jdbc.Driver");
		//STEP 3: Open a connection
		conn = DriverManager.getConnection(DB_URL,USER,PASS);
		//STEP 4: Execute a query
		//stmt = conn.createStatement();
		//System.out.println("inside try");
		//String sql;
		//int PgNo=0;
		//sql ="SELECT FIELD1, name_customer, cust_number, invoice_id, due_in_date,clear_date,total_open_amount FROM mytable LIMIT "+((PgNo-1)*10+1)+"," +10;
		//sql ="SELECT FIELD1, name_customer, cust_number, invoice_id, due_in_date,clear_date_prediction,total_open_amount FROM mytable LIMIT ";
		/*Integer start=Integer.parseInt(request.getParameter("start"));
		Integer limit=Integer.parseInt(request.getParameter("limit"));*/
		/*System.out.println(start);
		System.out.println(limit);*/
		final  String sql ="SELECT * FROM todolist" ; 
		PreparedStatement ps=conn.prepareStatement(sql);
		/*ps.setInt(1, start);
		ps.setInt(2, limit);*/
		ResultSet rs = ps.executeQuery();
		//System.out.println("after result");

		//STEP 5: Extract data from result set
		while(rs.next()){
		//Retrieve by column name
		Response checking=new Response();
		checking.setTitle(rs.getString("title"));
		checking.setDes(rs.getString("description"));
		checking.setCate(rs.getString("category"));
		checking.setDdate(rs.getDate("duedate").toString());
		demoList.add(checking);
		//System.out.println("fefe");
		//System.out.println(id);
		}
		
		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		String json=gson.toJson(demoList);
		response.setContentType("application/JSON");
		try {
			response.getWriter().write(json);
		}
		catch (IOException e){
			e.printStackTrace();
		}
		//STEP 6: Clean-up environment
		rs.close();
		ps.close();
		
		}catch(SQLException se){
		//Handle errors for JDBC
		se.printStackTrace();
		}catch(Exception e){
		//Handle errors for Class.forName
		e.printStackTrace();
		}finally{
		//finally block used to close resources
		/*try{
		if(ps!=null)
		ps.close();
		}catch(SQLException se2){
		}// nothing we can do
		*/
		try{
		if(conn!=null)
		conn.close();
		}catch(SQLException se){
		se.printStackTrace();
		}
		}
		System.out.println("Goodbye!");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
