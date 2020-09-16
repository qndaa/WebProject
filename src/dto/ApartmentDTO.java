package dto;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Date;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectMapper.DefaultTyping;

import beans.Address;
import beans.Apartment;
import beans.Host;
import beans.Location;
import beans.User;
import enums.StatusApartment;
import enums.TypeOfApartment;
import enums.TypeOfUser;
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
			/*
			Apartment a = new Apartment(TypeOfApartment.ROOM,5,8,new Location(1, 2,new Address("Petkova",5,"Beograd",11000)),new Host("koki123","koki123","Koki","Koki","Muski",TypeOfUser.HOST),200,new Date(), new Date(),StatusApartment.ACTIVE );
			Apartment a2 = new Apartment(TypeOfApartment.ROOM,2,4,new Location(1, 2,new Address("Perina",2,"Novi Sad",21000)),new Host("koki123","koki123","Koki","Koki","Muski",TypeOfUser.HOST),300,new Date(), new Date(),StatusApartment.ACTIVE );
			Apartment a3 = new Apartment(TypeOfApartment.ROOM,3,6,new Location(1, 2,new Address("Mihajla",3,"Sabac",15000)),new Host("koki123","koki123","Koki","Koki","Muski",TypeOfUser.HOST),400,new Date(), new Date(),StatusApartment.ACTIVE );
			Apartment a4 = new Apartment(TypeOfApartment.ROOM,1,2,new Location(1, 2,new Address("Koste",1,"Beograd",11000)),new Host("koki123","koki123","Koki","Koki","Muski",TypeOfUser.HOST),500,new Date(), new Date(),StatusApartment.ACTIVE );
			Apartment a5 = new Apartment(TypeOfApartment.ROOM,5,10,new Location(1, 2,new Address("Petkova",15,"Beograd",11000)),new Host("koki123","koki123","Koki","Koki","Muski",TypeOfUser.HOST),600,new Date(), new Date(),StatusApartment.ACTIVE );
			
			appartment.add(a);
			appartment.add(a2);
			appartment.add(a3);
			appartment.add(a4);
			appartment.add(a5);
			*/
			
			mapper.writerWithDefaultPrettyPrinter().writeValue(new File("appartment.json"), appartment);
			
		} catch (Exception e) {
			e.printStackTrace();
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
	
	public ArrayList<Apartment> getAllActiveApartment (){
		ArrayList<Apartment> activeApartment = new ArrayList<Apartment>();
		for (Apartment apartment : appartment) {
			if(apartment.getStatus() == StatusApartment.ACTIVE) {
				activeApartment.add(apartment);
			}
		}
		
		
		return activeApartment;
	}
	
	
	public Apartment getApartmentById(int id) {
		for(Apartment a : appartment) {
			if(a.id == id) {
				return a;
			}
		}
		
		return null;
	}
	
	
	//aktivni
	public ArrayList<Apartment> getAllApartmentFromHost(User user){
		
		ArrayList<Apartment> a = new ArrayList<Apartment>();
		for (Apartment ap : appartment) {
			if(ap.getIdHost().equals(user.getUserName()) && ap.getStatus() == StatusApartment.ACTIVE) {
				a.add(ap);
			}
		}
		
		
		return a;
	}
	
	
	public ArrayList<Apartment> getAllPassiveApartment(User user){
		
		ArrayList<Apartment> a = new ArrayList<Apartment>();
		for (Apartment ap : appartment) {
			if(ap.getIdHost().equals(user.getUserName()) && ap.getStatus() == StatusApartment.PASSIVE) {
				a.add(ap);
			}
		}
		
		
		return a;
	}



	public void addImagePath(int id, String path) {
		Apartment apartment = getApartmentById(id);
		apartment.getUrlImages().add(path);
		
	}



	public void delete(int id) {
		for(Apartment apartment : appartment) {
			if(id == apartment.getId()) {
				apartment.setActive(false);
				saveFile();
				return;
			}
		}
		
	}



	public void approveApartment(int id) {
		for(Apartment apartment : appartment) {
			if(id == apartment.getId()) {
				apartment.setStatus(StatusApartment.ACTIVE);;
				saveFile();
				return;
			}
		}
		
	}
	
	
	
}
