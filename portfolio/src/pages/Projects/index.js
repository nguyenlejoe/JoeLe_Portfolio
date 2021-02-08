import React from 'react';
import '../../App.scss';
import Header from '../../comps/Header';
import ProjectCard from '../../comps/ProjectCard';

export default function ProjectsPage(){
    return (
        <div className="Project">
            <div className="HeaderCont">
                <Header ProjectsActive={true}></Header>
            </div>
            <div className="Content">
                <ProjectCard 
                    title="MAJI"
                    subhead="Water Usage Application"
                    bgimg="./maji.svg"
                    desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley type specimen book. It has survived not only five centuries, but also the le hing software like Aldus PageMaker including versions of Lorem Ipsum. "
                />
                <ProjectCard 
                    title="HomeChef"
                    subhead="Food Marketplace Platform"
                    bgimg="./homechef.svg"
                    desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley type specimen book. It has survived not only five centuries, but also the le hing software like Aldus PageMaker including versions of Lorem Ipsum. "
                />
                <ProjectCard 
                    title="Not So Sherlock"
                    subhead="Kids Interactive Game"
                    bgimg="./sherlock.svg"
                    desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley type specimen book. It has survived not only five centuries, but also the le hing software like Aldus PageMaker including versions of Lorem Ipsum. "
                    
                />
            </div>
        </div>
    );
}