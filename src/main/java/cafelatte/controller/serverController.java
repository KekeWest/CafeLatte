package cafelatte.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import cafelatte.domain.Server;
import cafelatte.service.ServerService;


@RestController
@RequestMapping("api/servers")
public class serverController {

	@Autowired
	protected ServerService serverService;

	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Server addServer(@RequestBody Server server) {
		return serverService.create(server);
	}

}
