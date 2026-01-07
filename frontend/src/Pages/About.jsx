import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Database,
  LineChart,
  Brain,
  Search,
  AlertTriangle,
  Cpu,
} from "lucide-react"

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4">
            Academic AI / ML Project
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            About{" "}
            <span className="text-primary">
              LaganiLens
            </span>
          </h1>

          <p className="text-slate-800 text-lg mt-4 max-w-2xl mx-auto">
            An academic project exploring the Nepal Stock Exchange using modern
            data science and machine learning techniques.
          </p>
        </div>

        {/* Overview */}
        <Card className="mb-12 border-slate-200">
          <CardHeader>
            <CardTitle className="text-slate-900">
              Project Overview
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4 text-slate-800 leading-relaxed">
            <p>
              LaganiLens focuses on acquiring historical NEPSE (Nepal Stock
              Exchange) data, preprocessing it, and applying machine learning
              techniques to analyze trends and patterns.
            </p>
            <p>
              The goal is to understand the complete pipeline of a real-world
              data science project — from data collection and cleaning to
              exploratory analysis and predictive modeling — using Nepali stock
              market data.
            </p>
          </CardContent>
        </Card>

        {/* Objectives */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">
            What This Project Covers
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Objective
              icon={<Database />}
              title="Data Acquisition"
              desc="Collect historical NEPSE data using web scraping and APIs."
            />
            <Objective
              icon={<Search />}
              title="Data Cleaning & EDA"
              desc="Preprocess data and perform exploratory analysis to uncover patterns."
            />
            <Objective
              icon={<LineChart />}
              title="Market Analysis"
              desc="Analyze trends, volatility, and stock behavior in NEPSE."
            />
            <Objective
              icon={<Brain />}
              title="Machine Learning"
              desc="Apply ML models for trend analysis and price prediction."
            />
            <Objective
              icon={<AlertTriangle />}
              title="Limitations"
              desc="Understand challenges of stock prediction in emerging markets."
              full
            />
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">
            Technology Stack
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-slate-200">
              <CardHeader className="flex flex-row items-center gap-3">
                <Cpu className="text-primary" />
                <CardTitle className="text-slate-900">
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-800">
                React, Tailwind CSS, shadcn/ui, Firebase Authentication
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader className="flex flex-row items-center gap-3">
                <Brain className="text-primary" />
                <CardTitle className="text-slate-900">
                  Data Science
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-800">
                Python, Machine Learning, Data Analysis
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Disclaimer */}
        <Card className="border-l-4 border-yellow-600 bg-yellow-100">
          <CardHeader>
            <CardTitle className="text-slate-900">
              Disclaimer
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-800 leading-relaxed">
            <strong>Important:</strong> This is an academic project intended
            solely for educational purposes. Stock market predictions are
            inherently uncertain and should not be used as the sole basis for
            investment decisions.
          </CardContent>
        </Card>

      </div>
    </div>
  )
}

function Objective({ icon, title, desc, full }) {
  return (
    <Card className={`${full ? "md:col-span-2" : ""} border-slate-200`}>
      <CardHeader className="flex flex-row items-center gap-3">
        <div className="p-2 rounded-lg bg-primary/15 text-primary">
          {icon}
        </div>
        <CardTitle className="text-slate-900">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-slate-800">
        {desc}
      </CardContent>
    </Card>
  )
}

export default About
