package dto;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.ArrayList;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectMapper.DefaultTyping;


public class HolidaysDTO {
	
	private ArrayList<String> holidays = new ArrayList<String>();
	
	public HolidaysDTO() {
		
		
	}

	public ArrayList<String> getHolidays() {
		return holidays;
	}

	public void setHolidays(ArrayList<String> holidays) {
		this.holidays = holidays;
	}
	
public void saveFile() {
		
		ObjectMapper mapper = new ObjectMapper();
		mapper.enableDefaultTyping(DefaultTyping.NON_FINAL);
		
		try {
				
			mapper.writerWithDefaultPrettyPrinter().writeValue(new File("holidays.json"), holidays);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	
	
	public void loadFile() {

		try {
			ObjectMapper maper = new ObjectMapper();
			maper.enableDefaultTyping(DefaultTyping.NON_FINAL);
			InputStream is = new FileInputStream(new File("holidays.json"));
			TypeReference<ArrayList<String>> typeReference = new TypeReference<ArrayList<String>>() {
			};
			
			holidays = maper.readValue(is, typeReference);
			
			is.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	

}
