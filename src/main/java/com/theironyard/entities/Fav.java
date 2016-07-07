package com.theironyard.entities;

import javax.persistence.*;

/**
 * Created by Ben on 7/7/16.
 */
@Entity
@Table(name="favs")
public class Fav {
    @Id
    @GeneratedValue
    int id;

    @ManyToMany
    Dog dog;

    @ManyToMany
    User user;

    public Fav() {
    }

    public Fav(Dog dog, User user) {
        this.dog = dog;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Dog getDog() {
        return dog;
    }

    public void setDog(Dog dog) {
        this.dog = dog;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
