package rest;

import static spark.Spark.get;
import static spark.Spark.port;
import static spark.Spark.staticFiles;
import static spark.Spark.post;

import java.io.File;

import com.google.gson.Gson;

import beans.User;
import dto.AdministratorDTO;
import dto.GuestDTO;



public class SparkMain {
	
	

	public static void main(String[] args) throws Exception {
		port(9001);
		
		staticFiles.externalLocation(new File("./static").getCanonicalPath()); 
		
		
		get("/test", (req, res) -> {
			return "Works";
		});
		
		post("/login", (req,res) -> {
			res.type("application/json");
			String userName =  req.queryParams("username");
			String password = req.queryParams("password");
			Gson g = new Gson();
			
			return  g.toJson(true);
			
		});
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	}
}
