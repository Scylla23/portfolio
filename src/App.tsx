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
import ThemeToggle from "./ThemeToggle";

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
      className="mb-8 bg-[#f8fafc] dark:bg-[#1e293b] rounded-xl overflow-hidden shadow-lg"
    >
      <motion.button
        className="w-full text-left flex items-center justify-between py-4 px-6"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-mono text-[#475569] dark:text-[#f1f5f9] font-semibold">
          {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronRight className="text-[#475569] dark:text-[#f1f5f9]" />
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
            <div className="p-6 bg-[#ffffff] dark:bg-[#1e293b] backdrop-blur-sm">
              {children}
            </div>
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
    className="inline-block px-4 py-1.5 m-2 font-mono text-sm bg-[#475569] dark:bg-[#475569] text-[#f8fafc] dark:text-[#f1f5f9] rounded-full shadow-md"
  >
    {skill}
  </motion.span>
);

const App: React.FC = () => {
  return (
    <div className="h-screen overflow-y-auto no-scrollbar bg-[#f8fafc] dark:bg-[#0f172a] text-[#0f172a] dark:text-[#f1f5f9] font-mono">
      <ThemeToggle />
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
            <h1 className="text-5xl font-bold mb-4 text-[#475569] dark:text-[#f1f5f9]">
              Pavan Kushnure
            </h1>
            <p className="text-2xl text-[#475569] dark:text-[#f1f5f9]">
              Frontend | Backend | Devops | System Design
            </p>
          </motion.div>

          <Section title="About Me">
            <p className="leading-relaxed text-[#475569] dark:text-[#94a3b8]">
              I'm a full stack developer with expertise in the MERN stack,
              DevOps, and system design. I am passionate about building tech.
            </p>
          </Section>

          <Section title="Experience">
            <div className="space-y-8">
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-[#475569] dark:text-[#f1f5f9]">
                  <a
                    href="https://naya.love/studio"
                    className="hover:text-[#0f172a] dark:hover:text-[#94a3b8] transition-colors"
                  >
                    Naya
                  </a>
                </h3>
                <p className="text-sm text-[#475569] dark:text-[#94a3b8] mb-4">
                  Software Developer | Current Role since October 2023
                </p>
                <div className="text-[#475569] dark:text-[#94a3b8] space-y-2">
                  <p>
                    At Naya, I contributed to the core product by designing and
                    delivering features that improved{" "}
                    <strong className="dark:text-[#f1f5f9]">
                      interactivity, privacy, scalability, and monetization
                    </strong>{" "}
                    for complex, collaborative projects:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      <strong className="dark:text-[#f1f5f9]">
                        Enhanced user workflows:
                      </strong>{" "}
                      Built a shift-click multi-select system for batch
                      operations, boosting productivity for power users.
                    </li>
                    <li>
                      <strong className="dark:text-[#f1f5f9]">
                        Customizable UI:
                      </strong>{" "}
                      Developed a flexible color palette system to personalize
                      group blocks and journeys, balancing aesthetics with brand
                      consistency.
                    </li>
                    <li>
                      <strong className="dark:text-[#f1f5f9]">
                        Data privacy & security:
                      </strong>{" "}
                      Implemented password-protected blocks using bcrypt,
                      ensuring sensitive content is accessible only to
                      authorized users.
                    </li>
                    <li>
                      <strong className="dark:text-[#f1f5f9]">
                        3D model integrations:
                      </strong>
                      <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>
                          <strong className="dark:text-[#f1f5f9]">
                            Onshape:
                          </strong>{" "}
                          Enabled login + model link embedding with live
                          previews and real-time syncing via webhooks.
                        </li>
                        <li>
                          <strong className="dark:text-[#f1f5f9]">
                            Autodesk Viewer:
                          </strong>{" "}
                          Integrated seamless rendering and inspection of
                          complex 3D models directly in-app.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong className="dark:text-[#f1f5f9]">
                        Payments & subscriptions:
                      </strong>{" "}
                      Designed tiered subscription plans (Free, Professional,
                      Enterprise) with Stripe, enabling paid seat allocation,
                      automated upgrades, and safeguard flows for usage limits.
                    </li>
                    <li>
                      <strong className="dark:text-[#f1f5f9]">
                        Scalable search:
                      </strong>{" "}
                      Indexed all block content in Algolia and built a universal
                      search modal for fast, accurate retrieval across projects.
                    </li>
                  </ul>
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-[#475569] dark:text-[#f1f5f9]">
                  Kratin LLC
                </h3>
                <p className="text-sm text-[#475569] dark:text-[#94a3b8] mb-4">
                  .Net Core Developer | Jan 2023 - Aug 2023
                </p>
                <div className="text-[#475569] dark:text-[#94a3b8] space-y-2">
                  <p>
                    During my internship, I contributed as a{" "}
                    <strong className="dark:text-[#f1f5f9]">
                      Backend Developer
                    </strong>
                    , building and maintaining the core backend of a web
                    application using{" "}
                    <strong className="dark:text-[#f1f5f9]">
                      ASP.NET Core, C#, and SQL Server
                    </strong>
                    . My work focused on designing RESTful APIs that aligned
                    with client requirements and scaling them for production
                    use.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      <strong className="dark:text-[#f1f5f9]">
                        Task Management Service:
                      </strong>{" "}
                      Designed and launched a feature-rich system with task
                      tracking, deadline management, real-time comments, and
                      file attachments.
                    </li>
                    <li>
                      <strong className="dark:text-[#f1f5f9]">
                        Scalability:
                      </strong>{" "}
                      Optimized the backend to support{" "}
                      <strong className="dark:text-[#f1f5f9]">
                        250,000+ tasks, 3,000+ users, and 100GB of files
                      </strong>
                      , ensuring reliability and performance under heavy load.
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </Section>

          <Section title="Projects">
            <div className="space-y-8">
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-[#475569] dark:text-[#f1f5f9]">
                  ShoppyEasy{" "}
                </h3>
                <p className="mb-4 text-[#475569] dark:text-[#94a3b8]">
                  Next13 ecommerce web app with admin dashboard which serves as
                  a centralized Content Management System for categories, sizes,
                  colors, and products. Implemented Clerk Authentication and
                  integrated Stripe for secure user access and seamless payment
                  processing.
                </p>
                <a
                  onClick={() => window.open("https://shoppyeasy.netlify.app/")}
                  className="text-blue-600 dark:text-blue-400 cursor-pointer hover:underline"
                >
                  View Project →
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-[#475569] dark:text-[#f1f5f9]">
                  SnappyChat
                </h3>
                <p className="mb-4 text-[#475569] dark:text-[#94a3b8]">
                  Web application that enables users to chat with different
                  users and receive realtime notifications when they receive the
                  message.Achieved secure user authentication and authorization
                  with JSON Web Tokens (JWT).Used Socket.io for realtime
                  notifications.
                </p>
                <a
                  onClick={() =>
                    window.open("https://snappychatt.netlify.app/login")
                  }
                  className="text-blue-600 dark:text-blue-400 cursor-pointer hover:underline"
                >
                  View Project →
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-[#475569] dark:text-[#f1f5f9]">
                  DrawTogetherHub
                </h3>
                <p className="mb-4 text-[#475569] dark:text-[#94a3b8]">
                  A dynamic real-time whiteboard application which facilitated
                  seamless real-time collaboration by implementing Socket.io and
                  Node.js events, enabling multiple users to work simultaneously
                  and witness instant updates and an intuitive Undo-Redo
                  feature, utilizing an array-based stack to manage
                  positions,colors, and pen/eraser widths.
                </p>
                <a
                  onClick={() =>
                    window.open("https://drawtogetherhub.netlify.app/")
                  }
                  className="text-blue-600 dark:text-blue-400 cursor-pointer hover:underline"
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
              className="text-[#475569] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-[#f1f5f9] transition-colors"
            >
              <Mail size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              href="https://github.com/Scylla23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#475569] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-[#f1f5f9] transition-colors cursor-pointer"
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://www.linkedin.com/in/pavankumar-kushnure-97274b1a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#475569] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-[#f1f5f9] transition-colors cursor-pointer"
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              href="https://x.com/Pavankumarkush5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#475569] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-[#f1f5f9] transition-colors cursor-pointer"
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
            className="flex px-6 py-3 bg-[#f8fafc] dark:bg-[#1e293b] text-[#0f172a] dark:text-[#f1f5f9] rounded-full shadow-lg items-center justify-center border border-[#475569] dark:border-[#94a3b8] hover:bg-[#ffffff] dark:hover:bg-[#0f172a] transition-colors"
          >
            <Download size={20} className="mr-2" />
            Download Resume
          </motion.button>
        </div>
      </div>

      <footer className="pb-8 text-center text-[#475569] dark:text-[#94a3b8]">
        <p>© {new Date().getFullYear()} pkushnure.tech</p>
      </footer>
    </div>
  );
};

export default App;
