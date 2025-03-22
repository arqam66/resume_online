"use client"

import { useState, useEffect } from "react"
import {
  Mail,
  Phone,
  Linkedin,
  Calculator,
  FileText,
  BarChart3,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  PieChart,
  ClipboardCheck,
  ShieldCheck,
  TrendingUp,
  Copy,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"

// Add a direct URL fallback option at the top of the component
const profileImageUrl =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/view-3d-businessman.jpg-uxNCjKCBTJQjOe3SRj7fMnUtnueE4a.jpeg"

export default function DigitalBusinessCard() {
  const { toast } = useToast()
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [isFlipped, setIsFlipped] = useState(false)
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null)
    } else {
      setActiveSection(section)
    }
  }

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)

    toast({
      title: "Copied!",
      description: `${field} copied to clipboard`,
      duration: 2000,
    })

    setTimeout(() => {
      setCopiedField(null)
    }, 2000)
  }

  // Function to flip the card
  const flipCard = () => {
    setIsFlipped(!isFlipped)
  }

  // Pulse animation for contact items
  useEffect(() => {
    const interval = setInterval(() => {
      const contactItems = document.querySelectorAll(".contact-item")
      const randomIndex = Math.floor(Math.random() * contactItems.length)
      const item = contactItems[randomIndex] as HTMLElement

      if (item) {
        item.classList.add("pulse-animation")
        setTimeout(() => {
          item.classList.remove("pulse-animation")
        }, 1000)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Render either the front or back card based on isFlipped state
  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-900 text-white">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 z-0">
        {/* Abstract accounting-themed pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
              <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-white" />
            <rect width="100%" height="100%" fill="url(#smallGrid)" className="text-slate-300" />
          </svg>
        </div>

        {/* Floating accounting symbols */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-slate-700 opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                fontSize: `${Math.random() * 2 + 1}rem`,
                animation: `float ${Math.random() * 10 + 20}s linear infinite`,
              }}
            >
              {i % 5 === 0 ? "$" : i % 5 === 1 ? "¥" : i % 5 === 2 ? "€" : i % 5 === 3 ? "£" : "%"}
            </div>
          ))}
        </div>

        {/* Decorative gradient circles */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-900/30 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-green-900/30 to-transparent rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>
        <div className="absolute top-1/3 left-1/4 w-1/4 h-1/4 bg-gradient-to-br from-purple-900/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center p-4 min-h-screen">
        <div className="w-full max-w-md mx-auto">
          {/* Digital Business Card */}
          <div className="relative mb-8">
            {/* Front Card - Show when not flipped */}
            {!isFlipped && (
              <Card className="shadow-xl bg-slate-800/90 text-white backdrop-blur-sm border-0 rounded-xl overflow-hidden transition-all duration-300">
                <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white overflow-hidden p-6">
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div key={i} className="flex items-center justify-center border border-slate-600/20">
                          {i % 17 === 0 && <Calculator className="w-3 h-3" />}
                          {i % 23 === 0 && <FileText className="w-3 h-3" />}
                          {i % 19 === 0 && <BarChart3 className="w-3 h-3" />}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="w-24 h-24 sm:w-16 sm:h-16 relative rounded-full bg-white/90 flex items-center justify-center shadow-lg border-2 border-white overflow-hidden">
                      <Image
                        src={profileImageUrl || "/placeholder.svg"}
                        alt="Osama Siddiqui"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                        priority
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src =
                            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/view-3d-businessman.jpg-uxNCjKCBTJQjOe3SRj7fMnUtnueE4a.jpeg"
                        }}
                      />
                    </div>

                    <div className="text-center sm:text-left">
                      <h1 className="text-2xl font-bold text-white">Osama Siddiqui</h1>
                      <h2 className="text-sm font-medium text-white/90">External Auditor (ACCA)</h2>
                      <p className="text-xs text-white/80 mt-1">Balancing the Books, Building the Trust</p>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="grid grid-cols-1 gap-4">
                    {/* Phone Contact - Enhanced */}
                    <div className="contact-item relative overflow-hidden rounded-lg border border-transparent hover:border-green-200 transition-all duration-300 group">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-green-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="relative flex items-center p-3">
                        <div className="flex-shrink-0">
                          <div className="bg-green-900/50 p-2 rounded-full group-hover:bg-green-200 transition-colors duration-300 relative overflow-hidden">
                            <Phone className="h-5 w-5 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                            <span className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-20 rounded-full animate-ping-slow"></span>
                          </div>
                        </div>

                        <div className="ml-3 flex-1">
                          <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                            Direct Line
                          </p>
                          <p className="font-medium group-hover:text-green-400 transition-colors duration-300">
                            0345-6198029
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-green-900/50"
                            onClick={() => copyToClipboard("0345-6198029", "Phone")}
                          >
                            {copiedField === "Phone" ? (
                              <Check className="h-4 w-4 text-green-400" />
                            ) : (
                              <Copy className="h-4 w-4 text-green-400" />
                            )}
                          </Button>

                          <a
                            href="https://wa.me/03456198029"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative"
                          >
                            <ExternalLink className="h-4 w-4 text-green-400 group-hover:translate-x-1 transition-all duration-300" />
                            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-[10px] whitespace-nowrap bg-green-900/50 text-green-400 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              Open WhatsApp
                            </span>
                          </a>
                        </div>
                      </div>

                      <div className="h-0.5 w-0 bg-gradient-to-r from-green-500 to-green-400 group-hover:w-full transition-all duration-700 ease-out"></div>
                    </div>

                    {/* Email Contact - Enhanced */}
                    <div className="contact-item relative overflow-hidden rounded-lg border border-transparent hover:border-blue-200 transition-all duration-300 group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-blue-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="relative flex items-center p-3">
                        <div className="flex-shrink-0">
                          <div className="bg-blue-900/50 p-2 rounded-full group-hover:bg-blue-200 transition-colors duration-300 relative overflow-hidden">
                            <Mail className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                            <span className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-20 rounded-full animate-ping-slow"></span>
                          </div>
                        </div>

                        <div className="ml-3 flex-1">
                          <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                            Correspondence
                          </p>
                          <p className="font-medium truncate group-hover:text-blue-400 transition-colors duration-300">
                            osamasiddiqui7809@gmail.com
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-blue-900/50"
                            onClick={() => copyToClipboard("osamasiddiqui7809@gmail.com", "Email")}
                          >
                            {copiedField === "Email" ? (
                              <Check className="h-4 w-4 text-blue-400" />
                            ) : (
                              <Copy className="h-4 w-4 text-blue-400" />
                            )}
                          </Button>

                          <a
                            href="mailto:osamasiddiqui7809@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative"
                          >
                            <ExternalLink className="h-4 w-4 text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-[10px] whitespace-nowrap bg-blue-900/50 text-blue-400 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              Send Email
                            </span>
                          </a>
                        </div>
                      </div>

                      <div className="h-0.5 w-0 bg-gradient-to-r from-blue-500 to-blue-400 group-hover:w-full transition-all duration-700 ease-out"></div>
                    </div>

                    {/* LinkedIn Contact - Enhanced */}
                    <div className="contact-item relative overflow-hidden rounded-lg border border-transparent hover:border-purple-200 transition-all duration-300 group">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-purple-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="relative flex items-center p-3">
                        <div className="flex-shrink-0">
                          <div className="bg-purple-900/50 p-2 rounded-full group-hover:bg-purple-200 transition-colors duration-300 relative overflow-hidden">
                            <Linkedin className="h-5 w-5 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                            <span className="absolute inset-0 bg-purple-400 opacity-0 group-hover:opacity-20 rounded-full animate-ping-slow"></span>
                          </div>
                        </div>

                        <div className="ml-3 flex-1">
                          <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                            Professional Network
                          </p>
                          <p className="font-medium group-hover:text-purple-400 transition-colors duration-300">
                            Osama Siddiqui, ACCA
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-purple-900/50"
                            onClick={() =>
                              copyToClipboard("https://www.linkedin.com/in/osama-siddiqui-8b552a296/", "LinkedIn URL")
                            }
                          >
                            {copiedField === "LinkedIn URL" ? (
                              <Check className="h-4 w-4 text-purple-400" />
                            ) : (
                              <Copy className="h-4 w-4 text-purple-400" />
                            )}
                          </Button>

                          <a
                            href="https://www.linkedin.com/in/osama-siddiqui-8b552a296/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative"
                          >
                            <ExternalLink className="h-4 w-4 text-purple-400 group-hover:translate-x-1 transition-all duration-300" />
                            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-[10px] whitespace-nowrap bg-purple-900/50 text-purple-400 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              View Profile
                            </span>
                          </a>
                        </div>
                      </div>

                      <div className="h-0.5 w-0 bg-gradient-to-r from-purple-500 to-purple-400 group-hover:w-full transition-all duration-700 ease-out"></div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <Badge className="bg-blue-900/50 text-blue-400 hover:bg-blue-800/50 transition-all duration-300 hover:scale-105">
                      IFRS Compliance
                    </Badge>
                    <Badge className="bg-green-900/50 text-green-400 hover:bg-green-800/50 transition-all duration-300 hover:scale-105">
                      Financial Due Diligence
                    </Badge>
                    <Badge className="bg-purple-900/50 text-purple-400 hover:bg-purple-800/50 transition-all duration-300 hover:scale-105">
                      Audit Assurance
                    </Badge>
                    <Badge className="bg-amber-900/50 text-amber-400 hover:bg-amber-800/50 transition-all duration-300 hover:scale-105">
                      Tax Optimization
                    </Badge>
                  </div>

                  <Button onClick={flipCard} className="w-full mt-6 bg-slate-700 hover:bg-slate-600 group">
                    <span className="flex items-center justify-center gap-1">
                      View Portfolio
                      <ChevronDown className="h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Back Card - Show when flipped */}
            {isFlipped && (
              <Card className="shadow-xl bg-slate-800/90 text-white backdrop-blur-sm border-0 rounded-xl overflow-hidden transition-all duration-300">
                <CardContent className="p-0 flex flex-col h-full">
                  <Tabs defaultValue="about" className="w-full flex flex-col h-full">
                    <TabsList className="grid grid-cols-3 rounded-none bg-slate-900 text-slate-300">
                      <TabsTrigger
                        value="about"
                        className="data-[state=active]:bg-slate-800 data-[state=active]:text-white"
                      >
                        Profile
                      </TabsTrigger>
                      <TabsTrigger
                        value="services"
                        className="data-[state=active]:bg-slate-800 data-[state=active]:text-white"
                      >
                        Services
                      </TabsTrigger>
                      <TabsTrigger
                        value="credentials"
                        className="data-[state=active]:bg-slate-800 data-[state=active]:text-white"
                      >
                        Credentials
                      </TabsTrigger>
                    </TabsList>

                    <div className="flex-grow overflow-y-auto">
                      <TabsContent value="about" className="mt-0 p-2 h-full">
                        <div className="mb-4">
                          <h3 className="text-lg font-bold text-white mb-2">The Balance Sheet of Excellence</h3>
                          <p className="text-sm text-slate-300 leading-relaxed">
                            As a meticulous External Auditor, I transform complex financial statements into clear
                            insights that drive business decisions. My approach combines analytical precision with
                            strategic foresight to ensure your financial records tell the true story of your business.
                          </p>
                        </div>

                        <p className="text-sm text-slate-300 leading-relaxed mt-2">
                          Every audit is an opportunity to not just verify numbers, but to uncover the narrative behind
                          them—revealing both risks and opportunities that might otherwise remain hidden in the ledger.
                        </p>

                        <div className="mt-4">
                          <h4 className="text-md font-semibold text-white mb-2">Sector Expertise</h4>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-blue-900/30 hover:bg-blue-900/50 p-2 rounded-lg text-center text-sm transition-colors duration-300 hover:shadow-sm">
                              <p className="font-medium text-blue-400">Manufacturing Ledgers</p>
                            </div>
                            <div className="bg-green-900/30 hover:bg-green-900/50 p-2 rounded-lg text-center text-sm transition-colors duration-300 hover:shadow-sm">
                              <p className="font-medium text-green-400">Retail Accounting</p>
                            </div>
                            <div className="bg-purple-900/30 hover:bg-purple-900/50 p-2 rounded-lg text-center text-sm transition-colors duration-300 hover:shadow-sm">
                              <p className="font-medium text-purple-400">Public Sector Audits</p>
                            </div>
                            <div className="bg-amber-900/30 hover:bg-amber-900/50 p-2 rounded-lg text-center text-sm transition-colors duration-300 hover:shadow-sm">
                              <p className="font-medium text-amber-400">Real Estate Financials</p>
                            </div>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="services" className="mt-0 p-0 h-full">
                        <div className="space-y-0">
                          <div
                            className="border-b border-slate-700 overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-300"
                            onClick={() => toggleSection("audit")}
                          >
                            <div className="flex items-center justify-between p-2 bg-blue-900/30 hover:bg-blue-900/50 transition-colors duration-300">
                              <div className="flex items-center gap-2">
                                <ClipboardCheck className="h-4 w-4 text-blue-400" />
                                <h4 className="font-medium text-blue-400">Financial Statement Audits</h4>
                              </div>
                              {activeSection === "audit" ? (
                                <ChevronUp className="h-4 w-4 text-blue-400" />
                              ) : (
                                <ChevronDown className="h-4 w-4 text-blue-400" />
                              )}
                            </div>
                            {activeSection === "audit" && (
                              <div className="p-2 bg-slate-800 text-sm text-slate-300">
                                <p>
                                  Thorough examination of financial statements ensuring IFRS and GAAP compliance. I
                                  review balance sheets, income statements, cash flow statements, and all supporting
                                  documentation to provide assurance that your financial reporting is accurate and
                                  reliable.
                                </p>
                                <ul className="list-disc list-inside mt-1 text-xs space-y-1">
                                  <li>Balance sheet verification and asset valuation</li>
                                  <li>Income statement analysis and revenue recognition</li>
                                  <li>Cash flow validation and liquidity assessment</li>
                                </ul>
                              </div>
                            )}
                          </div>

                          <div
                            className="border-b border-slate-700 overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-300"
                            onClick={() => toggleSection("risk")}
                          >
                            <div className="flex items-center justify-between p-2 bg-green-900/30 hover:bg-green-900/50 transition-colors duration-300">
                              <div className="flex items-center gap-2">
                                <ShieldCheck className="h-4 w-4 text-green-400" />
                                <h4 className="font-medium text-green-400">Risk & Compliance Assurance</h4>
                              </div>
                              {activeSection === "risk" ? (
                                <ChevronUp className="h-4 w-4 text-green-400" />
                              ) : (
                                <ChevronDown className="h-4 w-4 text-green-400" />
                              )}
                            </div>
                            {activeSection === "risk" && (
                              <div className="p-2 bg-slate-800 text-sm text-slate-300">
                                <p>
                                  Identifying financial risks and compliance gaps before they impact your business. I
                                  conduct comprehensive risk assessments to protect your organization from regulatory
                                  penalties, reputational damage, and financial losses.
                                </p>
                                <ul className="list-disc list-inside mt-1 text-xs space-y-1">
                                  <li>Regulatory compliance assessment and gap analysis</li>
                                  <li>Internal control evaluation and enhancement</li>
                                  <li>Risk mitigation strategy development</li>
                                </ul>
                              </div>
                            )}
                          </div>

                          <div
                            className="border-b border-slate-700 overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-300"
                            onClick={() => toggleSection("optimization")}
                          >
                            <div className="flex items-center justify-between p-2 bg-purple-900/30 hover:bg-purple-900/50 transition-colors duration-300">
                              <div className="flex items-center gap-2">
                                <TrendingUp className="h-4 w-4 text-purple-400" />
                                <h4 className="font-medium text-purple-400">Fiscal Efficiency Optimization</h4>
                              </div>
                              {activeSection === "optimization" ? (
                                <ChevronUp className="h-4 w-4 text-purple-400" />
                              ) : (
                                <ChevronDown className="h-4 w-4 text-purple-400" />
                              )}
                            </div>
                            {activeSection === "optimization" && (
                              <div className="p-2 bg-slate-800 text-sm text-slate-300">
                                <p>
                                  Strategic analysis to reduce costs and maximize profit margins. I help businesses
                                  identify inefficiencies in their financial processes and implement solutions that
                                  improve bottom-line performance without compromising operational quality.
                                </p>
                                <ul className="list-disc list-inside mt-1 text-xs space-y-1">
                                  <li>Cost structure analysis and optimization</li>
                                  <li>Financial process reengineering</li>
                                  <li>Resource allocation improvement</li>
                                </ul>
                              </div>
                            )}
                          </div>

                          <div
                            className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-300"
                            onClick={() => toggleSection("fraud")}
                          >
                            <div className="flex items-center justify-between p-2 bg-red-900/30 hover:bg-red-900/50 transition-colors duration-300">
                              <div className="flex items-center gap-2">
                                <PieChart className="h-4 w-4 text-red-400" />
                                <h4 className="font-medium text-red-400">Forensic Financial Analysis</h4>
                              </div>
                              {activeSection === "fraud" ? (
                                <ChevronUp className="h-4 w-4 text-red-400" />
                              ) : (
                                <ChevronDown className="h-4 w-4 text-red-400" />
                              )}
                            </div>
                            {activeSection === "fraud" && (
                              <div className="p-2 bg-slate-800 text-sm text-slate-300">
                                <p>
                                  Detection of financial irregularities and strengthening of internal controls. I apply
                                  specialized investigative techniques to uncover potential fraud, misappropriation of
                                  assets, or financial misrepresentation within your organization.
                                </p>
                                <ul className="list-disc list-inside mt-1 text-xs space-y-1">
                                  <li>Fraud risk assessment and detection</li>
                                  <li>Internal control gap identification</li>
                                  <li>Remediation recommendations and implementation</li>
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="credentials" className="mt-0 p-2 h-full">
                        <div className="space-y-3">
                          <div className="bg-green-900/30 hover:bg-green-900/40 p-3 rounded-lg transition-colors duration-300 hover:shadow-sm">
                            <h4 className="font-medium text-green-400">15+ Balanced Books</h4>
                            <p className="text-sm text-green-300 mt-1">
                              Successfully reconciled financial statements for clients across diverse industries, with
                              zero material misstatements.
                            </p>
                          </div>

                          <div className="bg-blue-900/30 hover:bg-blue-900/40 p-3 rounded-lg transition-colors duration-300 hover:shadow-sm">
                            <h4 className="font-medium text-blue-400">15% Cost Reduction</h4>
                            <p className="text-sm text-blue-300 mt-1">
                              Identified and eliminated inefficiencies in client ledgers, resulting in significant
                              operational savings.
                            </p>
                          </div>

                          <div className="bg-purple-900/30 hover:bg-purple-900/40 p-3 rounded-lg transition-colors duration-300 hover:shadow-sm">
                            <h4 className="font-medium text-purple-400">20% Error Reduction</h4>
                            <p className="text-sm text-purple-300 mt-1">
                              Implemented robust internal controls that significantly decreased financial reporting
                              discrepancies.
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            <Badge className="bg-slate-700 text-slate-300 hover:bg-slate-600 transition-all duration-300">
                              ACCA Certified
                            </Badge>
                            <Badge className="bg-slate-700 text-slate-300 hover:bg-slate-600 transition-all duration-300">
                              Internal Controls Specialist
                            </Badge>
                            <Badge className="bg-slate-700 text-slate-300 hover:bg-slate-600 transition-all duration-300">
                              Financial Risk Analyst
                            </Badge>
                          </div>
                        </div>
                      </TabsContent>
                    </div>

                    <div className="p-2">
                      <Button onClick={flipCard} className="w-full bg-slate-700 hover:bg-slate-600 group">
                        <span className="flex items-center justify-center gap-1">
                          Return to Contact Details
                          <ChevronUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
                        </span>
                      </Button>
                    </div>
                  </Tabs>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Quick Contact Buttons */}
          <div className="flex justify-center space-x-4">
            <a href="https://wa.me/03456198029" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-12 w-12 bg-slate-800/80 text-white border-slate-700 backdrop-blur-sm shadow-md hover:shadow-lg hover:bg-green-50 hover:border-green-200 transition-all duration-300 group"
              >
                <Phone className="h-5 w-5 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 text-[10px] font-medium text-green-400">
                  WhatsApp
                </span>
              </Button>
            </a>
            <a href="mailto:osamasiddiqui7809@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-12 w-12 bg-slate-800/80 text-white border-slate-700 backdrop-blur-sm shadow-md hover:shadow-lg hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 group"
              >
                <Mail className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 text-[10px] font-medium text-blue-400">
                  Email
                </span>
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/osama-siddiqui-8b552a296/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-12 w-12 bg-slate-800/80 text-white border-slate-700 backdrop-blur-sm shadow-md hover:shadow-lg hover:bg-purple-50 hover:border-purple-200 transition-all duration-300 group"
              >
                <Linkedin className="h-5 w-5 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 text-[10px] font-medium text-purple-400">
                  LinkedIn
                </span>
              </Button>
            </a>
          </div>

          <div className="text-center text-xs text-slate-400 mt-4">
            "Precision in every calculation, integrity in every audit"
          </div>
        </div>
      </div>
    </div>
  )
}

