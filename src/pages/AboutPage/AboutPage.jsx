import ActionBox from "../../Components/ActionBox/ActionBox";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";
import Navbar from "../../Components/Navbar/Navbar";
import style from "./AboutPage.module.css";
import ContainerTitle from "../../Components/ComponentTitle/ComponentTitle";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <div>
      <Navbar />
      <Circle bottom={"19rem"} right={"-25rem"} />
      <MainContainer>
        <div className={style.about_component}>
          <ContainerTitle title={"About me"} />
          <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Education</h1>
            <div className={style.timeline_box}>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                   isleft={false}
                   timeline={"2023 - 2025"}
                   timeline_title={"Master of Technology in Computer Science and Engineering"}
                   location={"SHEAT, Varanasi"}
                   details={
                     "Currently completing my Master Degree in Computer Science and Engineering from AKTU"
                   }
                 
                />
              </div>
              <div className={`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2012 - 2016"}
                  timeline_title={"Bachelor of Technology in Computor Science and Engineering "}
                  location={"CSMCET, Prayagraj"}
                  details={"Completed my Bachelor Degree in Computer Science and Engineering from AKTU"}
                />
              </div>
              <div className= {`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"2011 - 2012"}
                  timeline_title={"Senior Secondary (10+2)"}
                  location={"SHS Inter College, Sonebhadra"}
                  details={
                    "Completed my Degree from State Board with 65% ."
                  }
                  
                 
                />
              </div>
              <div className= {`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2009 - 2010"}
                  timeline_title={"High School "}
                  location={"SHS Inter College, Sonbhadra"}
                  details={
                    "Completed my High School from State Board with 72%."
                  }
                 
                />
              </div>
            </div>
          </div>
          </div>
      </MainContainer>
    </div>
  );
}

export default AboutPage;