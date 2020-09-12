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
import dto.ContentsOfApartmentDTO;
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
	public static ContentsOfApartmentDTO contentsOfApartmentDTO = new ContentsOfApartmentDTO(); 

	public static void main(String[] args) throws Exception {
		port(9001);

		staticFiles.externalLocation(new File("./static").getCanonicalPath());


		userDto.loadFile();
		appartmentDto.loadFile();
		contentsOfApartmentDTO.loadFile();
		//userDto.createHost();

		
		

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
			user.setIsBlocekd(false);
			
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
			
			boolean fleg = false;
			for (User u : userDto.getUsers()) {
				if (u.getUserName().equals(user.getUserName())) {
					fleg = true;
					u.setName(user.getName());
					u.setSurname(user.getSurname());
					if(!user.getPassword().equals("")) {
						u.setPassword(user.getPassword());
					}
				
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
			
			
			if(user == null || user.getTypeOfUser() == TypeOfUser.GUEST) {
				return g.toJson(appartmentDto.getAllActiveApartment());
			}else if(user.getTypeOfUser() == TypeOfUser.HOST) {
				
				return g.toJson(appartmentDto.getAllApartmentFromHost(user));
			}else {
				return g.toJson(appartmentDto.getAppartment());
			}
			
			
			
		});
		
		post("/addApartment", (req, res) -> {
			res.type("application/json");
			Gson g = new Gson();
			String playload = req.body();
			
			ObjectMapper mapper = new ObjectMapper();
			Map<String,Object> map = mapper.readValue(playload, Map.class);
			
			System.out.println(map);
			System.out.println(map.get("geographicalWidth"));
			double aj = (double) map.get("geographicalWidth");
			System.out.println(map.get("typeOfApartment").equals("Soba"));
			
			TypeOfApartment type = (map.get("typeOfApartment").equals("Soba")) ? TypeOfApartment.ROOM : TypeOfApartment.FULL_APARTMENT;
			
			Address address = new Address((String) map.get("street"),Integer.parseInt((String) map.get("numberHouse")),(String) map.get("city"),Integer.parseInt((String) map.get("postNumber")));
			
			address.setCountry((String) map.get("country"));
			System.out.println(address.getCountry());
			
			Location location = new Location((Double) map.get("geographicalWidth"),(Double) map.get("geographicalLength"),address);
			
			
			Session ss = req.session(true);
			User user = ss.attribute("user");
			
			Host h =  userDto.findeHost(user);
			
			
			
			Apartment a= new Apartment(type, Integer.parseInt((String) map.get("numberOfRoom")), Integer.parseInt((String) map.get("numberOfGuests")), location, h.getUserName(), Integer.parseInt((String) map.get("pricePerNight")), new Date(),new Date(), StatusApartment.PASSIVE);
			
			a.setId(appartmentDto.getAppartment().size()+1);
			
			int i=0;
			//ovo treba da se sredi da budu samo id
			for (Integer s :(ArrayList<Integer>) map.get("content")) {
				System.out.println(s);
				a.getIdContetn().add(s);
			}
			
			appartmentDto.getAppartment().add(a);
			
			
			h.getIdApartment().add(a.getId());
			
			
			
			appartmentDto.saveFile();
			userDto.saveFile();
			
			
			return true;
		});
		
		
		post("/getApartment", (request, response) -> {
			response.type("application/json");
			Gson g = new Gson();			
			int id =  Integer.parseInt(request.queryParams("id"));
			Apartment apartment = appartmentDto.getApartmentById(id);
			apartment.setHost((Host)userDto.getUserById(apartment.getIdHost()));
			return g.toJson(appartmentDto.getApartmentById(id));
		});
		
		
		post("/getContentsOfApartment", (request, response) -> {
			response.type("application/json");
			Gson g = new Gson();
			return g.toJson(contentsOfApartmentDTO.getContentsOfApartment());
		});
		
		post("/deleteContentsOfApartment", (request, response) -> {
			response.type("application/json");
			Gson g = new Gson();
			int id =  Integer.parseInt(request.queryParams("id"));
			contentsOfApartmentDTO.deleteContentsOfApartmentById(id);
			return g.toJson(contentsOfApartmentDTO.getContentsOfApartment());	
		});
		
		post("/addContentsOfApartment", (request, response) -> {
			response.type("application/json");
			Gson g = new Gson();
			request.attribute("org.eclipse.jetty.multipartConfig", new MultipartConfigElement("static/data/profile"));
			String name = request.queryParams("newItemName");
			
			Part uploadedFile = request.raw().getPart("image");
			
			Path out = Paths.get("static/data/contentsOfApartment/" + name + ".jpg");

		    try(final java.io.InputStream in = uploadedFile.getInputStream()){

		    	OutputStream outStream = new FileOutputStream(out.toString());		 
		    	IOUtils.copy(in, outStream);
		    	
		    	outStream.close();
		    	uploadedFile.delete();
		    	in.close();
		    	
		    	
		    } catch (Exception e) {
		    	e.printStackTrace();
		    }
			
		    
			contentsOfApartmentDTO.addContentsOfApartment(name, "/data/contentsOfApartment/" + name + ".jpg");
			
			return g.toJson(contentsOfApartmentDTO.getContentsOfApartment());	
		});
		
		
		post("/createHost", (request, response) -> {
			response.type("application/json");
			Gson g = new Gson();
			
			String playload = request.body();
			Host host = g.fromJson(playload, Host.class);
			
			userDto.deleteUser(host.getUserName());
			userDto.addUser(host);
			userDto.saveFile();
			
			return g.toJson(userDto.getUsers());
		});
		
		
	}
}
