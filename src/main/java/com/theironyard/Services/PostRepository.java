package com.theironyard.services;

import com.theironyard.entities.Post;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by jonathangunnells on 7/7/16.
 */
public interface PostRepository extends CrudRepository<Post, Integer> {
}
