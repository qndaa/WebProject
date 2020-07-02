package rest;

import static spark.Spark.get;
import static spark.Spark.port;
import static spark.Spark.staticFiles;
import static spark.Spark.post;

import java.io.File;




import com.google.gson.Gson;


import beans.User;

import dto.UserDTO;
import spark.Request;
import spark.Session;



public class SparkMain {
	
	public static UserDTO userDto = new UserDTO();
	

	public static void main(String[] args) throws Exception {
		port(9001);
		
		staticFiles.externalLocation(new File("./static").getCanonicalPath()); 

		
		userDto.loadFile();
		
		get("/test", (req, res) -> {
			return "Works";
		});
		
		
		post("/login", (req,res) -> {
			res.type("application/json");
			
			Gson g = new Gson();
			String username = req.queryParams("username");
			String password =req.queryParams("password");
			
			User user = userDto.loginUser(username,password);
			
			if(user == null) {
				return g.toJson(null);	
			}
			
			Session ss =req.session(true);
			User userSession = ss.attribute("user");
			
			if(userSession == null) {
				userSession = user;
				ss.attribute("user",userSession);
			}
			
			return  g.toJson(userSession);
			
		});
		
		
		
		post("checkAdministrator", (req,res) ->{
			res.type("application/json");
			
			Gson g = new Gson();
			Session ss =req.session(true);
			User userSession = ss.attribute("user");
			
			if(userSession == null) {
				
		
				 res.redirect("",403);
				 return null;
			}
			 res.redirect("",200);
			
				return null;
		});
		
		
		
		
		
		
		
		
		
		
		
		
	}
}
