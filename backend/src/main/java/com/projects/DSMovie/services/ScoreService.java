package com.projects.DSMovie.services;

import com.projects.DSMovie.dto.MovieDTO;
import com.projects.DSMovie.dto.ScoreDTO;
import com.projects.DSMovie.entities.Movie;
import com.projects.DSMovie.entities.Score;
import com.projects.DSMovie.entities.User;
import com.projects.DSMovie.repositories.MovieRepository;
import com.projects.DSMovie.repositories.ScoreRepository;
import com.projects.DSMovie.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ScoreService {

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ScoreRepository scoreRepository;

    @Transactional
    public MovieDTO saveScore(ScoreDTO dto) {

        User user = userRepository.findByEmail(dto.getEmail());
        if (user == null) {
            user = new User();
            user.setEmail(dto.getEmail());
            user = userRepository.saveAndFlush(user);
        }

        Movie movie = movieRepository.findById(dto.getMovieId()).get();

        Score score = new Score();
        score.setMovie(movie);
        score.setUser(user);
        score.setValue(dto.getScore());

        score = scoreRepository.saveAndFlush(score);

        double sum = 0.0;
        for (Score s : movie.getScoreList()) {
            sum = sum + s.getValue();
        }
        ;

        double average = sum / movie.getScoreList().size();

        movie.setScore(average);
        movie.setCount(movie.getScoreList().size());

        movie = movieRepository.save(movie);
        return new MovieDTO(movie);
    }

}
