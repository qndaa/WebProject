package beans;

import java.io.File;

import enums.TypeOfUser;


public class User  {
	
	
	private String username;
	private String password;
	private String name;
	private String surname;
	private String gender;
	private String imagePath;
	private TypeOfUser typeOfUser;
	private Boolean isBlocekd;
	
	public User() {
		super();
	}
	
	
	public User(String username, String password, String name, String surname, String gender, TypeOfUser typeOfUser) {
		super();
		this.username = username;
		this.password = password;
		this.name = name;
		this.surname = surname;
		this.gender = gender;
		this.setImagePath("/data/profile/qndaa.jpg");
		this.typeOfUser = typeOfUser;
		this.isBlocekd = false;
	}

	public String getUserName() {
		return username;
	}

	public void setUserName(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public TypeOfUser getTypeOfUser() {
		return typeOfUser;
	}

	public void setTypeOfUser(TypeOfUser typeOfUser) {
		this.typeOfUser = typeOfUser;
	}


	


	@Override
	public String toString() {
		return "User [username=" + username + ", password=" + password + ", name=" + name + ", surname=" + surname
				+ ", gender=" + gender + ", imagePath=" + imagePath + ", typeOfUser=" + typeOfUser + ", isBlocekd="
				+ isBlocekd + "]";
	}


	public String getImagePath() {
		return imagePath;
	}


	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}


	public Boolean getIsBlocekd() {
		return isBlocekd;
	}


	public void setIsBlocekd(Boolean isBlocekd) {
		this.isBlocekd = isBlocekd;
	}


	
	
	
	
	
	
}
