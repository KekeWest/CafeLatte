package com.keke;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.web.WebAppConfiguration;

import cafelatte.CafeLatteApplication;

import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = CafeLatteApplication.class)
@WebAppConfiguration
public class CafeLatteApplicationTests {

	@Test
	public void contextLoads() {
	}

}
