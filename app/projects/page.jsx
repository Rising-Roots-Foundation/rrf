'use client'
import PageBanner from '@/components/PageBanner';
import React, { useEffect, useState } from 'react';
import aboutImg from '@/app/images/aboutus.jpg';
import ProjectCard from '@/components/ProjectCard';

function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('link here');
        const data = await response.json();

        const projectData = data.slice(0, 4).map((item) => ({
          title: item.title,
          description: item.body,
          image: `link here`
        }));

        setProjects(projectData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section>
      {/* Page Banner */}
      <PageBanner title={"Our Projects"} bannerImage={aboutImg} />

      {/* Project Gallery */}
      <div className="py-10 px-5 md:ml-20 lg:ml-40 md:mr-20 lg:mr-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))
          ) : (
                          <p className="inset-0 grid place-content-center items-center text-pretty">Ouch, this page is under development. <br/> Please come back in few hours.<br/>Thank you!</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
