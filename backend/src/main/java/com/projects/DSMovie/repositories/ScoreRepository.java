package com.projects.DSMovie.repositories;

import com.projects.DSMovie.entities.Score;
import com.projects.DSMovie.entities.ScorePK;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
}
