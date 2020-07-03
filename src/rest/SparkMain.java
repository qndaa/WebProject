package rest;

import static spark.Spark.get;
import static spark.Spark.port;
import static spark.Spark.staticFiles;
import static spark.Spark.post;

import java.io.File;




import com.google.gson.Gson;


import beans.User;

import dto.UserDTO;
import enums.TypeOfUser;
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
		
		
		
		post("checkUser", (req,res) ->{
			res.type("application/json");
			
			Session ss =req.session(true);
			User userSession = ss.attribute("user");
			
			if(userSession == null) {
				return false;
			}
			return true;
		});
		
	
		post("/checkAdministrator", (req,res) ->{
			res.type("application/json");
			
			Session ss =req.session(true);
			User userSession = ss.attribute("user");
			
			if(userSession == null) {
				return false;
			}
			if(userSession.getTypeOfUser() == TypeOfUser.ADMINISTRATOR) {
				return true;
			}
			
			return false;
		});
		
		post("/checkHost", (req,res) ->{
			res.type("application/json");
			
			Session ss =req.session(true);
			User userSession = ss.attribute("user");
			
			if(userSession == null) {
				return false;
			}
			if(userSession.getTypeOfUser() == TypeOfUser.HOST) {
				return true;
			}
			
			return false;
		});
		
		
		post("/checkGuest", (req,res) ->{
			res.type("application/json");
			
			Session ss =req.session(true);
			User userSession = ss.attribute("user");
			
			if(userSession == null) {
				return false;
			}
			if(userSession.getTypeOfUser() == TypeOfUser.GUEST) {
				return true;
			}
			
			return false;
		});
		
		get("/logout", (req, res) -> {
			res.type("application/json");
			Session ss = req.session(true);
			User user = ss.attribute("user");
			
			if (user != null) {
				ss.invalidate();
			}
			return true;
		});
		
	}
}
