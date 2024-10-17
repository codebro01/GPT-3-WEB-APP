import './header.css';
import people from '../../assets/imgs/people.png'
import ai from '../../assets/imgs/ai.png'
const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home' >
      <div className="gpt3__header-content">
        <h1 className='gradient__text'>Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta nisi dolorem amet aliquam, labore deserunt iste temporibus, similique non, odio molestiae quo quidem tenetur ab tempore modi fuga aut ut. Cum omnis aliquid repellat nobis!
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" name="" id="" placeholder='Your email address'/>
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
        <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}
 
export default Header
