import React from 'react'
import vg from "../assets/2.webp"
import { AiFillAmazonCircle, AiFillYoutube, AiFillGoogleCircle, AiFillInstagram } from "react-icons/ai"
const Home = () => {
  return (
    <>
      <div className='home' id='home'>
        <main>
          <h1>Techstar</h1>
          <p>this is the best website</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quam enim numquam minus unde voluptates illo
            fugiat ullam molestias optio aspernatur doloremque ipsam, beatae
            similique magnam culpa architecto, nihil eos ad.
          </p>
        </div>
      </div>
      <div className="home3" id='about'>
        <div><h1> who i am?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Vel vitae est porro laboriosam, perspiciatis accusantium
            a repellat quo architecto placeat maxime dolore, ducimus eius quos
            odio error! Minima reiciendis, ullam rem qui dolorum fugiat
            magni voluptatibus aliquid, voluptatem architecto repudiandae
            ut iste exercitationem quas est distinctio porro numquam animi.
            Perferendis.
          </p>
        </div>
      </div>
      <div className="home4 " id='brands'>
        <div>
          <h1>Brands</h1>
          <div>
          <div style={{
            animationDelay:"0.s",
          }}>
            <AiFillGoogleCircle />
            <p>Google</p>
          </div>
          <div
          style={{
            animationDelay:"0.8s",
          }}>
            <AiFillYoutube />
            <p>Google</p>
          </div>
          <div
          style={{
            animationDelay:"0.9s",
          }}>
            <AiFillAmazonCircle />
            <p>Google</p>
          </div>
          <div
           style={{
            animationDelay:"1s",
          }}>
         
            <AiFillInstagram />
            <p>Google</p>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home