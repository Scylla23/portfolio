import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Linkedin,
  Mail,
  Github,
  ChevronRight,
  Twitter,
  Download,
} from "lucide-react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 bg-neutral-100 rounded-xl overflow-hidden shadow-lg"
    >
      <motion.button
        className="w-full text-left flex items-center justify-between py-4 px-6"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-mono text-neutral-600 font-semibold">
          {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronRight className="text-neutral-600" />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 bg-white backdrop-blur-sm">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => (
  <motion.span
    whileHover={{ scale: 1.1 }}
    className="inline-block px-4 py-1.5 m-2 font-mono text-sm bg-neutral-700 text-neutral-100 rounded-full shadow-md"
  >
    {skill}
  </motion.span>
);

const App: React.FC = () => {
  return (
    <div className="h-screen overflow-y-auto no-scrollbar bg-white text-black font-mono">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto" id="content">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <motion.div
              className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <img
                src="/me.gif"
                alt="Pavan Kushnure"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <h1 className="text-5xl font-bold mb-4 text-neutral-600">
              Pavan Kushnure
            </h1>
            <p className="text-2xl text-neutral-600">
              Frontend | Backend | System Design | Devops
            </p>
          </motion.div>

          <Section title="About Me">
            <p className="leading-relaxed">
              I'm a full stack developer with expertise in the MERN stack, DevOps, .Net core, Java and system design.
              I am passionate about building tech.
            </p>
          </Section>

          <Section title="Experience">
            <div className="space-y-8">
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-600">
                  <a href="https://naya.love/studio">Naya</a>
                </h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Software Developer | Current Role since October 2023
                </p>
                <p className="text-neutral-600">
                  I manage backend system integrations, ensuring seamless
                  functionality within our AI pipeline.
                </p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-600">
                  Kratin LLC
                </h3>
                <p className="text-sm text-neutral-600 mb-4">
                  .Net Core Developer | Jan 2023 - Aug 2023
                </p>
                <p className="text-neutral-600">
                  Developing and maintaining backend of a web application using ASP .NET Core, C#, and SQL Server, crafting RESTful APIs to align with client requirements.
                  Designed and launched the Task Management Service, featuring task tracking, deadline management, real-time comments, and file attachment capabilities, supporting 250,000 tasks, 3,000 users, and 100GB of files.
                </p>
              </motion.div>
            </div>
          </Section>

          <Section title="Projects">
            <div className="space-y-8">
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-600">
                  ShoppyEasy{" "}
                </h3>
                <p className="mb-4 text-neutral-600">
                  Next13 ecommerce web app with admin dashboard which serves as a centralized Content Management System for categories, sizes, colors, and products. Implemented Clerk Authentication and integrated Stripe for secure user access and seamless payment processing.
                </p>
                <a
                  onClick={() => window.open("https://shoppyeasy.netlify.app/")}
                  className="text-blue-600 cursor-pointer"
                >
                  View Project →
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-600">
                  SnappyChat
                </h3>
                <p className="mb-4 text-neutral-600">
                  Web application that enables users to chat with different users and receive realtime notifications when they receive the message.Achieved secure user authentication and authorization with JSON Web Tokens (JWT).Used Socket.io for realtime notifications.
                </p>
                <a
                  onClick={() => window.open("https://snappychatt.netlify.app/login")}
                  className="text-blue-600 cursor-pointer"
                >
                  View Project →
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-600">
                  DrawTogetherHub
                </h3>
                <p className="mb-4 text-neutral-600">
                  A dynamic real-time whiteboard application which facilitated seamless real-time collaboration by implementing Socket.io and Node.js events, enabling multiple users to work simultaneously and witness instant updates and an intuitive Undo-Redo feature, utilizing an array-based stack to manage positions,colors, and pen/eraser widths.
                </p>
                <a
                  onClick={() => window.open("https://drawtogetherhub.netlify.app/")}
                  className="text-blue-600 cursor-pointer"
                >
                  View Project →
                </a>
              </motion.div>
            </div>
          </Section>

          <Section title="Skills">
            <div className="flex flex-wrap -m-2">
              <SkillBadge skill="React" />
              <SkillBadge skill="Node.js" />
              <SkillBadge skill="Express.js" />
              <SkillBadge skill="MongoDB" />
              <SkillBadge skill="SQLServer" />
              <SkillBadge skill="AWS" />
              <SkillBadge skill="Docker" />
              <SkillBadge skill="Kubernetes" />
              <SkillBadge skill="Git" />
              <SkillBadge skill="CI/CD" />
              <SkillBadge skill="Serverless" />
              <SkillBadge skill="Redis" />
              <SkillBadge skill="System Design" />
            </div>
          </Section>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="flex justify-center space-x-8 mb-8">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="mailto:pavankumarkushnure@gmail.com"
              className="text-neutral-600 hover:text-neutral-400 transition-colors"
            >
              <Mail size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              href="https://github.com/Scylla23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-400 transition-colors cursor-pointer"
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://www.linkedin.com/in/pavankumar-kushnure-97274b1a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-400 transition-colors cursor-pointer"
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              href="https://x.com/Pavankumarkush5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-400 transition-colors cursor-pointer"
            >
              <Twitter size={28} />
            </motion.a>
          </div>
        </motion.div>

        <div className="flex justify-center align-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.open("/Pavankumar Kushnure 2023.pdf");
            }}
            className="flex  px-6 py-3 bg-neutral-100 text-black rounded-full shadow-lg items-center justify-center"
          >
            <Download size={20} className="mr-2" />
            Download Resume
          </motion.button>
        </div>
      </div>

      <footer className="pb-8 text-center text-neutral-400">
        <p>© {new Date().getFullYear()} pkushnure.tech</p>
      </footer>
    </div>
  );
};

export default App;
