package com.UserData.mongo.Service;

import com.UserData.mongo.Model.FavoriteMovie;
import com.UserData.mongo.Repository.FavoriteRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
/*It is used to perform business logic*/
@Service
public class serviceImp implements service{
    private FavoriteRepo myrepo;

    //It injects object dependency implicitly
    @Autowired
    public serviceImp(FavoriteRepo myrepo) {
        this.myrepo = myrepo;
    }
    @Override
    public FavoriteMovie addorUpdateUserMovie(FavoriteMovie movie){
        return myrepo.save(movie);
    }

    @Override
    public List<FavoriteMovie> getAllMovies() {
        return myrepo.findAll();
    }
    @Override
    public void delete(int id){
        myrepo.deleteById(id);
    }
    @Override
    public  Optional<FavoriteMovie> findByMId(int id){
        return myrepo.findById(id);
    }

    @Override
    public List<FavoriteMovie> findByUname(String uname) {
        return myrepo.findByUname(uname);
    }

    @Override
    public FavoriteMovie deleteFavById(int id) {
        FavoriteMovie movie=null;
        Optional optional=myrepo.findById(id);
        if(optional.isPresent()){
            movie=myrepo.findById(id).get();
            myrepo.deleteById(id);
        }
        return movie;
    }

}
