import React from "react";
import styles from "../styles";
import Card from "./Card";
import { projectsData } from "..//assets";

const Projects = () => {
  return (
    <div
      className="section flex min-h-screen items-center justify-center "
      id="projects"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {projectsData.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
export default Projects;
