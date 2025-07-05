import { Navbar } from './components/Navbar'
import './App.css'
import { Herosection } from './components/Herosection'
import { Subherosection } from './components/Subherosection'
import { Cards } from './components/Cards'
import { Testimonial } from './components/Testimonial'
import { Portfolio } from './components/Portfolio'
import { Partners } from './components/Partners'
import { MyBlog } from './components/MyBlog'
import { Contact } from './components/Contact'
import { Lastpage } from './components/lastpage'
import { Resume } from './components/Resume'


function App() {


  return (
    <div>
      <Navbar />
      <Herosection />
      <Subherosection></Subherosection>

      <Cards />
      <Resume />
      <Testimonial />
      <Portfolio />
      <Partners />

      <MyBlog />
      <Contact />
      <Lastpage />
    </div>
  )
}

export default App
