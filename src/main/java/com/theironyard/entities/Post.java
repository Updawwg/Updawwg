package com.theironyard.entities;

import javax.persistence.*;

/**
 * Created by Ben on 7/7/16.
 */
@Entity
@Table(name="posts")
public class Post {
    @Id
    @GeneratedValue
    int id;

    @Column(nullable=false)
    int replyId;

    @Column(nullable=false)
    String message;

    @ManyToOne
    User user;

    @ManyToOne
    Dog dog;

    public Post() {
    }

    public Post(int replyId, String message, User user, Dog dog) {
        this.replyId = replyId;
        this.message = message;
        this.user = user;
        this.dog = dog;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getReplyId() {
        return replyId;
    }

    public void setReplyId(int replyId) {
        this.replyId = replyId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Dog getDog() {
        return dog;
    }

    public void setDog(Dog dog) {
        this.dog = dog;
    }
}
