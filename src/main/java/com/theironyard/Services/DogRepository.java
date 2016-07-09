package com.theironyard.services;

import com.theironyard.entities.Dog;
import com.theironyard.entities.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;


public interface DogRepository extends CrudRepository<Dog, Integer> {
    public Iterable<Dog> findByName(String name);
    public Iterable<Dog> findByBreed(String breed);
    public Iterable<Dog> findByUser(User user);


  //  @Query("SELECT r from Dog r WHERE r.dog LIKE ?1%")
   // public Iterable<Dog> searchDog(String dog);


}
