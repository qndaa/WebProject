package beans;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import enums.StatusReservation;



public class Reservation {
	
	private int idReservation;

	@JsonIgnoreProperties(value = "reservations")
	@JsonIgnore
	private Apartment reservedApartment = new Apartment();
	
	private int idApartment;
	
	@JsonIgnore
	private Host host = new Host();
	
	
	private String startTime;
	private int numberOfNights;
	private double price;
	private String message;
	
	@JsonIgnoreProperties(value = {"resevration"})
	@JsonIgnore
	private Guest guest = new Guest();
	
	private String idGuest;
	private StatusReservation statusReseravation;
	
	
	public Reservation() {
		
	}
	public Reservation(Apartment reservedApartment, String startTime, int numberOfNights, double price, String message,
			Guest guest, StatusReservation statusReseravation) {
		super();
		this.reservedApartment = reservedApartment;
		this.startTime = startTime;
		this.numberOfNights = numberOfNights;
		this.price = price;
		this.message = message;
		this.guest = guest;
		this.statusReseravation = statusReseravation;
	}
	
	
	public Reservation(int idReservation, int idApartment, String idGuest, String date, int numberDays, String message, double price,
			StatusReservation create) {
		this.setIdReservation(idReservation);
		this.idApartment = idApartment;
		this.idGuest = idGuest;
		this.numberOfNights = numberDays;
		this.message = message;
		this.startTime = date;
		this.price = price;
		this.statusReseravation = create;
	
	}
	
	
	
	
	public Host getHost() {
		return host;
	}
	public void setHost(Host host) {
		this.host = host;
	}
	public Apartment getReservedApartment() {
		return reservedApartment;
	}

	public void setReservedApartment(Apartment reservedApartment) {
		this.reservedApartment = reservedApartment;
	}

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public int getNumberOfNights() {
		return numberOfNights;
	}

	public void setNumberOfNights(int numberOfNights) {
		this.numberOfNights = numberOfNights;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Guest getGuest() {
		return guest;
	}

	public void setGuest(Guest guest) {
		this.guest = guest;
	}

	public StatusReservation getStatusReseravation() {
		return statusReseravation;
	}

	public void setStatusReseravation(StatusReservation statusReseravation) {
		this.statusReseravation = statusReseravation;
	}
	public int getIdApartment() {
		return idApartment;
	}
	public void setIdApartment(int idApartment) {
		this.idApartment = idApartment;
	}
	public String getIdGuest() {
		return idGuest;
	}
	public void setIdGuest(String idGuest) {
		this.idGuest = idGuest;
	}
	public int getIdReservation() {
		return idReservation;
	}
	public void setIdReservation(int idReservation) {
		this.idReservation = idReservation;
	}


	
	
}
