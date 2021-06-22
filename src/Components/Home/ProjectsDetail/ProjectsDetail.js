import React from 'react';
import './ProjectsDetail.css'

const ProjectsDetail = ({ project }) => {
    return (
        <div className="col-md-4 col-sm-6 col-xs-12 shadow p-3 mx-2 single-card">
            <div className="card overlay-container">
                <img src={project.img} className="card-img-top project-image" alt="..." />
                <div className="overlay">
                    <div className="text w-100 p-2">
                        <h5>{project.projectName}</h5>
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quas!</small>
                    </div>
                </div>
                <div classNameName="text-center">
                    <h5 className="card-title">{project.projectName}</h5>
                    <p className="card-text">{project.workPlace}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetail;