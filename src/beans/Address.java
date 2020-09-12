package beans;

public class Address {

	private String street;
	private int numberHouse;
	private String city;
	private int postNumber;
	private String country;
	
	
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
	
	

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	@Override
	public String toString() {
		return "Address [street=" + street + ", numberHouse=" + numberHouse + ", city=" + city + ", postNumber="
				+ postNumber + "]";
	}
	
	
	
}
