package beans;

import java.util.ArrayList;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import enums.TypeOfUser;

public class Host extends User {
	
	@JsonIgnoreProperties(value = {"host"})
	@JsonBackReference
	private ArrayList<Apartment> aparment = new ArrayList<Apartment>();
	
	private ArrayList<Integer> idApartment = new ArrayList<Integer>();
	
	public Host() {
		
	}


	public Host(String username, String password, String name, String surname, String gender, TypeOfUser typeOfUser) {
		super(username, password, name, surname, gender, typeOfUser);
		// TODO Auto-generated constructor stub
	}


	public ArrayList<Apartment> getAparment() {
		return aparment;
	}


	public void setAparment(ArrayList<Apartment> aparment) {
		this.aparment = aparment;
	}


	public ArrayList<Integer> getIdApartment() {
		return idApartment;
	}


	public void setIdApartment(ArrayList<Integer> idApartment) {
		this.idApartment = idApartment;
	}
	
	
	
	
	
	

}
