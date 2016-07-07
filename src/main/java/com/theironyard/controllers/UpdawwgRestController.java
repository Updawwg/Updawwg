package com.theironyard.controllers;

import com.theironyard.entities.User;
import org.h2.tools.Server;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import java.sql.SQLException;

/**
 * Created by will on 7/7/16.
 */
@RestController
public class UpdawwgRestController {

//    @Autowired
//
//    @Autowired

    @PostConstruct
    public void init() throws SQLException {
        Server.createWebServer().start();
    }

//    @RequestMapping(path = "/users", method = RequestMethod.GET)
//    public Iterable<User> getUsers() {
//
//    }


    //@RequestMapping(path = "", method = RequestMethod.POST)

    //@RequestMapping(path = "", method = RequestMethod.GET)
    //@RequestMapping(path = "", method = RequestMethod.POST)



}
