package dto;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Date;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectMapper.DefaultTyping;
import com.google.gson.JsonElement;

import beans.Apartment;
import beans.Host;
import beans.Location;
import beans.Reservation;
import enums.StatusApartment;
import enums.TypeOfApartment;

public class ReservationDTO {

 public ArrayList<Reservation> reservations = new ArrayList<Reservation>();

 	public ReservationDTO() {
 		super();
 	}

 	
 	public void saveFile() {
 		ObjectMapper mapper = new ObjectMapper();
		mapper.enableDefaultTyping(DefaultTyping.NON_FINAL);
		
		try {

			mapper.writerWithDefaultPrettyPrinter().writeValue(new File("reservation.json"), reservations);
			
		} catch (Exception e) {
			// TODO: handle exception
		}
 		
 		
 	}
 	
 	
 	public void loadFile() {
 		
 		try {
			ObjectMapper maper = new ObjectMapper();
			maper.enableDefaultTyping(DefaultTyping.NON_FINAL);
			InputStream is = new FileInputStream(new File("reservation.json"));
			TypeReference<ArrayList<Reservation>> typeReference = new TypeReference<ArrayList<Reservation>>() {
			};
			
			reservations = maper.readValue(is, typeReference);
			
			is.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 	}
 	
 	
 	
 	
 	
	public ArrayList<Reservation> getReservations() {
		return reservations;
	}

	public void setReservations(ArrayList<Reservation> reservations) {
		this.reservations = reservations;
	}


	public void add(Reservation reservation) {
		reservations.add(reservation);
	}


	
	
	
 	
 	
 	
}
