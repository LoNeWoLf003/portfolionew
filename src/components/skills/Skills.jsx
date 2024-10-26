import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Devops from "./Devops";
import ML from "./MachineLearning";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">My Skills</h2>
      <span className="section__subtitle">Technical Level</span>
      <div className="skills__container container grid">
        <Frontend />
        <Devops />
        <ML />
      </div>
    </section>
  );
};

export default Skills;
