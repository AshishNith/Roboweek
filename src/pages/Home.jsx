import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import CountdownTimer from '../components/Timer';
import About from './AboutUs';
import Sponsors from './Sponsors';
// import Conference from '../components/Conference';
// import logo from '../assets/Heading.png';
import Prizes from '../components/Prizes';
import Contact from '../components/contact'

const Home = () => {

  const theme = {
    themeOfEvent: "Rise of the Machines"
  }

  return (
    <div className="min-h-screen overflow-hidden">

      {/* Hero Section */}
      <div className="hero">
        
        <section className='relative w-full lg:min-h-screen min-h-[70vh] flex flex-col justify-center items-center '>
        <img src="https://res.cloudinary.com/dosnuagvu/image/upload/v1738154202/logoRoboweek_ye8gmy.png" alt="" className=' lg:absolute lg:top-[25px] lg:right-[30px] absolute  top-2 p-1 backdrop-blur-sm w-[100px] border border-white/20 rounded-full  lg:scale-100  lg:w-[150px] '/>
        <div className='flex flex-col justify-center items-center space-y-8 gap-205'>
          <h1 className='relative z-[100] text-white/80 font-squidFont lg:text-[8vw] mt-20 lg:leading-[8vw] leading-[14vw] text-[14vw] text-center '>ROBOWEEK 3.0</h1>

          <h2 className='font-squidFont text-white text-2xl lg:text-3xl'>MYRAID OF iNNOVATION</h2>

            <CountdownTimer />
          </div>
          <div className='mt-5'>
            <Link to="/sign">
          <Button text="Register Now" textSize="text-2xl" iconLink={<i className="ri-arrow-right-line"></i>} />
            </Link>
          </div>
        </section>
</div>

        {/* Features Section */}
      <section className="py-20 z-1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="relative z-1000 text-3xl font-bold text-center mb-12 text-pink-400 font-squidFont"><span className='text-white'>WHY JOIN</span> ROBOWEEK 3.0?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              {
                title: "LEARN & INNOVATE",
                description: "Get hands-on experience with cutting-edge robotics technology"
              },
              {
                title: "NETWORK",
                description: "Connect with industry experts and like-minded innovators"
              },
              {
                title: "WIN PRIZES",
                description: "Compete for exciting prizes and recognition"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-lg bg-black/40 p-6 rounded-xl border border-pink-500 shadow-lg hover:border-pink-400 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-4 text-pink-400 font-squidFont">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <About />   

      {/* Timeline Section */}
<section className="py-16 bg-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="relative z-10 text-4xl font-bold text-center mb-12 text-pink-400 font-squidFont tracking-wide">
      UNLEASH THE FUTURE: EVENT TIMELINE
    </h2>
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pink-400/50"></div>

      {[
        { event: "REGISTRATION OPENS", date: "--/03/2025" },
        { event: "TEAM FORMATION DEADLINE", date: "--/03/2025" },
        { event: "EVENT BEGINS", date: "22/03/2025" },
        { event: "DAY 2", date: "23/03/2025" },
        { event: "FINAL DAY", date: "24/03/2025" },
      ].map((item, index) => (
        <motion.div
          key={index}
          className={`flex flex-col md:flex-row items-center mb-16 ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
          initial={{ opacity: 0, rotateY: 90 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          exit={{ opacity: 0, rotateY: -90 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.5 }}
        >
          {/* Event Card */}
          <div
            className={`w-full md:w-5/12 ${
              index % 2 === 0 ? "md:pl-8" : "md:pr-8 text-right"
            }`}
          >
            <motion.div
              className="backdrop-blur-md bg-pink-400/10 p-6 rounded-2xl border border-pink-500 shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg font-squidFont text-white tracking-wider">
                {item.event} :{" "}
                <span className="text-pink-300">{item.date}</span>
              </p>
            </motion.div>
          </div>

          {/* Timeline Marker */}
          <div className="w-2/12 flex justify-center items-center">
            <motion.div
              className="w-8 h-8 bg-pink-400 rounded-full border-4 border-black relative z-10 shadow-md"
              whileHover={{ scale: 1.3, rotate: 10 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Empty Spacer */}
          <div className="w-full md:w-5/12" />
        </motion.div>
      ))}
    </div>
  </div>
</section>


      <Prizes />

      <Sponsors />
    <Contact />

      {/* Conference Section */}
      {/* <Conference /> */}
    </div>
  );
};

export default Home;
