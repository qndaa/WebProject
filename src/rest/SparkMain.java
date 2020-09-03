package rest;

import static spark.Spark.get;
import static spark.Spark.port;
import static spark.Spark.staticFiles;
import static spark.Spark.post;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Date;
import java.util.Map;

import javax.servlet.MultipartConfigElement;
import javax.servlet.http.Part;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import beans.Address;
import beans.Apartment;
import beans.ContentOfApartment;
import beans.Guest;
import beans.Host;
import beans.Location;
import beans.User;
import dto.ApartmentDTO;
import dto.ReservationDTO;
import dto.UserDTO;
import enums.StatusApartment;
import enums.TypeOfApartment;
import enums.TypeOfUser;
import spark.Session;
import spark.utils.IOUtils;

public class SparkMain {

	public static UserDTO userDto = new UserDTO();
	public static ApartmentDTO appartmentDto = new ApartmentDTO();
	public static ReservationDTO reservationDto = new ReservationDTO();

	public static void main(String[] args) throws Exception {
		port(9001);

		staticFiles.externalLocation(new File("./static").getCanonicalPath());

		userDto.loadFile();
		appartmentDto.loadFile();
		//userDto.createHost();
		
		

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
			
			Guest user = g.fromJson(playload, Guest.class);
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
		
		get("/validationAccesHost", (req, res) -> {
			res.type("application/json");
			
			Gson g = new Gson();
			
			Session ss = req.session(true);
			User user = ss.attribute("user");
			
			if(user == null) {
				res.status(403);
				return res;
			}else if (user.getTypeOfUser() != TypeOfUser.HOST) {
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
		

		post("/uploadProfileImage", (request, response) -> {
			request.attribute("org.eclipse.jetty.multipartConfig", new MultipartConfigElement("static/data/profile"));
						
			Session ss = request.session(true);
			User user = ss.attribute("user");
			String fName = request.raw().getPart("image").getSubmittedFileName();
			
			Part uploadedFile = request.raw().getPart("image");
			
			Path out = Paths.get("static/data/profile/" + user.getUserName() + ".jpg");

			
	
		    try(final java.io.InputStream in = uploadedFile.getInputStream()){

		    	OutputStream outStream = new FileOutputStream(out.toString());		 
		    	IOUtils.copy(in, outStream);
		    	
		    	outStream.close();
		    	uploadedFile.delete();
		    	in.close();
		    	
		    	
		    } catch (Exception e) {
		    	e.printStackTrace();
		    }
		    
		    
		    return "data/profile/" + user.getUserName() + ".jpg";
			

		}); 

		get("/allAppartmants", (req, res) -> {
			res.type("application/json");
			Gson g = new Gson();
			
			Session ss = req.session(true);
			User user = ss.attribute("user");
			
			/*
			if(user == null || user.getTypeOfUser() == TypeOfUser.GUEST) {
				return g.toJson(appartmentDto.getAllActiveApartment());
			}else if(user.getTypeOfUser() == TypeOfUser.HOST) {
				return g.toJson(userDto.getApartmentFromHost(user));
			}else {
				return g.toJson(appartmentDto.getAppartment());
			}
				*/
			return g.toJson(appartmentDto.getAppartment());
			
		});
		
		post("/addApartment", (req, res) -> {
			res.type("application/json");
			Gson g = new Gson();
			String playload = req.body();
			
			ObjectMapper mapper = new ObjectMapper();
			Map<String,Object> map = mapper.readValue(playload, Map.class);
			
			
			TypeOfApartment type = ((String) map.get("typeOfApartment") == "Soba" ) ? TypeOfApartment.ROOM : TypeOfApartment.FULL_APARTMENT;
			
			Address address = new Address((String) map.get("street"),Integer.parseInt((String) map.get("numberHouse")),(String) map.get("city"),Integer.parseInt((String) map.get("postNumber")));

			Location location = new Location(Double.parseDouble((String) map.get("geographicalWidth")),  Double.parseDouble((String) map.get("geographicalLength")),address);
			
			
			Session ss = req.session(true);
			User user = ss.attribute("user");
			
			Host h =  userDto.findeHost(user);
			
			
			
			Apartment a= new Apartment(type, Integer.parseInt((String) map.get("numberOfRoom")), Integer.parseInt((String) map.get("numberOfGuests")), location, h, Integer.parseInt((String) map.get("pricePerNight")), new Date(),new Date(), StatusApartment.PASSIVE);
			
			a.setId(appartmentDto.getAppartment().size()+1);
			
			int i=0;
			for (String s :(ArrayList<String>) map.get("content")) {
				a.getContent().add(new ContentOfApartment(++i,s));
			}
			
			appartmentDto.getAppartment().add(a);
			

			h.getAparment().add(a);
			
			appartmentDto.saveFile();
			userDto.saveFile();
			
			
			return true;
		});
		
		
		
	}
}
