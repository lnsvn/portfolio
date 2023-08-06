import React from "react";
import Project from "../components/Project";
import projects from "../constants/work";

function Work () {
    const projectData = projects.map((project) => {
        return (
            <li><Project title={project.title} image={project.image} description={project.description}
            appLink={project.appLink} repoLink={project.repoLink}/></li>
        )
    })

    return (
        <main className="flex flex-col items-center font-rem font-bold py-8">
            <h1 className="text-3xl">Work</h1>
            <ul className="">
                {projectData}
            </ul>
        </main>
    )
};

export default Work;