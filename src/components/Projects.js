import Weather from "../assets/images/Weather Dashboard.jpg";
import picture1 from "../assets/images/picture1.png";
import Horiseon from "../assets/images/Horiseon.png";
import quiz from "../assets/images/quiz.jpg";
import day from "../assets/images/day.jpg";
import theRight from "../assets/images/group2.png";

const Projects = () => {
  return (
    <section className="container" id="projects">
      <h2 className="container-title">Projects</h2>
      <div className="grid-container">
        <div className="grid-layout">
          <a
            href="https://jose109-001.github.io/Weather-Dashboard/"
            target="_blank"
            className="project-1 project-image"
          >
            <img src={Weather} alt="Coming-soon" className="snapshot" />
            <div className="description">
              <h3>Weather-Dashboard</h3>
            </div>
          </a>
          <a
            href="https://jose109-001.github.io/Horiseon/"
            target="_blank"
            className="project-2 project-image"
          >
            <img src={picture1} alt="Project Horiseon" className="snapshot" />
            <div className="description">
              <h3>Project HORISEON</h3>
            </div>
          </a>
          <a
            href="https://hannelizehuman.github.io/EventFinder_Impulse/#"
            target="_blank"
            className="project-3 project-image"
          >
            <img
              src={Horiseon}
              alt="EventFinder_Impulse"
              className="snapshot"
            />
            <div className="description">
              <h3>Group 1 Project 1</h3>
            </div>
          </a>
          <a
            href="https://jose109-001.github.io/Code-Quiz/"
            target="_blank"
            className="project-4 project-image"
          >
            <img src={quiz} alt="Code-Quiz" className="snapshot" />
            <div className="description">
              <h3>Coding Quiz Challenge</h3>
            </div>
          </a>
          <a
            href="https://jose109-001.github.io/Work-Day-Scheduler/"
            target="_blank"
            className="project-5 project-image"
          >
            <img src={day} alt="Day Planner" className="snapshot" />
            <div className="description">
              <h3>Day Planner</h3>
            </div>
          </a>
          <a
            href="https://the-right-to-switch-off.herokuapp.com/"
            target="_blank"
            className="project-5 project-image"
          >
            <img
              src={theRight}
              alt="The Right to Switch Off"
              className="snapshot"
            />
            <div className="description">
              <h3>The Right to Switch Off</h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
