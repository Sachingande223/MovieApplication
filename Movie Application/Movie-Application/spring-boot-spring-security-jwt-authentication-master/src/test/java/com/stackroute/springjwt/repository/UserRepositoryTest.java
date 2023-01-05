package com.stackroute.springjwt.repository;

import static org.assertj.core.api.Assertions.assertThat;

import com.stackroute.springjwt.models.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

import java.util.Optional;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(value = false)
public class UserRepositoryTest {
    @Autowired
    private UserRepository repository;
    @Autowired
    private TestEntityManager entityManager;
    @Test
    public void testFindUserByEmail(){
        String email = "shazad@gmail.com";
        User user= repository.findByEmail(email);
        assertThat(user).isNotNull();
    }
    @Test
    public void testFindUserByName(){
        String name = "sachin";
       Optional<User> user= repository.findByUsername(name);
        assertThat(user).isNotNull();
    }
    @Test
    public void testFindUserById(){
        Long id = Long.valueOf(1);
       Optional<User> user= repository.findById(id);
        assertThat(user).isNotNull();
    }
}



