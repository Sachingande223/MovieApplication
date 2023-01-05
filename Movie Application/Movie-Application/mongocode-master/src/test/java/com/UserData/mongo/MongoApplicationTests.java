package com.UserData.mongo;

import com.UserData.mongo.Model.FavoriteMovie;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class MongoApplicationTests {

	@Test
	public void getMovieId() {
		FavoriteMovie favoriteMovie = new FavoriteMovie(1,"http://image1.com",
				"Movie1","1/01/2021","Movie1 is Comedy", "Amit");
		int movieId = favoriteMovie.getId();
		assertEquals(1, movieId);
	}

	@Test
	public void getMoviePath() {
		FavoriteMovie favoriteMovie = new FavoriteMovie(1,"http://image1.com",
				"Movie1","1/01/2021","Movie1 is Comedy", "Amit");
		String moviePath = favoriteMovie.getPoster_path();
		assertEquals("http://image1.com", moviePath);
	}

	@Test
	public void getMovieName() {
		FavoriteMovie favoriteMovie = new FavoriteMovie(1,"http://image1.com",
				"Movie1","1/01/2021","Movie1 is Comedy", "Amit");
		String movieName = favoriteMovie.getName();
		assertEquals("Movie1", movieName);
	}

	@Test
	public void getMovieRelDate() {
		FavoriteMovie favoriteMovie = new FavoriteMovie(1,"http://image1.com",
				"Movie1","1/01/2021","Movie1 is Comedy", "Amit");
		String movieRelDate = favoriteMovie.getRelease_date();
		assertEquals("1/01/2021", movieRelDate);
	}

	@Test
	public void getMovieDesc() {
		FavoriteMovie favoriteMovie = new FavoriteMovie(1,"http://image1.com",
				"Movie1","1/01/2021","Movie1 is Comedy", "Amit");
		String movieDesc = favoriteMovie.getDesc();
		assertEquals("Movie1 is Comedy", movieDesc);
	}

	@Test
	public void getMovieUserName() {
		FavoriteMovie favoriteMovie = new FavoriteMovie(1,"http://image1.com",
				"Movie1","1/01/2021","Movie1 is Comedy", "Amit");
		String movieUserName = favoriteMovie.getUname();
		assertEquals("Amit", movieUserName);
	}
}
