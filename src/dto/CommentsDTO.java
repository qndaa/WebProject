package dto;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.ArrayList;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectMapper.DefaultTyping;

import beans.CommentForApartment;

public class CommentsDTO {

	
	private ArrayList<CommentForApartment> comments = new ArrayList<CommentForApartment>();
	
	public CommentsDTO() {
		
	}
	
	
	
	public ArrayList<CommentForApartment> getComments() {
		return comments;
	}




	public void setComments(ArrayList<CommentForApartment> comments) {
		this.comments = comments;
	}




	public void saveFile() {
		
		ObjectMapper mapper = new ObjectMapper();
		mapper.enableDefaultTyping(DefaultTyping.NON_FINAL);
		
		try {
				
			mapper.writerWithDefaultPrettyPrinter().writeValue(new File("comments.json"), comments);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	
	
	public void loadFile() {

		try {
			ObjectMapper maper = new ObjectMapper();
			maper.enableDefaultTyping(DefaultTyping.NON_FINAL);
			InputStream is = new FileInputStream(new File("comments.json"));
			TypeReference<ArrayList<CommentForApartment>> typeReference = new TypeReference<ArrayList<CommentForApartment>>() {
			};
			
			comments = maper.readValue(is, typeReference);
			
			is.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	
	
}
