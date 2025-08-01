import {
  UserLock,
  Wifi,
  Layers,
  User,
  Mail,
  Phone,
  MessageSquare,
  Settings,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

import ActiveRackImage from "./assets/images/active-rack.png";
import ColocationImage from "./assets/images/colocation-services.jpg";
import InfrastructureImage from "./assets/images/infrastructure.jpg";
import Own from "./assets/icons/own.png";
import Data from "./assets/icons/data.png";
import Colocation from "./assets/icons/colocation.png";
import Script from "./assets/icons/11600310.png";
import Baremetal from "./assets/icons/baremetal.png";
import CarrierNeutralConnectivity1 from "./assets/icons/Carrier-Neutral-Connectivity-1.png";
import CarrierNeutralConnectivity from "./assets/icons/Carrier-Neutral-Connectivity.png";
import Cloud18457700 from "./assets/icons/cloud_18457700.png";
import ComplianceReadyEnvironment from "./assets/icons/Compliance-Ready-Environment.png";
import ComplianceReady from "./assets/icons/Compliance-Ready.png";
import ComprehensiveITSupport from "./assets/icons/Comprehensive-IT-Support.png";
import CoolingSyste from "./assets/icons/cooling-syste.png";
import CostEffectiveDeployment from "./assets/icons/Cost-Effective-Deployment.png";
import DedicatedSpace from "./assets/icons/Dedicated-Space.png";
import EnvironmentalMonitoring from "./assets/icons/Environmental-Monitoring.png";
import FacilityAccess from "./assets/icons/Facility-Access.png";
import FireSuppressionSystem from "./assets/icons/Fire-Suppression-Systems.png";
import FractionalOwnershipTokenizationReady from "./assets/icons/Fractional-Ownership-Tokenization-Ready.png";
import FullServiceOption from "./assets/icons/Full-Service-Option.png";
import Full from "./assets/icons/full.png";
import FullyAudible from "./assets/icons/fullyaudible.png";
import High from "./assets/icons/high.png";
import HybridWork from "./assets/icons/hybrid-work.png";
import IronCloud from "./assets/icons/iron-cloud.png";
import MonitoringReporting from "./assets/icons/Monitoring-Reporting.png";
import OneServerOneClient from "./assets/icons/oneserveroneclient.png";
import PatchUpdateManagement from "./assets/icons/Patch-Update-Management.png";
import PhysicalSecurity from "./assets/icons/Physical-Security.png";
import Plug444230 from "./assets/icons/plug_444230.png";
import ReadyToDeploy from "./assets/icons/Ready-to-Deploy.png";
import RealCompute from "./assets/icons/realcompute.png";
import RecipeBook906995 from "./assets/icons/recipe-book_906995.png";
import RemoteHandsSmartHands from "./assets/icons/Remote-Hands-Smart-Hands.png";
import Robot from "./assets/icons/robot_739734.png";
import Server from "./assets/icons/server.png";
import ServerDual from "./assets/icons/server_dual.png";
import ShoppingBag from "./assets/icons/shopping-bag_18661567.png";
import StandardCabinets from "./assets/icons/StandardCabinets.png";
import Storage from "./assets/icons/storage.png";
import TailoredComputeVaults from "./assets/icons/Tailored-Compute-Vaults.png";
import Transparency from "./assets/icons/transparency.png";

export const navItems = [
  { id: 1, label: "DATA CENTER", to: "/data-center" },
  {
    id: 1,
    label: "COLOCATION",
    to: "",
    items: [
      { id: 1, label: "ACTIVE RACK", to: "active-rack" },
      { id: 2, label: "PASSIVE RACK", to: "passive-rack" },
    ],
  },
  { id: 1, label: "MANAGED SERVICES", to: "/managed-services" },
  { id: 1, label: "FOR INVESTORS", to: "/investor" },
  { id: 1, label: "WEB 3 COMING", to: "/web3-infrastructure" },
  { id: 1, label: "PARTNERSHIP", to: "/partnership" },
  { id: 1, label: "CONTACT US", to: "/contact" },
];

export const Usps = [
  {
    id: 1,
    image: Own,
    title: "Own Your Data Centre",
    description: [
      "Why rent a piece of someone else’s cloud when you can own the infrastructure?",
      "IRON DATA VAULTS enables enterprises and institutions to own their rack space in a sovereign, secure facility with full control.",
    ],
  },
  {
    id: 2,
    image: Data,
    title: "Your Data, Your Sovereignty",
    description: [
      "Hosted in India. Controlled by you.",
      "We reject the notion of foreign data dependency. With Iron, you know where your data lives—and who’s watching it: Only You.",
    ],
  },
  {
    id: 3,
    image: Colocation,
    title: "Colocation with Power Freedom",
    description: [
      "High-density racks with dedicated power channels.",
      "We offer flexible power configurations with precise metered billing, ensuring you pay only for the power you consume.",
    ],
  },
  {
    id: 4,
    image: HybridWork,
    title: "Hybrid Choice: Managed or Unmanaged",
    description: [
      "Full control or full support—your choice.",
      "Opt for complete control with unmanaged hosting or choose our expert-managed services for peace of mind.",
    ],
  },
  {
    id: 5,
    image: ServerDual,
    title: "Dual-Site Redundancy",
    description: [
      "Our Delhi + Dehradun model ensures business continuity.",
      "Choose active-passive or geo-redundant setups for mission-critical applications across our two strategic locations.",
    ],
  },
  {
    id: 6,
    image: IronCloud,
    title: "Iron-Clad Security",
    description: [
      "Physical, network, and operational security that meets enterprise standards.",
      "Multi-layered security zones, 24/7 CCTV, biometric access, and full compliance audits ensure data protection.",
    ],
  },
  {
    id: 7,
    image: Plug444230,
    title: "Plug-and-Scale Ready",
    description: [
      "Bring your servers or let us build it for you.",
      "Designed to host everything from a single rack to your full AI/ML cluster, IRON DATA VAULTS grows with your ambitions.",
    ],
  },
  {
    id: 8,
    image: ShoppingBag,
    title: "No Hidden Charges,",
    description: [
      "Transparent pricing. No cloud traps.",
      "Colocate with a contract that respects your independence—with clear SLAs, no forced upgrades, and no surprise pricing hikes.",
    ],
  },
  {
    id: 9,
    image: Robot,
    title: "Designed for AI & Future Workloads",
    description: [
      "Built with tomorrow’s computing in mind.",
      "GPU-ready vaults and liquid cooling capability available on demand. Stay ready for AI, ML, blockchain, or quantum workloads.",
    ],
  },
  {
    id: 10,
    image: Script,
    title: "Digital India Compliant, Future-Ready",
    description: [
      "Data localization laws? We’re already there.",
      "Our infrastructure complies with Indian data regulations and is designed for upcoming policy frameworks, including government & public sector hosting.",
    ],
  },
];

export const additionalUSPs = [
  {
    id: 1,
    image: RecipeBook906995,
    title: "Dual-Site Redundancy",
    description: [
      "Our Delhi + Dehradun model ensures business continuity.",
      "Choose active-passive or geo-redundant setups for mission-critical applications across our two strategic locations.",
    ],
  },
  {
    id: 2,
    image: Cloud18457700,
    title: "Say Goodbye to Cloud Fakery",
    description: [
      "Most cloud companies virtualize multiple clients on a single machine—but market it as a private server.",
      "At Iron, we don’t mask or overbook hardware. Every rack you rent is dedicated space, not a slice of a shared lie.",
    ],
  },
  {
    id: 3,
    image: Server,
    title: "Protect Your Expensive Servers",
    description: [
      "Your investment in high-performance servers deserves more than an opaque cloud farm.",
      "With us, your physical assets are kept in a controlled, monitored, and access-restricted environment, where only you or your authorized team touches your hardware.",
    ],
  },
  {
    id: 4,
    image: Transparency,
    title: "Transparency is a Policy, Not a Feature",
    description: [
      "No black boxes. No vendor lock-in.",
      "You get complete visibility into your deployment, resource usage, power consumption, and access logs. No hidden containers. No hidden clients.",
    ],
  },
  {
    id: 5,
    image: OneServerOneClient,
    title: "One Server. One Client. Always",
    description: [
      "No noisy neighbors, no shadow workloads.",
      "Unlike shared cloud environments, your server at Iron only serves your business—not ten others hiding behind a hypervisor.",
    ],
  },
  {
    id: 6,
    image: RealCompute,
    title: "Real Compute Power, Not Virtual Illusions",
    description: [
      "What you deploy is what you get—no throttling, no sharing, no surprises.",
      "Unlike cloud providers that mask cores and overcommit CPUs, Iron delivers dedicated, raw compute power you can benchmark and trust.",
    ],
  },
  {
    id: 7,
    image: Storage,
    title: "Storage You Can See and Touch",
    description: [
      "Cloud platforms often sell “storage” that’s virtual, pooled, or throttled.",
      "At Iron, your data sits on your physical drives—NVMe, SSD, or enterprise-grade HDDs—completely under your control, with transparent IOPS performance and no backend dilution.",
    ],
  },
  {
    id: 8,
    image: Baremetal,
    title: "Bare-Metal Honesty",
    description: [
      "We don’t virtualize reality.",
      "If you rent a 64-core machine with 1TB RAM and 10TB NVMe, you get exactly that—and no one else shares it.",
    ],
  },
  {
    id: 9,
    image: FullyAudible,
    title: "Enterprise-Grade Hardware, Fully Auditable",
    description: [
      "No consumer junk, no mystery specs.",
      "We support and provision only Tier-1 infrastructure—Dell, Supermicro, HP, or client-specified brands. Every component is cataloged, visible, and optionally auditable.",
    ],
  },
  {
    id: 10,
    image: Script,
    title: "No Overselling. No Shared Bloat.",
    description: [
      "We never sell more than we can deliver.",
      "Every client has physically isolated compute and storage environments. That means no performance bleed, no noisy neighbors, and no backend lies.",
    ],
  },
];

export const BenefitsData = [
  {
    id: 1,
    icon: UserLock,
    title: "Security & compliance",
    description:
      "Meet your industry-specific regulatory requirements with our security best practices, multi-level access authentication, and dedicated, purpose-trained security personnel deployed 24/7.",
  },
  {
    id: 2,
    icon: Wifi,
    title: "Connectivity & reliability",
    description:
      "Seamlessly integrate, aggregate, and exchange traffic across IP, cloud, and content ecosystems with deterministic latency—leveraging the robust capabilities and infrastructure of one of India’s leading telecom networks.",
  },
  {
    id: 3,
    icon: Layers,
    title: "Efficiency & growth",
    description:
      "Harnessing efficient green energy and modular PoD-based design, combined with the power of economies of scale, enables optimized TCO and drives sustainable business growth.",
  },
];

export const ContactFormFields = [
  {
    name: "First Name",
    label: "First Name",
    placeholder: "John",
    type: "text",
    component: "input",
    required: true,
    rules: {
      required: "First Name is required",
      minLength: {
        value: 3,
        message: "First Name must be at least 3 characters long",
      },
      maxLength: {
        value: 100,
        message: "First Name must not exceed 100 characters",
      },
    },
  },
  {
    name: "Last Name",
    label: "Last Name",
    placeholder: "Doe",
    type: "text",
    component: "input",
    required: true,
    rules: {
      required: "Last Name is required",
      minLength: {
        value: 3,
        message: "Last Name must be at least 3 characters long",
      },
      maxLength: {
        value: 100,
        message: "Last Name must not exceed 100 characters",
      },
    },
  },
  {
    name: "Email",
    label: "Email",
    placeholder: "john.doe@example.com",
    type: "email",
    component: "input",
    required: true,
    rules: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Please enter a valid email address",
      },
    },
  },
  {
    name: "Phone",
    label: "Phone",
    placeholder: "+91 12345-67890",
    type: "tel",
    component: "input",
    required: false,
    rules: {
      pattern: {
        value: /^\+?[0-9\s\-().]{7,15}$/,
        message: "Please enter a valid phone number",
      },
    },
  },
  {
    name: "Inquiry Type",
    label: "Inquiry Type",
    type: "select",
    placeholder: "Select Category",
    options: [
      "For Partnership",
      "For Investors",
      "For Web 3 Infrastructure",
      "For any other inquiries",
    ],
    required: true,
    rules: {
      required: "Inquiry Type is required",
    },
  },
  {
    name: "Message",
    label: "Message",
    type: "textarea",
    placeholder: "Enter your message...",
    required: false,
  },
];

export const socialMediaLinks = [
  { id: 1, label: "facebook", to: "#", icon: Facebook },
  { id: 2, label: "instagram", to: "#", icon: Instagram },
  { id: 3, label: "linkedin", to: "#", icon: Linkedin },
  { id: 4, label: "twitter", to: "#", icon: Twitter },
];

export const activeRackFeatures = [
  {
    id: 1,
    image: Full,
    title: "Full or Partial Rack Options",
    description:
      "Adaptable rack solutions tailored to fit diverse infrastructure requirements.",
  },
  {
    id: 2,
    image: High,
    title: "High-Density Power",
    description:
      "Ensures reliability and scalability with redundant power feeds and robust support for high-density computing.",
  },
  {
    id: 3,
    image: CoolingSyste,
    title: "Redundant Cooling",
    description:
      "Built-in cooling redundancy ensures reliable performance and temperature control.",
  },
  {
    id: 4,
    image: PhysicalSecurity,
    title: "Physical Security",
    description:
      "Biometric access control, CCTV surveillance, and 24/7 on-site security personnel presence.",
  },
  {
    id: 5,
    image: CarrierNeutralConnectivity,
    title: "Carrier Neutral Connectivity",
    description:
      "Access to multiple Tier 1 carriers and cloud on-ramps with low-latency peering options.",
  },
  {
    id: 6,
    image: RemoteHandsSmartHands,
    title: "Remote Hands & Smart Hands",
    description:
      "On-demand technical support to handle reboots, patching, or equipment installation.",
  },
  {
    id: 7,
    image: MonitoringReporting,
    title: "Monitoring & Reporting",
    description:
      "Real-time power usage, temperature, and bandwidth monitoring through a centralized dashboard.",
  },
  {
    id: 8,
    image: ComplianceReady,
    title: "Compliance Ready",
    description:
      "Designed to meet rigorous industry standards for security, trust, and regulatory compliance.",
  },
];

export const passiveRackFeatures = [
  {
    id: 1,
    image: StandardCabinets,
    title: "Standard Cabinets",
    description:
      "Optimized for passive infrastructure and scalable to meet evolving needs.",
  },
  {
    id: 2,
    image: FacilityAccess,
    title: "24/7 Facility Access",
    description:
      "Secure access with biometric authentication and on-site personnel.",
  },
  {
    id: 3,
    image: CarrierNeutralConnectivity1,
    title: "Carrier-Neutral Connectivity",
    description:
      "Seamless integration with major ISPs and cross-connect options.",
  },
  {
    id: 4,
    image: EnvironmentalMonitoring,
    title: "Environmental Monitoring",
    description:
      "Track humidity, airflow, and temperature for optimal equipment health.",
  },
  {
    id: 5,
    image: DedicatedSpace,
    title: "Dedicated Space",
    description:
      "Physical segregation ensures cable integrity and simplifies asset management.",
  },
  {
    id: 6,
    image: CostEffectiveDeployment,
    title: "Cost-Effective Deployment",
    description:
      "Pay only for the space and features you use, no hidden power costs.",
  },
  {
    id: 7,
    image: FireSuppressionSystem,
    title: "Fire Suppression Systems",
    description: "Advanced safety for cable-heavy or static rack environments.",
  },
  {
    id: 8,
    image: ComplianceReadyEnvironment,
    title: "Compliance Ready Environment",
    description:
      "Aligned with industry-recognized security and compliance standards.",
  },
];

export const managedServices = [
  {
    id: 1,
    image: ComprehensiveITSupport,
    title: "Comprehensive IT Support",
    description:
      "Get round-the-clock technical assistance, troubleshooting, and proactive maintenance to minimize downtime and keep operations running at peak performance.",
  },
  {
    id: 2,
    image: RemoteHandsSmartHands,
    title: "Remote Hands & Eyes",
    description:
      "Need assistance with physical equipment tasks? Our on-site engineers are available 24/7 for hardware reboots, cable management, media swaps, and visual inspections.",
  },
  {
    id: 3,
    image: FacilityAccess,
    title: "Security Management",
    description:
      "We monitor and manage firewalls, VPNs, and access controls to protect your infrastructure from internal and external threats.",
  },
  {
    id: 4,
    image: IronCloud,
    title: "Cloud Integration & Migration",
    description:
      "Seamlessly connect on-prem systems to public, private, or hybrid cloud platforms with expert guidance and ongoing support.",
  },
  {
    id: 5,
    image: ServerDual,
    title: "Backup & Disaster Recovery",
    description:
      "Protect your data with automated backup solutions and robust disaster recovery planning that ensure business continuity.",
  },
  {
    id: 6,
    image: CarrierNeutralConnectivity,
    title: "Network Management",
    description:
      "From bandwidth optimization to IP management and performance tuning, we ensure reliable, high-speed connectivity.",
  },
  {
    id: 7,
    image: PatchUpdateManagement,
    title: "Patch & Update Management",
    description:
      "Stay secure and compliant with timely OS and application updates handled by our team.",
  },
  {
    id: 8,
    image: MonitoringReporting,
    title: "Performance Monitoring & Reporting",
    description:
      "Gain insight into system health and usage with real-time monitoring, alerts, and monthly performance reports.",
  },
];

export const whyChooseUs = [
  {
    id: 1,
    title: "Expertise",
    description: "Certified professionals managing complex environments.",
  },
  {
    id: 2,
    title: "Reliability",
    description: "SLA-backed uptime with real-time performance insights.",
  },
  {
    id: 3,
    title: "Security-First Approach",
    description: "Industry-leading security measures built-in.",
  },
  {
    id: 4,
    title: "Scalability",
    description: "Easily scale services with business growth.",
  },
];

export const dataCenterFeatures = [
  {
    id: 1,
    image: Full,
    title: "Pre-Built High-Density Racks",
    description: [
      "Compatible with NVIDIA H100, AMD MI300, and other high TDP GPUs",
      "Intelligent cable management & redundant power channels",
    ],
  },
  {
    id: 2,
    image: CoolingSyste,
    title: "Advanced Cooling Infrastructure",
    description: [
      "Custom direct-to-chip liquid cooling retrofits",
      "Optional immersion cooling tanks",
      "On-site chillers and thermal management ready",
    ],
  },
  {
    id: 3,
    image: FacilityAccess,
    title: "Secure & Modular Vault Architecture",
    description: [
      "Each vault is independent, with private firewalls, UPS, and surveillance",
      "Enterprise-grade access controls, biometric & RFID options",
    ],
  },
  {
    id: 4,
    image: High,
    title: "Power and Redundancy",
    description: [
      "Dual grid feeds, diesel backup, and solar integration (select locations)",
      "Active load monitoring with AI-driven optimization",
    ],
  },
  {
    id: 5,
    image: ComprehensiveITSupport,
    title: "Compliance & Sustainability",
    description: [
      "Tier III standards & ISO 27001 in progress",
      "Green project credentials, low PUE targets & carbon offset integrations",
    ],
  },
];

export const deliveryModel = [
  {
    id: 1,
    image: ReadyToDeploy,
    title: "Ready-to-Deploy",
    description:
      "Clients can bring their own GPU servers and deploy within hours. Power, cooling, and connectivity are pre-integrated.",
  },
  {
    id: 2,
    image: TailoredComputeVaults,
    title: "Tailored Compute Vaults",
    description: [
      "We customize vaults based on your workload",
      "• GPU density",
      "• Cooling needs",
      "• Networking topology",
      "• Compliance requirements",
    ],
  },
  {
    id: 3,
    image: FullServiceOption,
    title: "Full-Service Option",
    description: [
      "Don’t have a tech team? We offer",
      "• Server procurement",
      "• Installation & maintenance",
      "• Remote hands, migration & orchestration",
    ],
  },
  {
    id: 4,
    image: FractionalOwnershipTokenizationReady,
    title: "Fractional Ownership (Tokenization-Ready)",
    description: [
      "Own a slice of the infrastructure via Web3-backed models. Ideal for",
      "• AI startups needing physical control",
      "• Cloud resellers",
      "• International enterprises seeking data sovereignty",
    ],
  },
];

export const fullStackDataCenterServer = [
  {
    id: 1,
    title: "Vaults and Cabinets",
    img: ActiveRackImage,
    description:
      "Access a share of our resilient, secure, and ready-to-deploy white space.",
  },
  {
    id: 2,
    title: "Private Vaults",
    img: ColocationImage,
    description:
      "Empower your operations with a fully isolated space—complete with enterprise-grade electrical.",
  },
  {
    id: 3,
    title: "Dedicated server Vaults",
    img: InfrastructureImage,
    description: "Scalable multi-tower data center parks—designed and built.",
  },
];
