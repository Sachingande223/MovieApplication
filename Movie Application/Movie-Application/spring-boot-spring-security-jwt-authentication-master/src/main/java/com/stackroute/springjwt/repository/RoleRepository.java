package com.stackroute.springjwt.repository;

import java.util.Optional;

import com.stackroute.springjwt.models.ERole;
import com.stackroute.springjwt.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
/*It is used to perform CRUD operations */
@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
}
