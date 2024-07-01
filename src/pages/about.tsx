import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io";

const about = () => {
  return (
    <div className="main-about">
      <h1>About Us</h1>
      <div className="creator">
        <div className="img">
          <img src="/passport.jpeg" alt="" />
        </div>

        <div className="about">
          <h2>The Developer</h2>
          <p>
            Hi! I'm Charles Njoroge, a Computer Science student at Chuka
            University and a passionate front-end developer. With skills in
            HTML, CSS, JavaScript, ReactJS, and JavaFX, I enjoy creating
            engaging and user-friendly applications. When I'm not coding, I love
            exploring new recipes and playing Fantasy Premier League.
          </p>
          <div className="contacts">
            <a href="" className="linking">
              <IoLogoGithub />
            </a>
            <a href="" className="linking">
              <FaLinkedinIn />
            </a>
            <a href="" className="linking">
              <BsTwitterX />
            </a>
            <a href="" className="linking">
              <GrInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="overview">
        <h2>Overview</h2>
        <p>
          Welcome to Event Bliss App, your go-to solution for managing and
          discovering events seamlessly. Our app helps you stay informed about
          upcoming events, manage your schedule, and connect with like-minded
          individuals. Whether you're looking for concerts, workshops,
          conferences, or social gatherings, Event Bliss App has you covered
        </p>
      </div>

      <h2 style={{ paddingLeft: "2em" }}>Testimonials</h2>
      <div className="testimonials">
        <div className="card">
          <img
            src="https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <p>
            “Event Bliss App has revolutionized the way I find and attend
            events. It's user-friendly and keeps me updated with everything
            happening around me.”
          </p>
          <p className="name">-Sarah M</p>
        </div>
        <div className="card">
          <img
            src="https://images.pexels.com/photos/14438788/pexels-photo-14438788.jpeg"
            alt=""
          />
          <p>
            “I love the seamless integration with my calendar. Never miss an
            event again!”
          </p>
          <p className="name">-John D</p>
        </div>
        <div className="card">
          <img
            src="https://images.pexels.com/photos/5699868/pexels-photo-5699868.jpeg"
            alt=""
          />
          <p>
            “The variety of events listed is impressive. I’ve discovered so many
            new activities in my area thanks to this app.”
          </p>
          <p className="name">-Emma R</p>
        </div>
      </div>
    </div>
  );
};

export default about;
