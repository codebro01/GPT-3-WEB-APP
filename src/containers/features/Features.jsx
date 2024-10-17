import './features.css'
import Feature from '../../components/feature/Feature'
const featuresData = [
  {
    title: 'Improving and Distrust minority',
    text: 'Dignissimos molestias inventore minima, enim aut quidem molestiae dicta in unde aliquam illum labore tempora ipsum quia harum quae aliquid distinctio adipisci sequi'
  },
  {
    title: 'Improving and Distrust minority',
    text: 'Dignissimos molestias inventore minima, enim aut quidem molestiae dicta in unde aliquam illum labore tempora ipsum quia harum quae aliquid distinctio adipisci sequi'
  },
  {
    title: 'Improving and Distrust minority',
    text: 'Dignissimos molestias inventore minima, enim aut quidem molestiae dicta in unde aliquam illum labore tempora ipsum quia harum quae aliquid distinctio adipisci sequi'
  },
  {
    title: 'Improving and Distrust minority',
    text: 'Dignissimos molestias inventore minima, enim aut quidem molestiae dicta in unde aliquam illum labore tempora ipsum quia harum quae aliquid distinctio adipisci sequi'
  },

]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className="gpt3__features-heading">
        <h1 className='gradient__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias inventore minima, enim aut quidem.</h1>
        <p>Request Early Access to get Started </p>
      </div>

      <div className="gpt3__features-container gpt3__features-con">
          {featuresData.map((item, index) => {
            return <Feature key={item.title + index} title= {item.title} text = {item.text}/>
          })}
      </div>
    </div>
  )
}

export default Features
