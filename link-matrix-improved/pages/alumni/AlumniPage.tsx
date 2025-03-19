"use client"

import type React from "react"

import { useState } from "react"
import { Search, Filter, MapPin, Briefcase, GraduationCap } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

// Mock data for alumni
const alumniData = [
  {
    id: 1,
    name: "Sarah Williams",
    avatar: "/placeholder.svg?height=80&width=80",
    initials: "SW",
    role: "Marketing Director",
    company: "Global Brands",
    location: "New York, NY",
    graduationYear: 2015,
    department: "Business Administration",
    skills: ["Marketing Strategy", "Brand Management", "Digital Marketing"],
    isFollowing: false,
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=80&width=80",
    initials: "MC",
    role: "Senior Data Scientist",
    company: "Analytics Co",
    location: "San Francisco, CA",
    graduationYear: 2017,
    department: "Computer Science",
    skills: ["Machine Learning", "Python", "Data Visualization"],
    isFollowing: true,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar: "/placeholder.svg?height=80&width=80",
    initials: "ER",
    role: "UX Design Lead",
    company: "Creative Studio",
    location: "Chicago, IL",
    graduationYear: 2016,
    department: "Graphic Design",
    skills: ["User Research", "Prototyping", "Interaction Design"],
    isFollowing: false,
  },
  {
    id: 4,
    name: "James Wilson",
    avatar: "/placeholder.svg?height=80&width=80",
    initials: "JW",
    role: "Software Engineer",
    company: "Tech Innovations",
    location: "Austin, TX",
    graduationYear: 2018,
    department: "Computer Science",
    skills: ["JavaScript", "React", "Node.js"],
    isFollowing: false,
  },
  {
    id: 5,
    name: "Olivia Thompson",
    avatar: "/placeholder.svg?height=80&width=80",
    initials: "OT",
    role: "Product Manager",
    company: "SaaS Solutions",
    location: "Seattle, WA",
    graduationYear: 2014,
    department: "Information Systems",
    skills: ["Product Strategy", "Agile", "User Experience"],
    isFollowing: true,
  },
  {
    id: 6,
    name: "Daniel Kim",
    avatar: "/placeholder.svg?height=80&width=80",
    initials: "DK",
    role: "Financial Analyst",
    company: "Investment Partners",
    location: "Boston, MA",
    graduationYear: 2019,
    department: "Finance",
    skills: ["Financial Modeling", "Valuation", "Excel"],
    isFollowing: false,
  },
]

const AlumniPage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [alumni, setAlumni] = useState(alumniData)

  const handleFollowToggle = (id: number) => {
    setAlumni(alumni.map((alum) => (alum.id === id ? { ...alum, isFollowing: !alum.isFollowing } : alum)))
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would fetch filtered data from the backend
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="container py-6">
      <h1 className="text-2xl font-bold mb-6">Connect with Alumni</h1>

      {/* Search and filters */}
      <div className="bg-card rounded-lg border p-4 mb-6">
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by name, company, role..."
                className="pl-8 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="cs">Computer Science</SelectItem>
                  <SelectItem value="business">Business Administration</SelectItem>
                  <SelectItem value="design">Graphic Design</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Graduation Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  <SelectItem value="2019">2019</SelectItem>
                  <SelectItem value="2018">2018</SelectItem>
                  <SelectItem value="2017">2017</SelectItem>
                  <SelectItem value="2016">2016</SelectItem>
                  <SelectItem value="2015">2015</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </form>
      </div>

      {/* Alumni grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {alumni.map((alum) => (
          <Card key={alum.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={alum.avatar} alt={alum.name} />
                  <AvatarFallback>{alum.initials}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">{alum.name}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Briefcase className="h-3 w-3 mr-1" />
                    <span>
                      {alum.role} at {alum.company}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{alum.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <GraduationCap className="h-3 w-3 mr-1" />
                    <span>
                      {alum.department}, Class of {alum.graduationYear}
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1 mt-2">
                {alum.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-4">
              <Button variant="outline">View Profile</Button>
              <Button variant={alum.isFollowing ? "secondary" : "default"} onClick={() => handleFollowToggle(alum.id)}>
                {alum.isFollowing ? "Following" : "Follow"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default AlumniPage

