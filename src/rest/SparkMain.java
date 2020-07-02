package rest;

import static spark.Spark.get;
import static spark.Spark.port;
import static spark.Spark.staticFiles;
import static spark.Spark.post;

import java.io.File;

import com.google.gson.Gson;

import beans.Administrator;
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
			
			//treba napraviti neku klasu koja ce biti samo korisnicko ime i sifra 
			//i onda ce se citati svi korisnici i uporedjivati  username i password
			String a = req.body(); //req.body vraca mapu kao sto si ti napisao u ajax pozivu data
			Gson g = new Gson();
			Administrator admin = g.fromJson(a, Administrator.class);
			System.out.println(admin.getUserName()  + " " + admin.getPassword());
			return  g.toJson(true);
			
		});
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	}
}
