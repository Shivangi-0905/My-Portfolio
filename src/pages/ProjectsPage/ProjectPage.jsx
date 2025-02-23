import Navbar from "../../Components/Navbar/Navbar";
import styles from "./ProjectPage.module.css";
import ProjectCard from "../../Components/ProjectCard/projectCard"
import GeminiImg from "/src/assets/gemini.png"
import weatherAppImg from '../../assets/weaht.png'
import travelhookImg from '../../assets/travelhookIMG.png'
import NewsappImg from '../../assets/Newsapp.png'
import { motion } from "framer-motion";
import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";

function Projects() {
  return (
    <div>
      <Navbar />
      <Circle right={"-6rem"} top={"-8rem"} />
      <MainContainer>
        <div className={styles.project_page_component}>
          <ComponentTitle title={"My projects"} />
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: ".5", duration: ".3", stiffness: "100" }}
            className={styles.projects_component}
          >
            <ProjectCard
              previewLink={"https://mygeminicloneapp.netlify.app/"}
              githubLink={"https://github.com/Shivangi-0905/Gemini-Clone"}
              projectName={"React Gemini Clone"}
              projectDetails={
                "Google Gemini App: Generative AI App using Google Gemini API with React JS. Fun way to test Gemini knowledge. Simple, interactive, and informative!"
              }
              demoImage={GeminiImg}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />
            <ProjectCard
              previewLink={"https://weathhapp.netlify.app/"}
              githubLink={"https://github.com/Shivangi-0905/Weather-App"}
              projectName={"React Weather App"}
              projectDetails={
                "This is React Weather App for you to see how the day is going. Interactive Web Application based on API Data fetching."
              }
              demoImage={weatherAppImg}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                "https://cdn.worldvectorlogo.com/logos/framer-motion.svg"
              ]}
            />
             <ProjectCard
              previewLink={"https://travelappclone.netlify.app/"}
              githubLink={"https://github.com/Shivangi-0905/Travel-web"}
              projectName={"React Travel App"}
              projectDetails={
                "Responsive Tours and Travel Website Design with lot Animation like CSS Slider in Reactjs, Using Swiper, CSS Animations and Transitions Property."
              }
              demoImage={travelhookImg}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                "https://cdn.worldvectorlogo.com/logos/framer-motion.svg"
              ]}
            />
            <ProjectCard
              previewLink={"https://newsmegaapp.netlify.app/"}
              githubLink={"https://github.com/Shivangi-0905/NewsApp"}
              projectName={"React News App"}
              projectDetails={
                "Responsive Tours and Travel Website Design with lot Animation like CSS Slider in Reactjs, Using Swiper, CSS Animations and Transitions Property."
              }
              demoImage={NewsappImg}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                "https://cdn.worldvectorlogo.com/logos/framer-motion.svg"
              ]}
            />

            
            
           
            
          </motion.div>
        </div>
      </MainContainer>
      <motion.div
        initial={{ y: -20, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: ".3", stiffness: "150" }}
        className="component_container"
      ></motion.div>
    </div>
  );
}

export default Projects;