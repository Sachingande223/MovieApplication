package com.stackroute.springjwt.repository;

import java.util.Optional;

import com.stackroute.springjwt.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
/*It is used to perform CRUD operations */
@Repository
public interface UserRepository extends JpaRepository<User, Long>{

	User findByEmail(String email);
	Optional<User> findByUsername(String username);

	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);
}
