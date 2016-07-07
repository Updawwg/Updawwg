package com.theironyard.Services;

import com.theironyard.entities.Dog;
import org.springframework.data.repository.CrudRepository;


public interface DogRepository extends CrudRepository<Dog, Integer> {
}
