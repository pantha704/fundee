"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CrowdfundingProjectCard from "@/components/CrowdfundingProjectCard";
import CreateProjectModal from "@/components/CreateProjectModal";
import FundProjectDialog from "@/components/FundProjectDialog";
import ProjectDetailsDialog from "@/components/ProjectDetailsDialog";

interface Project {
  id: string;
  title: string;
  description: string;
  goal: number;
  raised: number;
  daysLeft: number;
}

const initialProjects: Project[] = [
  {
    id: "1",
    title: "Eco-Friendly Water Purifier",
    description:
      "Develop a sustainable water purification system for rural areas",
    goal: 50,
    raised: 30,
    daysLeft: 15,
  },
  {
    id: "2",
    title: "Community Solar Project",
    description:
      "Install solar panels in a local community to reduce energy costs",
    goal: 100,
    raised: 75,
    daysLeft: 20,
  },
  {
    id: "3",
    title: "Reforestation Initiative",
    description:
      "Plant 10,000 trees to combat deforestation and climate change",
    goal: 25,
    raised: 10,
    daysLeft: 30,
  },
];

export default function Home() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [fundingProject, setFundingProject] = useState<string | null>(null);
  const [viewingProject, setViewingProject] = useState<string | null>(null);

  const handleFund = (id: string) => setFundingProject(id);
  const handleViewDetails = (id: string) => setViewingProject(id);

  const handleProjectCreated = (newProject: Project) => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
  };

  const currentProject = projects.find(
    (p) => p.id === (fundingProject || viewingProject)
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pb-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Decentralized Crowdfunding
          </h1>
          <CreateProjectModal onProjectCreated={handleProjectCreated} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <CrowdfundingProjectCard
              key={project.id}
              {...project}
              onFund={handleFund}
              onDetails={handleViewDetails}
            />
          ))}
        </div>
      </main>
      <Footer />
      {currentProject && (
        <>
          <FundProjectDialog
            isOpen={!!fundingProject}
            onClose={() => setFundingProject(null)}
            projectId={currentProject.id}
            projectTitle={currentProject.title}
          />
          <ProjectDetailsDialog
            isOpen={!!viewingProject}
            onClose={() => setViewingProject(null)}
            project={currentProject}
          />
        </>
      )}
    </div>
  );
}
