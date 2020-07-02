package beans;

import java.util.ArrayList;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonRootName;

import enums.TypeOfUser;


public class Guest extends User{

	
	public ArrayList<Apartment> rentedApartment = new ArrayList<Apartment>();
	
	@JsonIgnoreProperties(value = {"guest"})
	public ArrayList<Reservation> resevration;

	public Guest() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Guest(String username, String password, String name, String surname, String gender, TypeOfUser typeOfUser) {
		super(username, password, name, surname, gender, typeOfUser);
		// TODO Auto-generated constructor stub
	}
	

	

	public ArrayList<Apartment> getRentedApartment() {
		return rentedApartment;
	}

	public void setRentedApartment(ArrayList<Apartment> rentedApartment) {
		this.rentedApartment = rentedApartment;
	}

	public ArrayList<Reservation> getResevration() {
		return resevration;
	}

	public void setResevration(ArrayList<Reservation> resevration) {
		this.resevration = resevration;
	}

	
	
	
	
	
	
	

}
