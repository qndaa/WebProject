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
import beans.Reservation;
import enums.StatusApartment;
import enums.TypeOfApartment;

public class ReservationDTO {

 public ArrayList<Reservation> reservation = new ArrayList<Reservation>();

 	public ReservationDTO() {
 		super();
 	}

 	
 	public void saveFile() {
 		ObjectMapper mapper = new ObjectMapper();
		mapper.enableDefaultTyping(DefaultTyping.NON_FINAL);
		
		try {

			mapper.writerWithDefaultPrettyPrinter().writeValue(new File("reservation.json"), reservation);
			
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
			
			reservation = maper.readValue(is, typeReference);
			
			is.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 	}
 	
 	
 	
 	
 	
	public ArrayList<Reservation> getReservation() {
		return reservation;
	}

	public void setReservation(ArrayList<Reservation> reservation) {
		this.reservation = reservation;
	}
	
	
 	
 	
 	
}
