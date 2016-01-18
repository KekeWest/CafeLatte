package cafelatte.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cafelatte.domain.Server;
import cafelatte.repository.ServerRepository;

@Service
@Transactional
public class ServerService {

	@Autowired
	protected ServerRepository serverRepository;

	public Server create(Server server) {
		return serverRepository.save(server);
	}

	public Server update(Server server) {
		return serverRepository.save(server);
	}

	public Server findOne(Integer id) {
		return serverRepository.findOne(id);
	}

}
