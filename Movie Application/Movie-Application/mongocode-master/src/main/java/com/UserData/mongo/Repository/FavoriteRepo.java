package com.UserData.mongo.Repository;

import com.UserData.mongo.Model.FavoriteMovie;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
/*It is used to perform CRUD operations*/
@Repository
public interface FavoriteRepo extends MongoRepository<FavoriteMovie,Integer> {
    List<FavoriteMovie> findByUname(String uname);
}
