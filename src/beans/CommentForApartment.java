package beans;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import enums.StatusOfComment;

public class CommentForApartment {
	
	@JsonIgnore
	public Guest guest = new Guest();
	
	public String idGuest;
	
	@JsonIgnoreProperties(value = {"comments"})
	@JsonBackReference
	public Apartment apartment = new Apartment();
	
	
	public int idApartment;
	
	public String text;
	public int mark;
	
	public StatusOfComment status;
	
	public CommentForApartment() {
		// TODO Auto-generated constructor stub
	}



	public CommentForApartment(Guest guest, Apartment apartment, String text, int mark) {
		super();
		this.guest = guest;
		this.apartment = apartment;
		this.text = text;
		this.mark = mark;
	}
	
	public CommentForApartment(String idGuest, int idApartment, String text, int mark, StatusOfComment status) {
		super();
		this.idGuest = idGuest;
		this.idApartment = idApartment;
		this.text = text;
		this.mark = mark;
		this.status = status;
	}


	
	
	
	public String getIdGuest() {
		return idGuest;
	}



	public void setIdGuest(String idGuest) {
		this.idGuest = idGuest;
	}



	public int getIdApartment() {
		return idApartment;
	}



	public void setIdApartment(int idApartment) {
		this.idApartment = idApartment;
	}



	public StatusOfComment getStatus() {
		return status;
	}



	public void setStatus(StatusOfComment status) {
		this.status = status;
	}



	public Guest getGuest() {
		return guest;
	}



	public void setGuest(Guest guest) {
		this.guest = guest;
	}



	public Apartment getApartment() {
		return apartment;
	}



	public void setApartment(Apartment apartment) {
		this.apartment = apartment;
	}



	public String getText() {
		return text;
	}



	public void setText(String text) {
		this.text = text;
	}



	public int getMark() {
		return mark;
	}



	public void setMark(int mark) {
		this.mark = mark;
	}



	@Override
	public String toString() {
		return "CommentForApartment [guest=" + guest + ", idGuest=" + idGuest + ", apartment=" + apartment
				+ ", idApartment=" + idApartment + ", text=" + text + ", mark=" + mark + ", status=" + status + "]";
	}
	
	
	
	
}
