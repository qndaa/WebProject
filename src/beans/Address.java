package beans;

public class Address {

	public String street;
	public int numberHouse;
	public String city;
	public int postNumber;
	
	
	public Address() {}
	
	public Address(String street, int numberHouse, String city, int postNumber) {
		super();
		this.street = street;
		this.numberHouse = numberHouse;
		this.city = city;
		this.postNumber = postNumber;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public int getNumberHouse() {
		return numberHouse;
	}

	public void setNumberHouse(int numberHouse) {
		this.numberHouse = numberHouse;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public int getPostNumber() {
		return postNumber;
	}

	public void setPostNumber(int postNumber) {
		this.postNumber = postNumber;
	}
	
	
}
