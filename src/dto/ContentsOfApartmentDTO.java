package dto;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectMapper.DefaultTyping;

import beans.ContentOfApartment;


public class ContentsOfApartmentDTO {
	
	private ArrayList<ContentOfApartment> contentsOfApartment = new ArrayList<ContentOfApartment>();
	
	public ContentsOfApartmentDTO() {
		
	}

	public ArrayList<ContentOfApartment> getContentsOfApartment() {
		return contentsOfApartment;
	}

	public void setContentsOfApartment(ArrayList<ContentOfApartment> contentsOfApartment) {
		this.contentsOfApartment = contentsOfApartment;
	}
	
	public void saveFile() {
		ObjectMapper mapper = new ObjectMapper();
		mapper.enableDefaultTyping(DefaultTyping.NON_FINAL);
			
		try {
			mapper.writerWithDefaultPrettyPrinter().writeValue(new File("contentsOfApartment.json"), contentsOfApartment);	
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		
	}
	
	
	
	public void loadFile() {

		try {
			ObjectMapper maper = new ObjectMapper();
			maper.enableDefaultTyping(DefaultTyping.NON_FINAL);
			
			InputStream is = new FileInputStream(new File("contentsOfApartment.json"));
			TypeReference<ArrayList<ContentOfApartment>> typeReference = new TypeReference<ArrayList<ContentOfApartment>>() {
			};
			
			contentsOfApartment = maper.readValue(is, typeReference);
			
			is.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		
	}
	
	
	public void deleteContentsOfApartmentById(int id) throws IOException {
		for(ContentOfApartment item : contentsOfApartment) {
			if(item.getId() == id) {
				contentsOfApartment.remove(item);				
				saveFile();
				return;
			}
		}
		
	}
	
	public long getMaxId() {
		return (contentsOfApartment.isEmpty()) ? 0 : contentsOfApartment.get(contentsOfApartment.size()-1).getId();
	}

	public void addContentsOfApartment(String name, String path) {
		contentsOfApartment.add(new ContentOfApartment(getMaxId()+1, name, path));
		saveFile();
	}
	
	

}
