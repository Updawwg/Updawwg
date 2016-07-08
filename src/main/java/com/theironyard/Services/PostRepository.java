package com.theironyard.services;

import com.theironyard.entities.Dog;
import com.theironyard.entities.Post;
import com.theironyard.entities.User;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by jonathangunnells on 7/7/16.
 */
public interface PostRepository extends CrudRepository<Post, Integer> {
    public Iterable<Post> findByUser(User user);
    public Iterable<Post> findByDog(Dog dog);
    public Iterable<Post> findByUserAndDog(User user, Dog dog);
}
