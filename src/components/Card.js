import React from 'react'
import Rating from './rating'
// import IMDB from './omdb'


const Card = ({ name, id, No_Of_Current_Seasons, Status, Plot, imdb, link}) => {
  if (`${id}` % 2 !== 0) {
      return (
	   <div title={`${name}`} className='bg-pink dib br4 pa3 ma2 hover bw2 shadow=8'>
    <div className="flip-container">
  <div className="flipper">
    <div className="front">
    <img src = {`./images/${id}.jpg`} alt='shows' />
    <div>
    <h2 className='name navy'>{id}.{name}</h2>
    <p>No. Of Current Seasons: {No_Of_Current_Seasons}</p>
    <p>Runtime Status: {Status}</p>
    </div>
    </div>
    <div className="back">
    <p className="red">Plot:</p><p className='bg-gray near-black br3'> {Plot}</p>
    <p className="navy">IMDB: {imdb}</p>
    {/* <IMDB /> */}
    <Rating />
    <a  href={`${link}`} className='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-hot-pink'>Link</a>
    </div>

</div>    
</div>
  </div>
  )} else {
    return (
      <div title={`${name}`} className='bg-light-purple dib br3 pa3 ma2 hover bw2 shadow=8'>
      <div className="flip-container">
    <div className="flipper">
      <div className="front">
      <img src = {`./images/${id}.jpg`} alt='shows' />
      <div>
      <h2 className='name navy'>{id}.{name}</h2>
      <p>No. Of Current Seasons: {No_Of_Current_Seasons}</p>
      <p>Runtime Status: {Status}</p>
      </div>
      </div>
      <div className="back">
      <p className="red">Plot:</p><p className='bg-gold br3'> {Plot}</p>
      <p className="light-yellow">IMDB: {imdb}</p>
      {/* <IMDB /> */}
      <Rating />
      <a  href={`${link}`} className='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-hot-pink'>Link</a>
      </div>
      </div>    
</div>
  </div>
    )
  }

}
export default Card;