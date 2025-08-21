import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Server, 
  Globe, 
  Database, 
  TestTube, 
  Cloud, 
  Brain 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: Server,
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT/Auth", "Middleware"],
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      hoverColor: "hover:bg-emerald-500/20"
    },
    {
      icon: Globe,
      title: "Frontend",
      skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5"],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      hoverColor: "hover:bg-blue-500/20"
    },
    {
      icon: Database,
      title: "Database",
      skills: ["MongoDB (Mongoose, Aggregation, Indexing)", "Firebase (Auth, Storage)"],
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      hoverColor: "hover:bg-purple-500/20"
    },
    {
      icon: TestTube,
      title: "Testing & Tools",
      skills: ["Insomnia", "Postman", "Git & GitHub"],
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      hoverColor: "hover:bg-orange-500/20"
    },
    {
      icon: Cloud,
      title: "Deployment & DevOps",
      skills: ["Render", "CI/CD basics", "Environment Configs"],
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
      hoverColor: "hover:bg-cyan-500/20"
    },
    {
      icon: Brain,
      title: "Other (Supporting)",
      skills: ["Python", "Flask", "Machine Learning (scikit-learn, model deployment)"],
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
      hoverColor: "hover:bg-pink-500/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="skills" ref={ref} className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              My expertise spans across various technologies and tools, enabling me to build robust full-stack applications.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="glass shadow-2xl hover:shadow-3xl hover:glow-primary transition-all duration-500 h-full">
                  <CardContent className="p-6">
                    {/* Category Header */}
                    <div className="flex items-center space-x-3 mb-4">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className={`p-3 ${category.bgColor} ${category.hoverColor} rounded-lg transition-colors duration-300`}
                      >
                        <category.icon className={`w-6 h-6 ${category.color}`} />
                      </motion.div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ 
                            delay: index * 0.1 + skillIndex * 0.05,
                            duration: 0.4 
                          }}
                          className="flex items-center space-x-2"
                        >
                          <div className={`w-2 h-2 ${category.color.replace('text-', 'bg-')} rounded-full`}></div>
                          <span className="text-muted-foreground text-sm leading-relaxed">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;