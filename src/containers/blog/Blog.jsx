import './blog.css';
import {blog01, blog02, blog03, blog04, blog05} from './imports'
import Article from '../../components/article/Article'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className="gpt3__blog-heading">
        <h1 className='gradient__text'>A lot is happening, We are blogging about it</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container-groupA">
          <Article imageUrl={blog01} date = '26th August 1999' title= "GPT-3 and Open AI is the future, let get it done now!"/>
        </div>
        <div className="gpt3__blog-container-groupB">
          <Article imageUrl={blog02} date = '26th August 1999' title= "GPT-3 and Open AI is the future, let get it done now!"/>
          <Article imageUrl={blog03} date = '26th August 1999' title= "GPT-3 and Open AI is the future, let get it done now!"/>
          <Article imageUrl={blog04} date = '26th August 1999' title= "GPT-3 and Open AI is the future, let get it done now!"/>
          <Article imageUrl={blog05} date = '26th August 1999' title= "GPT-3 and Open AI is the future, let get it done now!"/>

        </div>
      </div>
    </div>
  )
}

export default Blog
