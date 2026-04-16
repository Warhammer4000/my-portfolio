import React from "react";
import { motion, type Variants } from "framer-motion";
import { ExternalLink, Database, Activity, Cpu } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "Nexus Resolve",
    description: "An agentic customer support routing system that autonomously resolves tier-1 tickets and pre-processes complex queries for human agents.",
    tech: ["GPT-4o", "LangChain", "Pinecone", "FastAPI"],
    outcome: "Reduced support tickets by 60%",
    icon: <Activity className="w-5 h-5 text-primary" />
  },
  {
    id: 2,
    name: "DocuMind RAG",
    description: "Enterprise-grade retrieval-augmented generation pipeline over 500k+ technical documents with sub-second semantic search.",
    tech: ["LlamaIndex", "Claude 3", "Weaviate", "TypeScript"],
    outcome: "99.2% retrieval accuracy",
    icon: <Database className="w-5 h-5 text-primary" />
  },
  {
    id: 3,
    name: "CodePilot Assistant",
    description: "Internal developer tool that generates boilerplate, writes tests, and reviews pull requests strictly adhering to company style guides.",
    tech: ["Anthropic", "Python", "Docker", "GitHub Actions"],
    outcome: "Saved 15 hours/dev/week",
    icon: <Cpu className="w-5 h-5 text-primary" />
  },
  {
    id: 4,
    name: "Insight Flow",
    description: "Automated data analysis agent that queries SQL databases, generates visualizations, and drafts executive summaries from natural language prompts.",
    tech: ["GPT-4", "SQLAlchemy", "Pandas", "React"],
    outcome: "Automated 80% of reporting",
    icon: <Activity className="w-5 h-5 text-primary" />
  }
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
};

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-24 relative bg-card/50 border-y border-white/5">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" data-testid="products-heading">
            Featured AI Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Not just demos or wrappers. These are production-ready systems that solve complex business logic with agentic workflows and LLMs.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={item}>
              <Card className="h-full bg-secondary/30 border-white/10 hover:border-primary/50 transition-colors duration-300 flex flex-col group overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary transition-all duration-700 opacity-0 group-hover:opacity-100" />
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2.5 rounded-lg bg-secondary border border-white/5">
                      {product.icon}
                    </div>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {product.outcome}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors" data-testid={`product-title-${product.id}`}>
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-sm md:text-base text-muted-foreground mt-2 line-clamp-2">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {product.tech.map((t) => (
                      <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-secondary/50 text-muted-foreground border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
