package beans;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

public class CommentForApartment {
	
	
	public Guest guest;
	
	@JsonIgnoreProperties(value = {"comments"})
	public Apartment apartment;
	
	public String text;
	public int mark;
	
	
	
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
	
	
	
	
}
