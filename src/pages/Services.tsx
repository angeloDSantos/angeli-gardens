import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Leaf,
  Scissors,
  TreePine,
  Fence,
  Grid3x3,
  Home,
  Droplets,
  Flower2,
  Hammer,
  Palette,
  Sprout,
  WashingMachine,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

const Services = () => {
  const gardeningServices = [
    {
      icon: Leaf,
      title: "Regular Maintenance",
      description: "Keep your garden in perfect condition year-round",
      features: ["Weekly/fortnightly visits", "Lawn mowing & edging", "Weeding & tidying", "Seasonal care"],
    },
    {
      icon: Scissors,
      title: "Hedge Trimming & Topiary",
      description: "Precision cutting for beautifully shaped hedges",
      features: ["Professional shaping", "Height reduction", "Formal & informal styles", "Waste removal"],
    },
    {
      icon: TreePine,
      title: "Tree Pruning & Surgery",
      description: "Expert tree care to maintain health and safety",
      features: ["Crown reduction", "Dead wood removal", "Stump grinding"],
    },
    {
      icon: WashingMachine,
      title: "Garden Clearance",
      description: "Complete site clearance and waste removal",
      features: ["Overgrown garden clearance", "Green waste removal", "Site preparation", "One-off or regular"],
    },
    {
      icon: Flower2,
      title: "Planting & Borders",
      description: "Beautiful planting schemes tailored to your space",
      features: ["Seasonal planting", "Border design", "Plant selection", "Mulching & feeding"],
    },
    {
      icon: Sprout,
      title: "Lawn Treatment & Renovation",
      description: "Bring your lawn back to lush, green perfection",
      features: ["Scarification", "Aeration", "Overseeding", "Fertilization programs"],
    },
  ];

  const landscapingServices = [
    {
      icon: Grid3x3,
      title: "Patios & Paving",
      description: "Stunning patios that enhance your outdoor living",
      features: ["Natural stone & porcelain", "Pattern design", "Drainage solutions", "Quality foundations"],
    },
    {
      icon: Fence,
      title: "Fencing",
      description: "Secure, attractive fencing for every need",
      features: ["Panel & close board", "Picket & trellis", "Gate installation", "Repair & replacement"],
    },
    {
      icon: Home,
      title: "Decking",
      description: "Create beautiful outdoor entertaining spaces",
      features: ["Composite & timber", "Multi-level designs", "Balustrades & lighting", "Repair & maintenance"],
    },
    {
      icon: Hammer,
      title: "Shed Bases & Installation",
      description: "Solid foundations for sheds and outbuildings",
      features: ["Concrete bases", "Gravel bases", "Shed assembly", "Levelling services"],
    },
    {
      icon: Flower2,
      title: "Raised Beds & Planters",
      description: "Functional and beautiful raised garden features",
      features: ["Timber & brick", "Vegetable gardens", "Flower beds", "Custom designs"],
    },
    {
      icon: Palette,
      title: "Garden Walls & Structures",
      description: "Retaining walls and decorative garden features",
      features: ["Brick & stone walls", "Retaining structures", "Garden steps", "Pergolas & arbours"],
    },
    {
      icon: Droplets,
      title: "Turfing & Artificial Grass",
      description: "Instant lawns for all seasons",
      features: ["Premium turf", "Artificial grass", "Ground preparation", "Professional laying"],
    },
    {
      icon: WashingMachine,
      title: "Pressure Washing",
      description: "Restore surfaces to their former glory",
      features: ["Patios & driveways", "Decking cleaning", "Wall cleaning", "Gutter clearance"],
    },
  ];

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-foreground/90">
              Comprehensive garden and landscaping solutions for homes across London, Surrey & Berkshire
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gardening & Maintenance */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Gardening & Maintenance</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Regular care and expert maintenance to keep your garden thriving
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gardeningServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Hard & Soft Landscaping */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Hard & Soft Landscaping</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your outdoor space with quality construction and design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {landscapingServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our minimum day rate is £200. All projects are priced individually based on scope, materials, and timeframe. 
              We provide detailed, no-obligation quotes with no hidden costs.
            </p>
            <div className="bg-primary/10 border-2 border-primary/20 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">Price on Request</h3>
              <p className="text-muted-foreground mb-6">
                Every garden is unique, and we believe your quote should be too. Contact us for a free, personalized consultation 
                and detailed quote tailored to your specific needs and budget.
              </p>
              <div className="bg-background/50 border border-primary/30 rounded-lg p-4 mb-6">
                <p className="text-sm font-medium flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  We come fully equipped with all professional tools - no additional equipment charges
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">Get Your Free Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:07542973733">Call: 07542 973733</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Service Areas</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              We proudly serve residential and commercial clients across:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg font-medium mb-8">
              <span className="px-6 py-2 bg-primary-foreground/10 rounded-full">London</span>
              <span className="px-6 py-2 bg-primary-foreground/10 rounded-full">Surrey</span>
              <span className="px-6 py-2 bg-primary-foreground/10 rounded-full">Berkshire</span>
            </div>
            <p className="text-primary-foreground/80">
              Not sure if we cover your area? Give us a call and we'll be happy to discuss your project.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
