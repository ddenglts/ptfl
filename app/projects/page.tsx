import { ProjectTile } from "@/components/ui/projecttile";

export default function Home() {
  const projects = [
    {
      title: "YAWT",
      desc: "....",
    },
    {
      title: "Virtual Memory Management System",
      desc: "A paged-based virtual memory management system for a 32-bit address space. This was a part of the course Operating Systems Design.",
      image: "/vmms.png", 
      link: "https://github.com/ddenglts/vmms"
    },
    {
      title: "Wire Classifier",
      desc: "A logistic regression classifier for classifying wires based on their positions relative to eachother. Was part of the course Intro To Artificial Intelligence.",
      link: "https://github.com/ddenglts/aip3"
    }
  ];

  return (
    <div className="w-full h-screen p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <ProjectTile
            key={index}
            {...project}
          />
        ))}
      </div>
    </div>
  );
}
