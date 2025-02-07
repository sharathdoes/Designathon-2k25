import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Brain, Shield, Factory } from "lucide-react";
import { useLocation } from "react-router-dom";

const domains = {
    cyberSecurityGenderDiversity: {
      icon: Shield,
      name: "Cyber Security and Gender Diversity",
      color: "from-blue-500/20 to-blue-600/20",
      problems: [
        {
          title: "1.1 AI-Based Deepfake Detection in Photos and Videos",
          description: "Deepfakes, AI-generated synthetic media, pose a significant threat to digital authenticity, misinformation, and cybersecurity. Develop an AI-powered system capable of detecting deepfake videos, images, and audio with high accuracy. Your solution should leverage advanced computer vision techniques, deep learning models, and real-time forensic analysis to identify synthetic manipulations. Focus on scalability, robustness against adversarial attacks, and integration with existing media verification frameworks.",
          objectives: [
            "Implement deep learning techniques such as convolutional neural networks (CNNs) and transformer-based models for deepfake detection",
            "Utilize temporal and spatial inconsistencies to identify AI-generated artifacts in videos and images",
            "Develop an explainable AI approach to highlight manipulated areas for transparency and forensic analysis", 
            "Optimize for real-time detection and low computational overhead for deployment on various platforms",
            "Integrate the system with media verification APIs, social platforms, and fact-checking networks"
          ]
        },
        {
          title: "1.2 Gender-Based Violence Prevention and Response System",
          description: "Gender-based violence (GBV) remains a significant issue in educational institutions. Develop a digital platform that raises awareness, enables secure reporting, and provides AI-driven threat assessment to prevent and respond to GBV incidents effectively.",
          objectives: [
            "Create an anonymous, encrypted reporting mechanism for victims and witnesses",
            "Develop AI-driven sentiment analysis to detect distress signals in reports and social media activity",
            "Implement automated case tracking and response workflows integrated with institutional policies",
            "Provide an AI-powered chatbot for real-time support and guidance",
            "Integrate predictive analytics to identify high-risk areas and suggest preventive measures"
          ]
        },
        {
          title: "1.3 Secure File Sharing System for Law Enforcement Agencies",
          description: "Law enforcement agencies frequently share sensitive case files across teams and jurisdictions, making them vulnerable to breaches. Develop a highly secure, end-to-end encrypted file-sharing system that ensures confidentiality, integrity, and availability while complying with data protection laws.",
          objectives: [
            "Implement AES-256 encryption for file storage and transmission",
            "Enable multi-factor authentication and biometric verification for access control",
            "Develop real-time anomaly detection for unauthorized access attempts",
            "Provide immutable audit logs for tracking access and modifications",
            "Integrate blockchain technology for tamper-proof file integrity verification"
          ]
        },
        {
          title: "1.4 AI-Powered Cyber Threat Intelligence Platform",
          description: "The rising frequency of cyberattacks necessitates proactive threat detection. Develop an AI-driven cyber threat intelligence platform that continuously collects, analyzes, and disseminates real-time threat data from multiple sources, enabling rapid response to cyber threats.",
          objectives: [
            "Aggregate data from dark web forums, social media, and network logs using AI-based web scraping",
            "Implement machine learning models to detect attack patterns and predict emerging threats",
            "Develop a real-time threat visualization dashboard with risk severity scoring",
            "Provide automated threat mitigation recommendations and incident response workflows",
            "Enable inter-agency collaboration by allowing secure threat intelligence sharing with law enforcement and cybersecurity teams"
          ]
        },
        {
          title: "1.5 Cryptocurrency Crime Investigation & Digital Forensics Tool",
          description: "Cryptocurrencies are widely used for illicit activities such as money laundering and fraud. Develop a digital forensics tool that enables law enforcement agencies to track cryptocurrency transactions, identify suspicious patterns, and generate legally admissible evidence.",
          objectives: [
            "Implement multi-blockchain transaction tracking with real-time data analysis",
            "Develop AI-based anomaly detection to identify illicit transaction patterns",
            "Provide interactive graph-based visualizations of fund movements",
            "Automate forensic report generation for legal and regulatory compliance",
            "Integrate the tool with existing financial crime investigation platforms"
          ]
        },
        {
          title: "1.6 Secure IoT Device Monitoring & Incident Response System",
          description: "IoT devices are increasingly targeted by cybercriminals, leading to potential system breaches. Develop an AI-driven monitoring system that detects vulnerabilities in real time and automates incident response to protect IoT infrastructure.",
          objectives: [
            "Utilize machine learning algorithms to detect anomalies and classify security threats",
            "Automate real-time incident response mechanisms, including device quarantine and patch deployment",
            "Develop a centralized dashboard for live threat visualization and device management",
            "Ensure compatibility with diverse IoT protocols and platforms",
            "Generate forensic data for post-incident analysis and legal investigations"
          ]
        },
        {
          title: "1.7 Unconscious Bias Detection in Hiring and Performance Evaluations",
          description: "Unconscious bias in hiring, performance evaluations, and promotions can lead to inequitable outcomes and hinder diversity efforts. Develop an AI-powered tool that detects and mitigates unconscious bias by analyzing decision-making patterns, evaluating historical data, and providing real-time insights to ensure fair and inclusive practices.",
          objectives: [
            "Implement machine learning algorithms to detect bias patterns in hiring, promotions, and performance reviews",
            "Utilize NLP models to analyze interview transcripts and performance evaluations for biased language",
            "Develop an interactive dashboard with real-time bias detection and actionable recommendations",
            "Ensure data privacy and security compliance while integrating with HR systems for seamless workflow",
            "Generate automated reports on bias trends and provide customized training modules for decision-makers"
          ]
        },
        {
          title: "1.8 AI-Powered Fake News and Misinformation Detection Interface",
          description: "Misinformation and fake news spread rapidly across digital platforms, influencing public opinion and creating societal risks. Develop an AI-driven interface that detects fake news and misleading posts while providing transparent reasoning behind its findings. The system should analyze textual, visual, and contextual cues using machine learning, NLP, and fact-checking algorithms.",
          objectives: [
            "Implement NLP models to analyze textual content for bias, exaggeration, or false claims",
            "Use AI-based image and video forensics to detect manipulated or deep-fake media",
            "Cross-verify information with trusted fact-checking databases and real-time web scraping",
            "Provide detailed explanations highlighting linguistic, contextual, and credibility-based inconsistencies",
            "Support integration with social media platforms and browser extensions for on-the-go verification"
          ]
        }
      ]
    },
    industrySustainability: {
      icon: Factory,
      name: "Industry 4.0 and Sustainability",
      color: "from-blue-500/20 to-blue-600/20",
      problems: [
        {
          title: "2.1 Eco-Insight: Leveraging Big Data & AI for Climate Action",
          description: "Develop an AI-powered data analytics platform that collects, processes, and visualizes climate data from IoT sensors, satellite imagery, and public databases. The system should use advanced machine learning models to detect patterns, predict environmental risks, and provide real-time insights to aid climate action initiatives.",
          objectives: [
            "Implement big data pipelines for real-time collection and processing of multi-source climate data",
            "Utilize deep learning models to analyze satellite imagery and identify deforestation, urban heat islands, and pollution trends",
            "Develop AI-driven forecasting models for climate risks such as extreme weather, rising sea levels, and air quality degradation",
            "Integrate a visual analytics dashboard for policymakers and organizations to track climate trends and take preventive actions",
            "Live updates should be pipelined in the framework"
          ]
        },
        {
          title: "2.2 AR/VR-Based Construction Planning and Visualization Platform",
          description: "Create an AR/VR platform that enhances construction planning by allowing teams to visualize building designs in 3D, improving collaboration and project outcomes.",
          objectives: [
            "Develop a VR interface for immersive architectural visualization",
            "Enable real-time modifications to designs based on user inputs",
            "Integrate with BIM (Building Information Modeling) systems for seamless planning",
            "Allow multi-user collaboration in virtual construction walkthroughs",
            "Provide an AI-powered simulation for evaluating structural feasibility"
          ]
        },
        {
          title: "2.3 Industrial IoT Security: Cyber Defense for Smart Factories",
          description: "With the rise of smart factories, cyber threats pose a significant risk to industrial systems. Build a cybersecurity framework integrating blockchain, AI-driven anomaly detection, and Zero Trust architectures to safeguard Industrial IoT (IIoT) networks from cyberattacks, ensuring operational continuity.",
          objectives: [
            "Develop machine learning-based intrusion detection to identify unusual network behaviors and prevent cyber threats",
            "Integrate blockchain for secure IIoT device authentication and tamper-proof logging of industrial transactions",
            "Implement Zero Trust security principles, ensuring continuous monitoring and access control enforcement for connected devices",
            "Build an automated incident response system that can detect, mitigate, and log cyber threats in real time",
            "Ensure compliance with industry security standards (e.g., IEC 62443, NIST) by implementing robust encryption"
          ]
        },
        {
          title: "2.4 Digital Twins: AI-Driven Simulation & Optimization for Smart Manufacturing",
          description: "Create a digital twin platform that uses real-time data ingestion, AI simulations, and predictive analytics to mirror industrial processes. This system should enable proactive maintenance, workflow optimization, and production efficiency improvements in smart factories.",
          objectives: [
            "Implement real-time sensor integration for continuous data streaming from physical assets",
            "Use machine learning models to predict equipment failures and optimize production efficiency",
            "Develop a simulation engine that models operational scenarios and tests optimization strategies before real-world implementation",
            "Design an interactive dashboard to visualize industrial performance metrics and enable data-driven decision-making",
            "Integrate AI-driven anomaly detection to enhance predictive maintenance and reduce operational risks"
          ]
        },
        {
          title: "2.5 AI-Driven Predictive Maintenance & Intelligent Resource Allocation",
          description: "Industrial downtime leads to significant losses. Develop an AI-powered predictive maintenance system that analyzes sensor and operational data to detect early signs of equipment failure. Additionally, implement an intelligent resource allocation framework to optimize energy, material usage, and labor distribution.",
          objectives: [
            "Use deep learning for anomaly detection in equipment health, predicting failures before they occur",
            "Implement automated work-order scheduling based on predictive insights, optimizing maintenance workflows",
            "Develop a reinforcement learning model for energy-efficient resource allocation in manufacturing plants",
            "Build a cloud-integrated platform to provide real-time analytics and automated alerts for industrial operators",
            "Optimize inventory and spare parts management using predictive analytics to reduce operational delays"
          ]
        },
        {
          title: "2.6 Biodiversity Monitoring: AI & Remote Sensing for Conservation",
          description: "Preserving biodiversity requires constant monitoring of ecosystems. Develop an AI-powered wildlife tracking system that integrates computer vision, NLP for conservation research, and satellite imagery analysis to track species populations and detect environmental threats.",
          objectives: [
            "Use image recognition models to classify species from drone and camera trap footage automatically",
            "Implement natural language processing (NLP) algorithms to extract insights from environmental research papers and conservation reports",
            "Deploy remote sensing AI models to analyze changes in habitats and detect deforestation, illegal poaching, or ecosystem degradation",
            "Create an interactive biodiversity dashboard that enables conservationists and researchers to visualize and act on real-time data",
            "Develop an AI-powered alert system that notifies conservation teams of critical environmental threats in real time"
          ]
        },
        {
          title: "2.7 Edge AI for Sustainable Smart Cities: Real-Time Energy & Waste Management",
          description: "Urban sustainability is critical for the future. Develop an Edge AI-based system that optimizes energy consumption, automates waste management, and enhances smart city infrastructure resilience.",
          objectives: [
            "Implement computer vision-based waste classification to optimize smart recycling systems in urban areas",
            "Use edge AI for smart grid optimization, enabling dynamic energy distribution based on consumption patterns",
            "Develop a real-time traffic and pollution monitoring system to suggest eco-friendly routing and reduce emissions",
            "Build a cloud-integrated sustainability dashboard that provides analytics and actionable insights for city planners",
            "Integrate AI-driven water management solutions to optimize consumption and reduce wastage in urban environments"
          ]
        },
        {
          title: "2.8 AI-Powered Supply Chain Resilience for Manufacturing",
          description: "Develop an AI-driven blockchain based system to enhance supply chain resilience by predicting disruptions, optimizing logistics, and ensuring smooth material flow in smart manufacturing.",
          objectives: [
            "Use AI to forecast supply chain disruptions due to weather, demand fluctuations, or geopolitical issues",
            "Implement blockchain for transparent and tamper-proof supply chain tracking",
            "Optimize inventory management using real-time analytics and demand forecasting",
            "Automate supplier risk assessment through AI-driven risk profiling",
            "Develop a smart contract-based procurement system for seamless transactions"
          ]
        }
      ]
    },
    openInnovation: {
      icon: Brain,
      name: "Open Innovation",
      color: "from-blue-500/20 to-blue-600/20",
      problems: [
        {
          title: "3.1 Automated Computer Systems for Streamlined Pipelines",
          description: "Develop an automated system that optimizes and manages workflows, reducing manual intervention and enhancing operational efficiency.",
          objectives: [
            "Automate task scheduling and execution across multiple applications",
            "Implement AI-driven optimization for resource allocation",
            "Ensure seamless integration with enterprise software ecosystems",
            "Provide real-time monitoring and troubleshooting",
            "Develop a scalable architecture to support enterprise growth"
          ]
        },
        {
          title: "3.2 Dynamic, Editable Website Template Generator",
          description: "Design a platform that allows users to create customizable and adaptive website templates suited for various business or personal needs.",
          objectives: [
            "Enable drag-and-drop template customization with modular components",
            "Provide AI-powered design suggestions based on industry trends",
            "Support real-time collaboration for team-based website creation",
            "Ensure mobile responsiveness and accessibility compliance",
            "Offer seamless integration with third-party plugins and APIs"
          ]
        },
        {
          title: "3.3 Preventing Doom Scrolling and Social Media Addiction",
          description: "Develop a tool that helps users break the cycle of doom scrolling by promoting mindful digital consumption and screen time balance.",
          objectives: [
            "Use AI to detect prolonged negative content consumption patterns",
            "Provide real-time alerts and recommendations for healthier browsing",
            "Implement customizable screen time management features",
            "Integrate gamification techniques to encourage breaks and balance",
            "Offer detailed analytics and insights into social media usage trends"
          ]
        },
        {
          title: "3.4 Green Algorithms – Optimizing Energy Consumption in Data Centers",
          description: "Data centers are major energy consumers, and optimizing their efficiency is crucial for a sustainable future. Create algorithms and software solutions that analyze workload patterns, optimize resource allocation, and reduce energy consumption.",
          objectives: [
            "Develop predictive modeling to forecast energy demand and optimize usage",
            "Implement real-time monitoring and automated workload scheduling",
            "Reduce carbon footprint by integrating energy-efficient computing strategies",
            "Utilize AI-based load balancing to optimize server performance",
            "Ensure compatibility with cloud and on-premises infrastructure"
          ]
        },
        {
          title: "3.5 AR-Powered Indoor Navigation for Emergency Situations and Incident Response Visualization",
          description: "Develop an AR-powered indoor navigation system for risk mitigation and emergency situations that guides users through complex environments like malls, hospitals, and airports using real-time, interactive overlays.",
          objectives: [
            "Utilize AR and computer vision to provide step-by-step indoor navigation assistance",
            "Implement real-time path updates based on user movement and environmental changes",
            "Ensure accuracy in low-GPS areas by integrating Wi-Fi and Bluetooth beacons",
            "Develop a mobile application that supports multiple accessibility features",
            "Enable integration with public infrastructure databases for scalability"
          ]
        },
        {
          title: "3.6 Human Activity Recognition Benchmark for Elderly Care (Healthcare)",
          description: "Create a benchmark dataset for human activity recognition (HAR) with a focus on elderly-specific movements and behaviors. Leverage transfer learning to improve model accuracy and support healthcare monitoring solutions.",
          objectives: [
            "Collect and label a diverse dataset capturing common elderly movements such as walking, sitting, and fall detection",
            "Develop HAR models using deep learning and transfer learning techniques to enhance accuracy",
            "Design a real-time monitoring system that integrates with wearable devices or IoT sensors",
            "Implement anomaly detection for early intervention in case of unusual activity patterns",
            "Ensure the dataset and models align with ethical and privacy guidelines for healthcare applications"
          ]
        },
        {
          title: "3.7 Audio Source Detection and Separation for Musical Instrument Tones",
          description: "Build an AI-driven algorithm that identifies and separates individual musical instrument sounds from mixed audio files, enabling enhanced analysis and music production.",
          objectives: [
            "Develop a deep learning model capable of isolating multiple instrument tracks from polyphonic audio",
            "Integrate signal processing techniques such as Short-Time Fourier Transform (STFT) for sound separation",
            "Optimize the system for real-time processing to support music production workflows",
            "Provide a user-friendly interface for adjusting and remixing isolated instrument sounds",
            "Ensure adaptability across various musical genres and complex audio environments"
          ]
        },
        {
          title: "3.8 Real-Time Indian Sign Language (ISL) to Text and Speech Translator",
          description: "Indian Sign Language (ISL) users face communication barriers due to the lack of real-time translation tools. Develop an AI-powered solution that translates ISL gestures into text and speech instantly, enabling seamless interaction for the deaf and hard-of-hearing community. The system should leverage deep learning, computer vision, and NLP to ensure accurate and contextual translation.",
          objectives: [
            "Utilize deep learning models, such as CNNs and LSTMs, for gesture recognition from live video input",
            "Implement a dataset trained specifically on ISL gestures to improve translation accuracy",
            "Develop real-time text and speech synthesis using NLP and text-to-speech (TTS) technologies",
            "Ensure the system adapts to various lighting conditions, hand positions, and sign variations",
            "Create a mobile and web-based application for accessibility and ease of use"
          ]
        }
      ]
    }
  };

function ProblemCard({ problem, color }: any) {
  return (
    <Card className={`h-[calc(100vh-20rem)] bg-gradient-to-br ${color} backdrop-blur-sm border-primary/20 overflow-auto`}>
      <CardHeader className="sticky top-0 z-10 bg-inherit border-b border-primary/10 pb-4">
        <CardTitle className="text-2xl font-bold">{problem.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <p className="text-muted-foreground text-base leading-relaxed">{problem.description}</p>
        <div>
          <h4 className="font-semibold mb-3 text-lg text-primary">Key Objectives:</h4>
          <ul className="space-y-3">
            {problem.objectives.map((objective: string, index: number) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2" />
                <span className="text-muted-foreground text-base">{objective}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

function DomainCarousel({ domain, data, color }: any) {
  if (!data) return null;
  
  return (
    <div className="space-y-4 mx-8">
      <div className="flex space-x-3">
        {/* <div className={`p-3 rounded-lg bg-gradient-to-br ${color}`}>
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold">{data.name}</h2> */}
      </div>
      
      <div className="relative">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className=''>
            {data.problems.map((problem: any, index: number) => (
              <CarouselItem key={index} className="basis-full">
                <div className="p-1">
                  <ProblemCard problem={problem} domain={domain} color={color} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </div>
  );
}

export function ProblemStatements() {
  const [activeDomain, setActiveDomain] = useState<keyof typeof domains>("cyberSecurityGenderDiversity");
  const location = useLocation();
  
  useEffect(() => {
    const selectedDomain = location.state?.selectedDomain || "cyberSecurityGenderDiversity";
    if (selectedDomain && selectedDomain in domains) {
      setActiveDomain(selectedDomain as keyof typeof domains);
    }
  }, [location]);

  if (!domains[activeDomain]) {
    setActiveDomain("cyberSecurityGenderDiversity");
    return null;
  }

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl  font-bold mb-3 glowing-text">Problem Statements</h1>
         
        </motion.div>

        <div className="flex justify-center items-center mr-12 mb-6 space-x-2 sm:space-x-4">
          {(Object.keys(domains) as Array<keyof typeof domains>).map((key) => (
            <button
              key={key}
              onClick={() => setActiveDomain(key)}
              className={`px-2 sm:px-5 py-1 sm:py-2 rounded-lg transition-all duration-300 text-sm sm:text-base ${
                activeDomain === key
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-primary/20"
              }`}
            >
              {domains[key].name}
            </button>
          ))}
        </div>

        <motion.div
          key={activeDomain}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <DomainCarousel
            domain={activeDomain}
            data={domains[activeDomain]}
            color={domains[activeDomain].color}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default ProblemStatements;