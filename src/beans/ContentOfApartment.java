package beans;

public class ContentOfApartment {
	
	private long id;
	private String name;
	private String imagePath;
	
	public ContentOfApartment() {
		
	}
	
	public ContentOfApartment(long id, String name, String imagePath) {
		super();
		this.id = id;
		this.name = name;
		this.imagePath = imagePath;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}
	
	

}
