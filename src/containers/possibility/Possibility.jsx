import './possibility.css';
import possibilityImage from '../../assets/imgs/possibility.png'
const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get started</h4>
        <h1 className='gradient__text'>Possiblities are beyond our imagination</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo in numquam perspiciatis aspernatur neque provident porro. Error, porro, deserunt in enim et eaque ratione laboriosam ab fugit voluptas repellat accusamus!</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility
