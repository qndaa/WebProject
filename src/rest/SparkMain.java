package rest;

import static spark.Spark.get;
import static spark.Spark.port;
import static spark.Spark.staticFiles;
import static spark.Spark.post;

import java.io.File;

import javax.jws.soap.SOAPBinding.Use;

import com.google.gson.Gson;

import beans.User;
import dto.ApartmentDTO;
import dto.ReservationDTO;
import dto.UserDTO;
import enums.TypeOfUser;
import spark.Redirect.Status;
import spark.Request;
import spark.Session;

public class SparkMain {

	public static UserDTO userDto = new UserDTO();
	public static ApartmentDTO appartmentDto = new ApartmentDTO();
	public static ReservationDTO reservationDto = new ReservationDTO();

	public static void main(String[] args) throws Exception {
		port(9001);

		staticFiles.externalLocation(new File("./static").getCanonicalPath());

		userDto.loadFile();
		// appartmentDto.loadFile();

		get("/test", (req, res) -> {
			return "Works";
		});

		post("/login", (req, res) -> {
			res.type("application/json");
			
			Gson g = new Gson();
			
			
			String a = req.body();
			User userLogin = g.fromJson(a, User.class);
			User user = userDto.loginUser(userLogin.getUserName(), userLogin.getPassword());
			
			if (user == null) {
				res.status(400);
				return res;
			}

			Session ss = req.session(true);
			User userSession = ss.attribute("user");

			if (userSession == null) {
				userSession = user;
				ss.attribute("user", userSession);
			}

			return g.toJson(userSession);

		});

		post("checkUser", (req, res) -> {
			res.type("application/json");

			Session ss = req.session(true);
			User userSession = ss.attribute("user");

			if (userSession == null) {
				return false;
			}
			return true;
		});

		post("/checkAdministrator", (req, res) -> {
			res.type("application/json");

			Session ss = req.session(true);
			User userSession = ss.attribute("user");

			if (userSession == null) {
				return false;
			}
			if (userSession.getTypeOfUser() == TypeOfUser.ADMINISTRATOR) {
				return true;
			}

			return false;
		});

		post("/checkHost", (req, res) -> {
			res.type("application/json");

			Session ss = req.session(true);
			User userSession = ss.attribute("user");

			if (userSession == null) {
				return false;
			}
			if (userSession.getTypeOfUser() == TypeOfUser.HOST) {
				return true;
			}

			return false;
		});

		post("/checkGuest", (req, res) -> {
			res.type("application/json");

			Session ss = req.session(true);
			User userSession = ss.attribute("user");

			if (userSession == null) {
				return false;
			}
			if (userSession.getTypeOfUser() == TypeOfUser.GUEST) {
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

		post("/registrationGuest", (req, res) -> {
			res.type("application/json");
			Gson g = new Gson();
			String playload = req.body();
			User user = g.fromJson(playload, User.class);
			user.setTypeOfUser(TypeOfUser.GUEST);
			user.setImagePath("/data/profile/profile.jpg");

			boolean fleg = true;
			for (User u : userDto.getUsers()) {
				if (u.getUserName().equals(user.getUserName())) {
					fleg = false;
					break;
				}
			}

			if (fleg) {
				userDto.getUsers().add(user);
				userDto.saveFile();

				Session ss = req.session(true);
				User userSession = ss.attribute("user");

				if (userSession == null) {
					userSession = user;
					ss.attribute("user", userSession);
				}

			}

			return g.toJson(fleg);
		});
		
		
		
		post("/saveChagesUser", (req,res)->{
			res.type("application/json");
			Gson g = new Gson();
			
			String playload = req.body();
			User user = g.fromJson(playload, User.class);
			
			Session ss = req.session(true);
			ss.attribute("user", user);
			User userSesion = ss.attribute("user");
			
			boolean fleg = false;
			for (User u : userDto.getUsers()) {
				if (u.getUserName().equals(user.getUserName())) {
					fleg = true;
					userDto.getUsers().remove(u);
					userDto.getUsers().add(user);
					break;
				}
			}
			
			if(!fleg) {
				return false;
			}
				
			userDto.saveFile();	
			return true;
		});
		
		get("/sesion", (req, res) -> {
			res.type("application/json");
			
			Gson g = new Gson();
			
			Session ss = req.session(true);
			User user = ss.attribute("user");
			
			if(user == null) {
				user = new User();
				user.setTypeOfUser(TypeOfUser.NO_LOGIN);
				return  g.toJson(user);
			}
			
			return g.toJson(user);
		});
		
		get("/validationAcces", (req, res) -> {
			res.type("application/json");
			
			Gson g = new Gson();
			
			Session ss = req.session(true);
			User user = ss.attribute("user");
			
			if(user == null) {
				res.status(403);
				return res;
			}
			
			return true;
		});
		
		get("/validationAccesAdmin", (req, res) -> {
			res.type("application/json");
			
			Gson g = new Gson();
			
			Session ss = req.session(true);
			User user = ss.attribute("user");
			
			if(user == null) {
				res.status(403);
				return res;
			}else if (user.getTypeOfUser() != TypeOfUser.ADMINISTRATOR) {
				res.status(403);
				return res;
			}
			
			return true;
		});
		
		
		
		get("/allUsers", (req, res) -> {
			res.type("application/json");
			Gson g = new Gson();
			
			return g.toJson(userDto.getUsers());
			
		});
		
		
		
	
	}
}
