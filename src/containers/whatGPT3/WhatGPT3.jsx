import { Feature } from '../../components'
import './whatgpt3.css'
const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__padding section__margin' id='whatgpt3'>
      <div className="gpt3__whatgpt3-feature">
        <Feature title = "What is GPT3" text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sapiente ab autem veniam ut optio veritatis ipsa, quo perspiciatis voluptatem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sapiente ab autem veniam ut optio veritatis ipsa, quo perspiciatis voluptatem?" />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient-text">
          The Possiblities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbox" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sapiente ab autem veniam ut optio veritatis ipsa, quo perspiciatis voluptatem?"
        />
        <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sapiente ab autem veniam ut optio veritatis ipsa, quo perspiciatis voluptatem?"/> 

        <Feature title="Education" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sapiente ab autem veniam ut optio veritatis ipsa, quo perspiciatis voluptatem?"/>
      </div>
    </div>
  )
}

export default WhatGPT3
