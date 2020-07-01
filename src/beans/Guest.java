package beans;

import java.util.ArrayList;

import enums.TypeOfUser;

public class Guest  extends User{
	public ArrayList<Apartment> rentedApartment;
	//public ArrayList<String> resevration;

	public Guest() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Guest(String username, String password, String name, String surname, String gender, TypeOfUser typeOfUser) {
		super(username, password, name, surname, gender, typeOfUser);
		// TODO Auto-generated constructor stub
	}
	
	

}
