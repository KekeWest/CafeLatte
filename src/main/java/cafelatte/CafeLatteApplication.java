package cafelatte;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import lombok.Getter;

@SpringBootApplication
public class CafeLatteApplication {

	@Getter
	private static ApplicationContext context;

    public static void main(String[] args) {
    	CafeLatteApplication.context = SpringApplication.run(CafeLatteApplication.class, args);
    }
}
