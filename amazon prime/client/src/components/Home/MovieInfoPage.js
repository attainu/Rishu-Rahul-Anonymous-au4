import React, { Component } from 'react'
// import Footer from "../Layout/Footer"

export default class MovieInfoPage extends Component {
    constructor(){
        super();
        this.state={
            data : {
                    "id": 2,
                    "moviedbId": 419704,
                    "adult": false,
                    "posterPath": "/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
                    "backdropPath": "5BwqwxMEjeFtdknRV792Svo0K1v.jpg",
                    "name": "Ad Astra",
                    "overview": "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life one undertakes space and its many perils to uncover the truth about a lost expedition that decades.",
                    "originalTitle": "Ad Astra",
                    "language": "en",
                    "rating": 8.1,
                    "releaseDate": "2019-09-17",
                    "actors": [
                        {
                            "id": 6,
                            "name": "Tommy Lee Jones",
                            "gender": "M",
                            "ActorMovies": {
                                "movieId": 2,
                                "actorId": 6
                            }
                        },
                        {
                            "id": 7,
                            "name": "Ruth Negga",
                            "gender": "F",
                            "ActorMovies": {
                                "movieId": 2,
                                "actorId": 7
                            }
                        },
                        {
                            "id": 8,
                            "name": "Liv Tyler",
                            "gender": "M",
                            "ActorMovies": {
                                "movieId": 2,
                                "actorId": 8
                            }
                        },
                        {
                            "id": 9,
                            "name": "Donald Sutherland",
                            "gender": "M",
                            "ActorMovies": {
                                "movieId": 2,
                                "actorId": 9
                            }
                        },
                        {
                            "id": 10,
                            "name": "John Ortiz",
                            "gender": "M",
                            "ActorMovies": {
                                "movieId": 2,
                                "actorId": 10
                            }
                        }
                    ],
                    "genres": [
                        {
                            "id": 3,
                            "name": "Drama",
                            "GenreMovies": {
                                "movieId": 2,
                                "genreId": 3
                            }
                        },
                        {
                            "id": 4,
                            "name": "Science Fiction",
                            "GenreMovies": {
                                "movieId": 2,
                                "genreId": 4
                            }
                        }
                    ],
                    "directors": [
                        {
                            "id": 4,
                            "name": "James Gray",
                            "gender": "M",
                            "DirectorMovies": {
                                "movieId": 2,
                                "directorId": 4
                            }
                        }
                    ]
                }
            
        }

    }
    render() {
        return (
            <div className="bgBody">
                <div className="row">
                    <div className="col-sm-7">
                    <div className="title">
                    <h2>{this.state.data.name}</h2>
                    </div>
                <div className="PosterContainer">
                    <div className="contents">
                    <div className="row" id="MovieButtons">
                    <button className="button play col-sm-1 btn btn-primary"><i class="fa fa-play"></i></button>
                    <button className="span col-sm-1" id="watchlist">
                    <span><b>Add to Watchlist</b></span>
                    </button>
                    <button className="span col-sm-1" id="trailer">
                    <span><b>Watch Trailer</b></span>
                    </button>
                    </div>
                    <h4 className="overview">{this.state.data.overview}</h4>
                    <div className="crew">
                    <h5>Director : {this.state.data.directors[0].name}</h5>
                    <h5>Starring : {this.state.data.actors[0].name}</h5>
                    <h5>Audio Language : {this.state.data.language} </h5>
                    <h5>Starring : {this.state.data.actors && this.state.data.actors.map((val,index)=>{
                        console.log(val)
                        return(
                        <span>{val.name},</span>
                        )
                        
                    })}</h5>
                    <h5>Genres : {this.state.data.genres && this.state.data.genres.map((val,index)=>{
                        console.log(val)
                        return(
                        <span>{val.name},</span>
                        )
                        
                    })}</h5>
                    <h5>IMDB Rating : {this.state.data.rating}</h5>
                    <h5>ReleaseDate : {this.state.data.releaseDate}</h5>
                    </div>
                    

                    </div>
                    

                </div> 
                    </div>
                    <div className="col-sm-4">
                    <img src={`https://image.tmdb.org/t/p/original${this.state.data.posterPath}`}   alt="Alps" style={{
                        width: '29rem',
                        'margin-top': '5rem'
                        }}></img>
                    </div>
                </div>
                {/* <Footer /> */}
                
            </div>
        )
    }
}
