package beans;

import enums.TypeOfUser;

public class Administrator extends User {

	public Administrator() {
		super();
		
	}

	public Administrator(String userName, String password, String name, String surname, String gender,
			TypeOfUser typeOfUser) {
		super(userName, password, name, surname, gender, typeOfUser);
		
	}

	
	
	
}
