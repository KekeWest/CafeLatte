package cafelatte.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import cafelatte.domain.Server;

public interface ServerRepository extends JpaRepository<Server, Integer> {

}
