import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../../images/hero.jpeg'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-container">
                <img src={hero} alt="" />
            <div className="hero-info">
                <h1 className="title">Furniture design to make you feel at home</h1>
                <h5 className="subtitle">
                Lorem ipsum dolor sit amet consectetur adipiscing elit facilisi pellentesque cursus eget morbi sagittis sagittis commodo massa aliquam.
                </h5>
                <Link to="/products">

                <button>Shop Now</button>
                </Link>
            </div>
            </div>
        </section>
    )
}

export default Hero
