import  React, {Component} from 'react';

class ProjectItem extends Component {
    render(){
        return(
            <li className="ProjectItem">
                <strong>{this.props.project.title}</strong>: {this.props.project.category}
            </li>
        );
    }
}

export default ProjectItem