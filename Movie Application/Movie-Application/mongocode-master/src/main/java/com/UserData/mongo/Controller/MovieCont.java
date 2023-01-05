package com.UserData.mongo.Controller;

import com.UserData.mongo.Model.FavoriteMovie;
import com.UserData.mongo.Service.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
/*It is used to create restful web services using spring mvc
* It takes care of mapping reuests data to the defined request handler method.*/
@RestController

//It is a security concept that allows restricting the resources implemented in web browsers.
@CrossOrigin("*")
public class MovieCont {
    private final service myser;
    @Autowired
    public MovieCont(service myser) {
        this.myser = myser;
    }

    @PostMapping("/Movie")
    public FavoriteMovie add (@RequestBody FavoriteMovie movie){
        return myser.addorUpdateUserMovie(movie);
    }
    @GetMapping("/Movie")
    public List<FavoriteMovie> getall(){
        return myser.getAllMovies();
    }

    @GetMapping("/Movie/{id}")
    public FavoriteMovie getById(@PathVariable int id){
        return myser.findByMId(id).get();
    }
    @DeleteMapping("/Movie/{id}")
    public void delete(@PathVariable int id){
        myser.delete(id);
    }

    @GetMapping("/getFavorite/{uname}")
    List<FavoriteMovie> findByUname(@PathVariable String uname){
        return myser.findByUname(uname);
    }
    @DeleteMapping("/deleteFavorite/{id}")
    public ResponseEntity<FavoriteMovie> getFavoriteMovies(@PathVariable("id") int id)
    {
        return new ResponseEntity<FavoriteMovie>(myser.deleteFavById(id), HttpStatus.OK);
    }
}
