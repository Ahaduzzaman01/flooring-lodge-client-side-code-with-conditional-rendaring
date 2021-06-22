import React from 'react';
import carpetInstallation from '../../../images/carpet.jpg'
import floorRepair from '../../../images/chair.jpg'
import engineeredFlooring from '../../../images/engineeredFlooring.jpg'
import woodFloor from '../../../images/woodFloor.jpg'
import carpetCleaning from '../../../images/carpetCleaning-min.jpg'
import tiles from '../../../images/tiles.jpg'
import ProjectsDetail from '../ProjectsDetail/ProjectsDetail';


const projectsData = [
    {
        img: tiles,
        projectName: "Tiles Flooring",
        workPlace: "At Office"
    },
    {
        img: carpetInstallation,
        projectName: "Carpet Installation",
        workPlace: "At Resort"
    },
    {
        img: engineeredFlooring,
        projectName: "Engineered Flooring",
        workPlace: "At Hotel"
    },
    {
        img: carpetCleaning,
        projectName: "Carpet Cleaning",
        workPlace: "At House"
    },
    {
        img: woodFloor,
        projectName: "Wood Floor Installation",
        workPlace: "At Residential"
    },
    {
        img: floorRepair,
        projectName: "Floor Repair",
        workPlace: "At House"
    },
]


const Projects = () => {
    return (
        <section className="py-5 mt-3">
            <div className="container">
                <h2 className="text-center pb-5 m-0" style={{ color: 'dimGrey' }}>Our Recent <span style={{ color: '#1a9664' }}>Projects</span></h2>

                <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                    {
                        projectsData.map(project => <ProjectsDetail project={project}></ProjectsDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Projects;