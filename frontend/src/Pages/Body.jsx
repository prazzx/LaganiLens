import hero from "../Assets/hero.png"
import hero2 from "../Assets/hero2.png"
import { useNavigate } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

import {
  LineChart,
  Database,
  Brain,
  Search,
  AlertTriangle,
  ArrowRight,
} from "lucide-react"

export default function Body() {
  const navigate = useNavigate()

  return (
    <>
      {/* ================= HERO ================= */}
<section className="min-h-[calc(100vh-4rem)] -mt-2">

        <div className=" pt-3 mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left */}
          <div className="space-y-8">
            <Badge variant="secondary" className="w-fit">
              Academic AI / ML Project
            </Badge>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight">
              LaganiLens <br />
              <span className="text-primary">
                NEPSE Market Intelligence
              </span>
            </h1>

            <p className="text-muted-foreground text-lg max-w-xl">
              An end-to-end AI/ML project that collects, cleans, analyzes and
              predicts trends from Nepal Stock Exchange (NEPSE) data.
            </p>

            <div className="flex gap-4">
              <Button size="lg" onClick={() => navigate("/signup")}>
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-10 pt-6">
              <div>
                <p className="text-3xl font-bold">3+ yrs</p>
                <p className="text-sm text-muted-foreground">Market Data</p>
              </div>
              <div>
                <p className="text-3xl font-bold">ML</p>
                <p className="text-sm text-muted-foreground">Driven Analysis</p>
              </div>
              <div>
                <p className="text-3xl font-bold">NEPSE</p>
                <p className="text-sm text-muted-foreground">Focused</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-primary/20 to-purple-500/20 blur-3xl" />
            <img
              src={hero}
              alt="LaganiLens Dashboard"
              className="rounded-2xl shadow-2xl border"
            />
          </div>
        </div>
      </section>

      <Separator />

      {/* ================= FEATURES ================= */}
      <section id="features" className="py-24 bg-muted/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold">
              What You’ll Learn
            </h2>
            <p className="text-muted-foreground mt-4">
              A complete real-world data science pipeline using Nepali stock
              market data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Database />}
              title="Data Acquisition"
              desc="Scrape and collect historical NEPSE data using real-world techniques."
            />

            <FeatureCard
              icon={<Search />}
              title="EDA & Cleaning"
              desc="Understand trends, remove noise, and prepare stock data for modeling."
            />

            <FeatureCard
              icon={<LineChart />}
              title="Market Analysis"
              desc="Visualize movements, patterns, and volatility in NEPSE stocks."
            />

            <FeatureCard
              icon={<Brain />}
              title="Machine Learning"
              desc="Apply ML models to forecast trends and evaluate predictions."
            />

            <FeatureCard
              icon={<AlertTriangle />}
              title="Limitations"
              desc="Understand why stock prediction is hard—especially in emerging markets."
            />

            <FeatureCard
              icon={<LineChart />}
              title="Academic Ready"
              desc="Perfectly structured for final-year projects and evaluations."
            />
          </div>
        </div>
      </section>

      {/* ================= IMAGE + STORY ================= */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img
            src={hero2}
            alt="NEPSE Analysis"
            className="rounded-2xl shadow-xl border"
          />

          <div className="space-y-6">
            <Badge>Why LaganiLens?</Badge>

            <h3 className="text-3xl font-bold">
              Built for Nepal. Built for Learning.
            </h3>

            <p className="text-muted-foreground text-lg">
              Most stock-market ML projects focus on US or EU markets.
              LaganiLens is designed specifically around NEPSE—its structure,
              volatility, and data limitations.
            </p>

            <Button variant="outline" onClick={() => navigate("/signup")}>
              Start Exploring
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

function FeatureCard({ icon, title, desc }) {
  return (
    <Card className="hover:shadow-lg transition">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="p-3 rounded-xl bg-primary/10 text-primary">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-muted-foreground">
        {desc}
      </CardContent>
    </Card>
  )
}
