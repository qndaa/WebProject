package dto;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Date;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectMapper.DefaultTyping;

import beans.Apartment;
import beans.Host;
import beans.Location;
import beans.User;
import enums.StatusApartment;
import enums.TypeOfApartment;
import sun.net.www.protocol.http.HttpURLConnection.TunnelState;

public class ApartmentDTO {

	private ArrayList<Apartment> appartment = new ArrayList<Apartment>();

	public ApartmentDTO() {
		super();
	}
	
	
	
	public void saveFile() {
		
		ObjectMapper mapper = new ObjectMapper();
		mapper.enableDefaultTyping(DefaultTyping.NON_FINAL);
		
		try {
			Apartment a = new Apartment(TypeOfApartment.ROOM,5,4,new Location(),new Host(),200,new Date(), new Date(),StatusApartment.ACTIVE );
			appartment.add(a);
			
			mapper.writerWithDefaultPrettyPrinter().writeValue(new File("appartment.json"), appartment);
			
		} catch (Exception e) {
			// TODO: handle exception
		}
		
	}
	
	
	
	public void loadFile() {

		try {
			ObjectMapper maper = new ObjectMapper();
			maper.enableDefaultTyping(DefaultTyping.NON_FINAL);
			InputStream is = new FileInputStream(new File("appartment.json"));
			TypeReference<ArrayList<Apartment>> typeReference = new TypeReference<ArrayList<Apartment>>() {
			};
			
			appartment = maper.readValue(is, typeReference);
			
			is.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}



	public ArrayList<Apartment> getAppartment() {
		return appartment;
	}



	public void setAppartment(ArrayList<Apartment> appartment) {
		this.appartment = appartment;
	}
	
	
	
	
	
	
}
