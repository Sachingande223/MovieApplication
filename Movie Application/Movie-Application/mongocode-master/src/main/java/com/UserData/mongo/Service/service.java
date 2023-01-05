package com.UserData.mongo.Service;

import com.UserData.mongo.Model.FavoriteMovie;

import java.util.List;
import java.util.Optional;

public interface service {
    FavoriteMovie addorUpdateUserMovie(FavoriteMovie user);
    List<FavoriteMovie> getAllMovies();
    void delete(int id);
    Optional<FavoriteMovie> findByMId(int Id);
    List<FavoriteMovie> findByUname(String uname);
    FavoriteMovie deleteFavById(int id);
}
