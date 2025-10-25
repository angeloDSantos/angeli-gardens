import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import TiltedCard from "@/components/TiltedCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  image: string;
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Contemporary Garden Oasis",
      category: "landscaping",
      description: "Complete transformation with decking, water feature, and lush planting",
      challenge: "Transform an overgrown, unusable garden into a modern outdoor living space",
      solution: "Designed and installed a multi-level composite deck with integrated pond, surrounded by thoughtfully planned planting beds",
      outcome: "A stunning, low-maintenance garden that has become the heart of the home, perfect for entertaining",
      image: project3,
    },
    {
      id: 2,
      title: "Pristine Lawn Installation",
      category: "maintenance",
      description: "Professional turfing and garden maintenance transformation",
      challenge: "Patchy, uneven lawn requiring complete renovation",
      solution: "Removed old turf, leveled ground, improved drainage, and laid premium quality turf",
      outcome: "A lush, even lawn that's the envy of the neighborhood, maintained to perfection",
      image: project2,
    },
    {
      id: 3,
      title: "Expansive Lawn Restoration",
      category: "maintenance",
      description: "Large-scale lawn renovation and maintenance program",
      challenge: "Large garden with neglected lawn requiring comprehensive care",
      solution: "Implemented scarification, aeration, overseeding, and regular maintenance schedule",
      outcome: "Vibrant, healthy lawn restored to its full potential with ongoing care",
      image: project1,
    },
    {
      id: 4,
      title: "Modern Patio & Landscaping",
      category: "landscaping",
      description: "Contemporary patio design with surrounding garden improvements",
      challenge: "Create a stylish, functional outdoor space for entertaining",
      solution: "Installed modern patio with quality paving, complemented by refined lawn and border work",
      outcome: "Elegant outdoor living area that seamlessly connects indoor and outdoor spaces",
      image: project4,
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "landscaping", label: "Landscaping" },
    { id: "maintenance", label: "Maintenance" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-primary-foreground/90">
              Explore our recent projects and see how we've transformed gardens across the region
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background/95 backdrop-blur-md sticky top-0 z-40 border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === category.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-background hover:bg-primary/10"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg aspect-[4/3]"
                >
                  <TiltedCard
                    imageSrc={project.image}
                    altText={project.title}
                    captionText={project.title}
                    containerHeight="100%"
                    containerWidth="100%"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    onClick={() => setSelectedProject(project)}
                    overlayContent={
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-background pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent opacity-60" />
                        <div className="relative z-10">
                          <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full mb-3">
                            {project.category === "landscaping" ? "Landscaping" : "Maintenance"}
                          </span>
                          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                          <p className="text-background/90">{project.description}</p>
                        </div>
                      </div>
                    }
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <div className="space-y-6">
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                  {selectedProject.category === "landscaping" ? "Landscaping" : "Maintenance"}
                </span>
                <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">{selectedProject.description}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">The Challenge</h3>
                  <p className="text-muted-foreground">{selectedProject.challenge}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Our Solution</h3>
                  <p className="text-muted-foreground">{selectedProject.solution}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">The Outcome</h3>
                  <p className="text-muted-foreground">{selectedProject.outcome}</p>
                </div>
              </div>

              <div className="pt-6 border-t">
                <p className="text-center text-muted-foreground mb-4">
                  Inspired by this transformation?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center h-11 px-6 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
                  >
                    Get Your Free Quote
                  </a>
                  <a
                    href="tel:07542973733"
                    className="inline-flex items-center justify-center h-11 px-6 border border-input rounded-md font-medium hover:bg-accent transition-colors"
                  >
                    Call Us Today
                  </a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Let's create something beautiful together. Get your free, no-obligation quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center h-14 px-8 bg-background text-foreground rounded-md font-medium hover:bg-background/90 transition-colors"
              >
                Get a Free Quote
              </a>
              <a
                href="tel:07542973733"
                className="inline-flex items-center justify-center h-14 px-8 border-2 border-primary-foreground/30 rounded-md font-medium hover:bg-primary-foreground/10 transition-colors"
              >
                Call: 07542 973733
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
