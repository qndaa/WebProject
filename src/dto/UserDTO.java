package dto;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Date;

import javax.jws.soap.SOAPBinding.Use;

import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectMapper.DefaultTyping;

import beans.Address;
import beans.Administrator;
import beans.Apartment;
import beans.Guest;
import beans.Host;
import beans.Location;
import beans.User;
import enums.StatusApartment;
import enums.TypeOfApartment;
import enums.TypeOfUser;

public class UserDTO {

	ArrayList<User> users = new ArrayList<User>();

	public UserDTO() {
	}
	
	
	
	public void saveFile() {
		
		
		ObjectMapper mapper = new ObjectMapper();
		mapper.enableDefaultTyping(DefaultTyping.NON_FINAL);
		/*Administrator admin = new Administrator("simke98","simke1998","Aca","Simic","Muski", TypeOfUser.ADMINISTRATOR);
		Administrator admin2 = new Administrator("qndaa","qndaa123","Djordjije","Kundacina","Muski", TypeOfUser.ADMINISTRATOR);
	
		users.add(admin);
		users.add(admin2);
		*/
		
		try {
	
			mapper.writerWithDefaultPrettyPrinter().writeValue(new File("user.json"), users);
			
		} catch (Exception e) {
			// TODO: handle exception
		}
		
		
	}
	
	
	
	public void loadFile() {

		try {
			ObjectMapper maper = new ObjectMapper();
			maper.enableDefaultTyping(DefaultTyping.NON_FINAL);
			InputStream is = new FileInputStream(new File("user.json"));
			TypeReference<ArrayList<User>> typeReference = new TypeReference<ArrayList<User>>() {
			};
			
			users = maper.readValue(is, typeReference);
			
			is.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		
	}



	public ArrayList<User> getUsers() {
		return users;
	}



	public void setUsers(ArrayList<User> users) {
		this.users = users;
	}



	public User loginUser(String username, String password) {
		
		for (User user : users) {
			if(user.getUserName().equals(username) && user.getPassword().equals(password)) {
				return user;
			}
		}

		return null;	
	}
	
	
	
	
	
}
