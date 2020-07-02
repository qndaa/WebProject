package dto;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.ArrayList;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.*;
import beans.Administrator;
import enums.TypeOfUser;


public class AdministratorDTO {

	private ArrayList<Administrator> administrators = new ArrayList<Administrator>();

	public AdministratorDTO() {
		
	}
	
	
	
	public void loadAdministrator() {
		try {
			ObjectMapper maper = new ObjectMapper();
			InputStream is = new FileInputStream(new File("administrator.json"));
			TypeReference<ArrayList<Administrator>> typeReference = new TypeReference<ArrayList<Administrator>>() {
			};
			administrators = maper.readValue(is, typeReference);
			
			is.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	}


	public void saveAdministrator() {
		ObjectMapper mapper = new ObjectMapper();
		
		
		try {
	
			mapper.writerWithDefaultPrettyPrinter().writeValue(new File("administrator.json"), administrators);
			
		} catch (Exception e) {
			// TODO: handle exception
		}
			
	}
	
	
	public ArrayList<Administrator> getAdministrators() {
		return administrators;
	}



	public void setAdministrators(ArrayList<Administrator> administrators) {
		this.administrators = administrators;
	}
	
	
	
}
