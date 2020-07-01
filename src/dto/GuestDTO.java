package dto;

import java.io.FileWriter;
import java.util.ArrayList;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;


import beans.Guest;
import enums.TypeOfUser;

public class GuestDTO {
	
	private ArrayList<Guest> guests;
	
	
	
	
	public GuestDTO() {
			guests = new ArrayList<Guest>();
	}
	
	
	
	
	public void LoadGuest() {
		
	}
	
	
	public void saveGUest() {
		JsonArray jsonArray =  new JsonArray();
		Guest gost = new Guest("pera132", "pera123", "Pera", "Peric","Muski", TypeOfUser.GUEST);
		
		JsonObject obj = new JsonObject();
		JsonObject objItem = new JsonObject();
		objItem.addProperty("username",gost.getUserName());
		objItem.addProperty("password", gost.getPassword());
		objItem.addProperty("name", gost.getName());
		objItem.addProperty("surname",gost.getSurname());
		objItem.addProperty("gender",gost.getGender());
		objItem.addProperty("typeOfUser", gost.getTypeOfUser().toString());
		
		obj.add("guest",objItem);
		jsonArray.add(obj);
	
		try(FileWriter file = new FileWriter("guest.json")){
			file.write(jsonArray.toString());
	
		}catch (Exception e) {
			System.out.println(e);
		}
		
	}
	
	
	
	
	
	
}
