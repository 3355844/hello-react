import React, {Component} from 'react';
import ProjectItem from "./ProjectItem";
import PropTypes from 'prop-types';

class Projects extends Component {

    deleteProject(id) {
        this.props.onDelete(id);
    }

    render() {
        let projectItem;
        if (this.props.projects)
            projectItem = this.props.projects.map(project => {
                // console.log(project);
                return (
                    <ProjectItem
                        onDelete={this.deleteProject.bind(this)}
                        key={project.title}
                        project={project}
                    />
                );
            });
        return (
            <div className='Project'>
                <h3>Latest projects</h3>
                {projectItem}
            </div>
        );
    }
}

Projects.propTypes = {
    projects: PropTypes.array,
    onDelete: PropTypes.func
};

export default Projects;