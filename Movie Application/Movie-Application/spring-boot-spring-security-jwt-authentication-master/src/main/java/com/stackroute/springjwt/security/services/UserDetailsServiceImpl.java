package com.stackroute.springjwt.security.services;
import com.stackroute.springjwt.repository.UserRepository;
import com.stackroute.springjwt.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/*It is used to write business logic*/
@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	/* It injects object dependency implicitly*/
	@Autowired
	UserRepository userRepository;

//This method returns a UserDetails object that Spring Security can use for authentication and validation.
	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findByUsername(username)
				.orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));

		return UserDetailsImpl.build(user);
	}

}
