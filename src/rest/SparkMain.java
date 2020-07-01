package rest;

import static spark.Spark.get;
import static spark.Spark.port;
import static spark.Spark.staticFiles;

import java.io.File;



public class SparkMain {
	

	public static void main(String[] args) throws Exception {
		port(8080);
		
		staticFiles.externalLocation(new File("./static").getCanonicalPath()); 
		
		
		get("/test", (req, res) -> {
			return "Works";
		});
		
		
		
		
		
		
		
		
	}
}