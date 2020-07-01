package beans;

import java.util.Date;

import enums.StatusReservation;



public class Reservation {

	private Apartment reservedApartment;
	private Date startTime;
	private int numberOfNights;
	private double price;
	private String message;
	private Guest guest;
	private StatusReservation statusReseravation;
	
	
	public Reservation() {
		
	}
	public Reservation(Apartment reservedApartment, Date startTime, int numberOfNights, double price, String message,
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
	
	
	public Apartment getReservedApartment() {
		return reservedApartment;
	}

	public void setReservedApartment(Apartment reservedApartment) {
		this.reservedApartment = reservedApartment;
	}

	public Date getStartTime() {
		return startTime;
	}

	public void setStartTime(Date startTime) {
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


	
	
}
