package beans;

import java.util.ArrayList;
import java.util.Date;

import enums.StatusApartment;
import enums.TypeOfApartment;

public class Apartment {
	
	private TypeOfApartment typeOfApartment;
	private int numberOfRoom;
	private int numberOfGuests;
	private Location location;
	
	private ArrayList<Date> releaseDates;
	
	private Host host;
	private ArrayList<CommentForApartment> comments;
	private ArrayList<String> urlImages;
	private double pricePerNight;
	
	private Date checkInTime;
	private Date checkOutTime;
	
	private StatusApartment status;
	private ArrayList<ContentOfApartment> content;
	private ArrayList<Reservation> reservations;
	
	
	
	public Apartment() {
		
	}



	public TypeOfApartment getTypeOfApartment() {
		return typeOfApartment;
	}



	public void setTypeOfApartment(TypeOfApartment typeOfApartment) {
		this.typeOfApartment = typeOfApartment;
	}



	public int getNumberOfRoom() {
		return numberOfRoom;
	}



	public void setNumberOfRoom(int numberOfRoom) {
		this.numberOfRoom = numberOfRoom;
	}



	public int getNumberOfGuests() {
		return numberOfGuests;
	}



	public void setNumberOfGuests(int numberOfGuests) {
		this.numberOfGuests = numberOfGuests;
	}



	public Location getLocation() {
		return location;
	}



	public void setLocation(Location location) {
		this.location = location;
	}



	public ArrayList<Date> getReleaseDates() {
		return releaseDates;
	}



	public void setReleaseDates(ArrayList<Date> releaseDates) {
		this.releaseDates = releaseDates;
	}



	public Host getHost() {
		return host;
	}



	public void setHost(Host host) {
		this.host = host;
	}



	public ArrayList<CommentForApartment> getComments() {
		return comments;
	}



	public void setComments(ArrayList<CommentForApartment> comments) {
		this.comments = comments;
	}



	public ArrayList<String> getUrlImages() {
		return urlImages;
	}



	public void setUrlImages(ArrayList<String> urlImages) {
		this.urlImages = urlImages;
	}



	public double getPricePerNight() {
		return pricePerNight;
	}



	public void setPricePerNight(double pricePerNight) {
		this.pricePerNight = pricePerNight;
	}



	public Date getCheckInTime() {
		return checkInTime;
	}



	public void setCheckInTime(Date checkInTime) {
		this.checkInTime = checkInTime;
	}



	public Date getCheckOutTime() {
		return checkOutTime;
	}



	public void setCheckOutTime(Date checkOutTime) {
		this.checkOutTime = checkOutTime;
	}



	public StatusApartment getStatus() {
		return status;
	}



	public void setStatus(StatusApartment status) {
		this.status = status;
	}



	public ArrayList<ContentOfApartment> getContent() {
		return content;
	}



	public void setContent(ArrayList<ContentOfApartment> content) {
		this.content = content;
	}



	public ArrayList<Reservation> getReservations() {
		return reservations;
	}



	public void setReservations(ArrayList<Reservation> reservations) {
		this.reservations = reservations;
	}
	
	
	
	
}
