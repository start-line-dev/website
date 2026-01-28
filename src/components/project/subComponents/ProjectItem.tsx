"use client"
import { projectsData } from '@/data/projectData';
import Image from 'next/image';
import Link from 'next/link';

const ProjectItem = () => {
    // Split projects into two columns
    const leftColumnProjects = projectsData.slice(0, 3).filter((_, index) => index % 2 === 0);
    const rightColumnProjects = projectsData.slice(0, 3).filter((_, index) => index % 2 !== 0);

    return (
        <div className="row gx-135">
            {/* Left Column */}
            <div className="col-md-6">
                {leftColumnProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            {/* Right Column */}
            <div className="col-md-6">
                {rightColumnProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

interface ProjectCardProps {
    project: typeof projectsData[0];
}

const ProjectCard = ({ project }: ProjectCardProps) => {

    return (
        <div className="tp-project-item mb-95">
            <div className="tp-project-thumb not-hide-cursor" data-cursor="View<br>Demo" style={{ borderRadius: "16px", overflow: "hidden" }}>
                <Link
                    className="cursor-hide tp-project-thumb-link"
                    href={project.link}
                >
                    <Image
                        style={{ width: "100%", height: "auto", borderRadius: "16px" }}
                        src={project.image as string}
                        alt={`${project.title} project image`}
                    />
                </Link>
            </div>
            <div className="tp-project-content">
                <h4 className="tp-project-title">
                    <Link className="tp-line-black" href={project.link}>
                        {project.title}
                    </Link>
                </h4>
                {project.categories && (
                    <div className="tp-project-category">
                        {project.categories.map((category, index) => (
                            <span key={index}>{category}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectItem;