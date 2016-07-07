package com.theironyard.entities;

import javax.persistence.*;

/**
 * Created by Ben on 7/7/16.
 */
@Entity
@Table(name="dogs")
public class Dog {

    @Id
    @GeneratedValue
    int id;

    @Column(nullable =false)
    String name;

    @Column(nullable =false)
    String image;

    @Column(nullable =false)
    String breed;

    @Column(nullable =false)
    int age;

    @Column(nullable =false)
    String description;


    public Dog() {
    }

    public Dog(String name, String image, String breed, int age, String description) {
        this.name = name;
        this.image = image;
        this.breed = breed;
        this.age = age;
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
