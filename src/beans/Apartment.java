package beans;

import java.util.ArrayList;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import enums.StatusApartment;
import enums.TypeOfApartment;
@JsonIdentityInfo( generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Apartment {
	
	public int id;

	private TypeOfApartment typeOfApartment;
	private int numberOfRoom;
	private int numberOfGuests;
	
	private Location location;
	private ArrayList<String> busyDays = new ArrayList<String>();

	@JsonIgnoreProperties(value = {"aparment"})
	@JsonBackReference
	private Host host = new Host();
	private String idHost;
	@JsonIgnoreProperties(value = {"apartment"})
	private ArrayList<CommentForApartment> comments = new ArrayList<CommentForApartment>();
	
	
	
	
	private ArrayList<String> urlImages = new ArrayList<String>();
	private double pricePerNight;
	
	private Date checkInTime;
	private Date checkOutTime;
	
	private StatusApartment status;
	
	@JsonIgnore
	private ArrayList<ContentOfApartment> content = new ArrayList<ContentOfApartment>();
	private ArrayList<Integer> idContetn = new ArrayList<Integer>();
	

	@JsonIgnoreProperties(value = {"reservedApartment"})
	@JsonIgnore
	private ArrayList<Reservation> reservations = new ArrayList<Reservation>();
	
	private boolean isActive = true;
	
	public Apartment() {
		
	}

	public Apartment(TypeOfApartment typeOfApartment, int numberOfRoom, int numberOfGuests, Location location,
			String host, double pricePerNight, Date checkInTime, Date checkOutTime,
			StatusApartment status) {
		super();
		this.typeOfApartment = typeOfApartment;
		this.numberOfRoom = numberOfRoom;
		this.numberOfGuests = numberOfGuests;
		this.location = location;
		this.host = null;
		this.idHost = host;
		this.pricePerNight = pricePerNight;
		this.checkInTime = checkInTime;
		this.checkOutTime = checkOutTime;
		this.status = status;
		this.id=-1;
		
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
	
	public int getId() {
		return id;
	}




	public void setId(int id) {
		this.id = id;
	}



	public boolean isActive() {
		return isActive;
	}



	public void setActive(boolean isActivce) {
		this.isActive = isActivce;
	}



	public String getIdHost() {
		return idHost;
	}



	public void setIdHost(String idHost) {
		this.idHost = idHost;
	}

	public ArrayList<Integer> getIdContetn() {
		return idContetn;
	}

	public void setIdContetn(ArrayList<Integer> idContetn) {
		this.idContetn = idContetn;
	}

	public ArrayList<String> getBusyDays() {
		return busyDays;
	}

	public void setBusyDays(ArrayList<String> busyDays) {
		this.busyDays = busyDays;
	}

	@Override
	public String toString() {
		return "Apartment [id=" + id + ", typeOfApartment=" + typeOfApartment + ", numberOfRoom=" + numberOfRoom
				+ ", numberOfGuests=" + numberOfGuests + ", location=" + location + ", busyDays=" + busyDays + ", host="
				+ host + ", idHost=" + idHost + ", comments=" + comments + ", urlImages=" + urlImages
				+ ", pricePerNight=" + pricePerNight + ", checkInTime=" + checkInTime + ", checkOutTime=" + checkOutTime
				+ ", status=" + status + ", content=" + content + ", idContetn=" + idContetn + ", reservations="
				+ reservations + ", isActive=" + isActive + "]";
	}

	
	
	
}
