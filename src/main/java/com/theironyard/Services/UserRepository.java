package com.theironyard.Services;

import com.theironyard.entities.Dog;
import com.theironyard.entities.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by jonathangunnells on 7/7/16.
 */
public interface UserRepository extends CrudRepository<User, Integer> {


    @Query("SELECT r from Dog r WHERE r. LIKE ?1%")
    public Iterable<Dog> searchLocation(String location);
}
