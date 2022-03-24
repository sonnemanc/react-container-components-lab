import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'your-key-here';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            reviews: [],
        }
    }

    componentDidMount() {
        fetch(URL)
          .then(res => res.json())
          .then(response => this.setState({ reviews: response.results }))
    }

    render() {
        return (
        <div className="latest-movie-reviews">
            <h1>The Latest Reviews:</h1>
            <MovieReviews reviews={this.state.reviews}/>
        </div>)
    }
}

export default LatestMovieReviewsContainer;