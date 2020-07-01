package dto;

import java.io.FileReader;
import java.io.InputStream;
import java.util.ArrayList;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import beans.Administrator;
import jdk.nashorn.api.scripting.JSObject;

public class AdministratorDTO {

	private ArrayList<Administrator> administrators;

	public AdministratorDTO() {
		administrators = new ArrayList<Administrator>();
	}
	
	
	
	public void loadAdministrator() {
	
	}
	
	/*
	public void saveAdministrator() {
		JsonArray jsonArray =  new JsonArray();
		Administrator gost = new Administrator("qundaa", "qundaa123", "Djordjije", "Kundacina","Muski", TypeOfUser.ADMINISTRATOR);
		Administrator gost2 = new Administrator("simke", "simke98", "Aca", "Simic","Muski", TypeOfUser.ADMINISTRATOR);
		JsonObject obj = new JsonObject();
		JsonObject objItem = new JsonObject();
		
		objItem.addProperty("username",gost.getUserName());
		objItem.addProperty("password", gost.getPassword());
		objItem.addProperty("name", gost.getName());
		objItem.addProperty("surname",gost.getSurname());
		objItem.addProperty("gender",gost.getGender());
		objItem.addProperty("typeOfUser", gost.getTypeOfUser().toString());
		obj.add("guest",objItem);
		
		
		JsonObject obj1 = new JsonObject();
		JsonObject objItem1 = new JsonObject();
		objItem1.addProperty("username",gost2.getUserName());
		objItem1.addProperty("password", gost2.getPassword());
		objItem1.addProperty("name", gost2.getName());
		objItem1.addProperty("surname",gost2.getSurname());
		objItem1.addProperty("gender",gost2.getGender());
		objItem1.addProperty("typeOfUser", gost2.getTypeOfUser().toString());
		obj1.add("guest",objItem1);
		
		
		
		
		jsonArray.add(obj);
		jsonArray.add(obj1);
		
		try(FileWriter file = new FileWriter("administrator.json")){
			file.write(jsonArray.toString());
			
			
		}catch (Exception e) {
			System.out.println(e);
		}
		
		
	}
	*/
	
	
	
	
	
}
