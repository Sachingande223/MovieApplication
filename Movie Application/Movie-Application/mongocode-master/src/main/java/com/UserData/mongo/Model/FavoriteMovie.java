package com.UserData.mongo.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
/*It is used to create a collection in mongo database*/
@Document(collection = "favorites")
public class FavoriteMovie {
    @Id  /*It acts as primary key*/
    private int id;
    private String poster_path;
    private String name;
    private String release_date;
    private String desc;
    private String uname;

    public FavoriteMovie() {
    }

    public FavoriteMovie(int id, String poster_path, String name, String release_date, String desc, String uname) {
        this.id = id;
        this.poster_path = poster_path;
        this.name = name;
        this.release_date = release_date;
        this.desc = desc;
        this.uname = uname;
    }

    public int getId() {
        return id;
    }

    public String getPoster_path() {
        return poster_path;
    }

    public String getName() {
        return name;
    }

    public String getRelease_date() {
        return release_date;
    }

    public String getDesc() {
        return desc;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setPoster_path(String poster_path) {
        this.poster_path = poster_path;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setRelease_date(String release_date) {
        this.release_date = release_date;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String getUname() {
        return uname;
    }

    public void setUname(String uname) {
        this.uname = uname;
    }
}
