"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, ChevronDown } from "lucide-react"
import Image from "next/image"
//Perros
import PerrooImg from "@/components/images/Perritos/perro16.webp"
import PerroImg from "@/components/images/Perritos/perro2.webp"
import PerroImg2 from "@/components/images/Perritos/perro3.webp"






//Farmacia
import Img1 from "@/components/images/farmacia/Captura-de-pantalla-2025-10-31-005957.webp"
import Img3 from "@/components/images/farmacia/Captura de pantalla 2025-10-31 010037.webp"
import Img4 from "@/components/images/farmacia/Captura de pantalla 2025-10-31 010056.webp"
import Img2 from "@/components/images/farmacia/Captura-de-pantalla-2025-10-31-010020.webp"


//Padel
import PImg1 from "@/components/images/padel/1.webp"
import PImg2 from "@/components/images/padel/2.webp"
import PImg3 from "@/components/images/padel/3.webp"
import PImg4 from "@/components/images/padel/4.webp"
import PImg5 from "@/components/images/padel/5.webp"


import Logo from "@/components/images/tango/Logo.png"
import TImg1 from "@/components/images/tango/Captura de pantalla 2025-10-31 102909.png"
import TImg2 from "@/components/images/tango/Captura de pantalla 2025-10-31 102924.png"
import TImg3 from "@/components/images/tango/Captura de pantalla 2025-10-31 102939.png"

//Furniture

import Fur1 from "@/components/images/furniture/Captura de pantalla 2025-10-31 110725.webp"
import Fur2 from "@/components/images/furniture/Captura de pantalla 2025-10-31 110736.webp"
import Fur3 from "@/components/images/furniture/Captura de pantalla 2025-10-31 110746.webp"
import Fur4 from "@/components/images/furniture/Captura de pantalla 2025-10-31 111040.webp"

//Panaderia
import Logopp from "@/components/images/logop.png"
import PanaderiaImg from "@/components/images/file_2025-10-31_03.44.01.png"



import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const containImages = [PImg1, PImg2, PImg3, TImg1, TImg2, TImg3, Img3];
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects = [
    {
      id: 1,
      title: "Modern Pet Store E-commerce Platform",
      shortDescription: "A custom programming language compiler with optimization features.",
      description: "A custom programming language compiler with advanced optimization features.",
      image: PerrooImg,
      images: [PerrooImg, PerroImg, PerroImg2],
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Full-stack"],
      features: [
        "Plataforma E-commerce completa",
        "Catálogo de productos dinámico",
        "Carrito de compras y checkout seguro",
        "Autenticación de usuarios",
        "Diseño responsive y moderno (UI/UX)",
        "Renderizado del lado del servidor (SSR) para optimización",
      ],
      githubLink: "https://github.com/Tangodownd",
      fullDescription:
        "Este proyecto es una plataforma de e-commerce full-stack, construida desde cero con un stack moderno que incluye Next.js, TypeScript y Tailwind CSS. La aplicación ofrece una experiencia de compra completa, desde la exploración de productos por categorías hasta un proceso de pago seguro. Implementa renderizado del lado del servidor para un rendimiento óptimo y un diseño completamente responsive que se adapta a cualquier dispositivo, garantizando una interfaz de usuario limpia y moderna.",
    },
    {
      id: 2,
      title: "Website & E-commerce: Furniture Store",
      shortDescription: "Modern storefront with product variants, cart, and secure checkout.",
      description: "Next.js storefront with SSR/SEO, admin CMS, and payment integration for a furniture brand.",
      image: Fur1,
      images: [Fur1, Fur2, Fur3, Fur4],
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Stripe", "Prisma", "PostgreSQL"],
      features: [
        "Product catalog with filters, variants, and inventory tracking",
        "Shopping cart, discount codes, and secure checkout (Stripe)",
        "Server-side rendering (SSR) and structured SEO for better ranking",
        "Admin CMS: products, collections, pricing and media management",
        "Responsive UI and accessibility-first design",
      ],
      githubLink: "https://github.com/Tangodownd",
      fullDescription:
        "A full-featured furniture e-commerce built on Next.js and TypeScript. It includes a rich catalog with variants (size, material, finish), inventory tracking, a performant cart and secure Stripe checkout. The admin CMS allows editors to manage products, collections, pricing, and media. SSR and structured metadata improve SEO and performance. The UI uses Tailwind and shadcn/ui components to ensure a consistent, accessible experience across devices.",
    },
    {
      id: 3,
      title: "SaaS Reservations & AI Chatbot: Pro Pádel Club",
      shortDescription: "Sports booking SaaS with an AI WhatsApp chatbot.",
      description: "Real-time booking platform with admin analytics and a ML chatbot integrated via Twilio.",
      image: PImg1,
      images: [PImg1, PImg2, PImg3, PImg4, PImg5],
      tags: ["Vue 3", "Laravel 10", "MySQL", "FastAPI (Python)", "scikit-learn", "Twilio WhatsApp API", "JWT", "Docker"],
      features: [
        "Real-time bookings and scheduling",
        "Tournament and event management",
        "Admin panel with analytics and role-based access",
        "ML chatbot for bookings, cancellations, and FAQs",
        "WhatsApp integration for reservations and payments",
      ],
      githubLink: "https://github.com/Tangodownd",
      fullDescription:
        "Full-stack development of a sports reservation SaaS extended with an AI chatbot. The system handles real-time bookings, tournaments, events, and an admin panel with analytics and role-based access. The chatbot, integrated with Twilio for WhatsApp, automates over 70% of reservations (new bookings, cancellations, and queries), orchestrating payment and booking flows reliably.",
    },
    {
      id: 4,
      title: "E-commerce + Conversational AI: Panadería Orquídea de Oro",
      shortDescription: "E-commerce enhanced with a RAG-powered WhatsApp chatbot.",
      description:
        "Conversational commerce with NLU, semantic search, and order orchestration with stock validation.",
      image: Logopp,
      images: [PanaderiaImg],
      tags: ["Laravel (PHP)", "Vue 3", "MySQL", "Node.js (Express)", "FastAPI (Python)", "FAISS/pgvector", "Twilio WhatsApp API", "scikit-learn"],
      features: [
        "RAG + NLU chatbot for catalog browsing and queries",
        "Intent classification and semantic product search",
        "Order orchestration with stock validation and checkout",
        "WhatsApp (Twilio) integration with interactive confirmations",
        "Laravel service mapping intents into existing controllers",
      ],
      githubLink: "https://github.com/Tangodownd",
      fullDescription:
        "An existing e-commerce was augmented with a conversational commerce system powered by RAG and NLU. The assistant classifies intents, performs semantic catalog search, and orchestrates the order flow with stock validation and checkout. Integrated with Twilio for WhatsApp, it enables interactive confirmations and automatic receipts—automating over 70% of customer interactions and increasing WhatsApp conversion.",
    },
    {
      id: 5,
      title: "Conversational Assistant & BI: Farmacia Internacional C.A",
      shortDescription: "Pharmacy ops with a RAG assistant and demand forecasting.",
      description: "Natural-language queries, stock optimization, and analytics for faster decision-making.",
      image: Img1,
      images: [Img1, Img3, Img4, Img2],
      tags: ["Node.js (Express, Jest)", "Vue 3 (Cypress)", "FastAPI (Python, PyTest)", "PostgreSQL + pgvector", "Pandas", "NumPy", "scikit-learn", "TensorFlow/Keras", "OpenAI API"],
      features: [
        "RAG assistant for inventory, sales, and expiration queries",
        "ML models for demand forecasting and stock optimization",
        "Decision automation inside the chat flow",
        "Designed for non-technical staff (high adoption)",
        "Integrated data and analytics for faster decisions",
      ],
      githubLink: "https://github.com/Tangodownd",
      fullDescription:
        "I designed and developed a pharmacy management platform with a conversational assistant that enables natural-language queries for inventory, sales, and expiration dates. We integrated Machine Learning models for demand forecasting and stock optimization, automating routine decisions within the chat and improving planning accuracy. Focused on accessibility for non-technical staff, it improved the speed and quality of operational decisions.",
    },
    {
      id: 6,
      title: "Finances Mobile App: Tango Wallet",
      shortDescription: "Personal finance tracking for income, expenses, and debts.",
      description: "A privacy-first mobile app to manage budgets, categories, recurring payments, and debt repayment—no fund transfers involved.",
      image: Logo,
      images: [TImg1, TImg2, TImg3],
      tags: ["React Native", "Expo", "TypeScript", "Zustand/Redux", "SQLite/Realm", "Node.js (optional sync)", "Notifications"],
      features: [
        "Fast expense/income entry with categories and tags",
        "Budgets with alerts and monthly rollover",
        "Recurring payments and bill reminders (local notifications)",
        "Debt tracker with repayment plans and progress",
        "Offline-first storage with optional cloud backup/sync",
      ],
      githubLink: "#",
      fullDescription:
        "Tango Wallet is a personal finance app focused on clarity, control, and privacy. It lets users capture expenses/income quickly, organize them with categories and tags, plan monthly budgets, and receive reminders for bills and recurring payments. A dedicated debt module helps structure repayment plans and track progress. Data is stored locally (SQLite/Realm) for speed and privacy, with optional encrypted cloud sync—no money transfers or external accounts are involved.",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  expandedProject === project.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setExpandedProject(project.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <div className="relative w-full aspect-video">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className={`transition-transform duration-300 group-hover:scale-105 ${
                          [PImg3, TImg1].includes(project.image) ? 'object-contain' : 'object-cover'
                        }`}
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        priority={index < 3}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.shortDescription}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t"
                      >
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Key Features:</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-4 pt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.githubLink, "_blank")
                              }}
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </Button>

                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedProject(project)
                              }}
                            >
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-4 text-center">
                    <ChevronDown
                      className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                        expandedProject === project.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  {selectedProject.tags.map((tag: string, i: number) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <Carousel className="w-full max-w-3xl mx-auto">
                <CarouselContent>
                  {(selectedProject.images ?? [selectedProject.image]).map((src: any, i: number) => (
                    <CarouselItem key={i}>
                      <div className="relative aspect-video">
                        <Image
                          src={src || "/placeholder.svg"}
                          alt={`${selectedProject.title} - image ${i + 1}`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 90vw, 50vw"
                          priority={i === 0}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 z-10" />
                <CarouselNext className="right-2 top-1/2 -translate-y-1/2 z-10" />
              </Carousel>
              <p className="text-muted-foreground pt-4">{selectedProject.fullDescription}</p>
              
              <div className="flex justify-end gap-4 mt-4">
                <Button variant="outline" asChild>
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
                <Button asChild>
                  <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
