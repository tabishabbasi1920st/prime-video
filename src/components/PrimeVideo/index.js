import Slider from 'react-slick'
import ReactPlayer from 'react-player'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'
import MoviesItem from '../MovieItem'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = () => {
    const filteredActionMoviesList = moviesList.filter(
      eachObj => eachObj.categoryId === 'ACTION',
    )
    return filteredActionMoviesList
  }

  const comedyMoviesList = () => {
    const filteredComedyMoviesList = moviesList.filter(
      eachObj => eachObj.categoryId === 'COMEDY',
    )
    return filteredComedyMoviesList
  }

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-img"
      />
      <div className="flat-list-container">
        <div className="slider-container">
          <h1 className="action-movies-heading">Action Movies</h1>
          <Slider {...settings}>
            {actionMoviesList().map(eachObj => (
              <MoviesItem key={eachObj.id} eachObj={eachObj} />
            ))}
          </Slider>
        </div>

        <div className="slider-container">
          <h1 className="action-movies-heading">Comedy Movies</h1>
          <Slider {...settings}>
            {comedyMoviesList().map(eachObj => (
              <MoviesItem key={eachObj.id} eachObj={eachObj} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default PrimeVideo
