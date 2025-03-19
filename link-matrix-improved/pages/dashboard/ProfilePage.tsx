"use client"

import type React from "react"

import { useState } from "react"
import { Edit, MapPin, Briefcase, GraduationCap, Mail, Globe, Plus, FileText, Image } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

// Mock user data
const userData = {
  name: "John Doe",
  avatar: "/placeholder.svg?height=120&width=120",
  initials: "JD",
  role: "Computer Science Student",
  university: "University of Technology",
  location: "San Francisco, CA",
  email: "john.doe@example.com",
  website: "johndoe.portfolio.com",
  about:
    "Passionate computer science student with interests in web development, artificial intelligence, and data science. Looking to connect with alumni in the tech industry for mentorship and career advice.",
  education: [
    {
      id: 1,
      institution: "University of Technology",
      degree: "Bachelor of Science in Computer Science",
      years: "2020 - 2024",
      description:
        "Focusing on software engineering and artificial intelligence. Member of the Computer Science Society and Hackathon Club.",
    },
  ],
  experience: [
    {
      id: 1,
      company: "Tech Startup",
      role: "Software Engineering Intern",
      years: "Summer 2023",
      description:
        "Developed and maintained web applications using React and Node.js. Collaborated with the product team to implement new features and fix bugs.",
    },
    {
      id: 2,
      company: "University IT Department",
      role: "Student Assistant",
      years: "2021 - Present",
      description:
        "Provide technical support to students and faculty. Assist with maintaining campus computer labs and troubleshooting network issues.",
    },
  ],
  skills: ["JavaScript", "React", "Node.js", "Python", "Java", "SQL", "Git", "Data Structures", "Algorithms"],
  projects: [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "Designed and developed a responsive portfolio website using React and Tailwind CSS.",
      link: "https://example.com/portfolio",
    },
    {
      id: 2,
      title: "Machine Learning Image Classifier",
      description:
        "Built an image classification model using TensorFlow and Python to identify objects in photographs.",
      link: "https://github.com/johndoe/image-classifier",
    },
  ],
  followingCount: 48,
  connectionCount: 152,
}

// Mock activity data
const activityData = [
  {
    id: 1,
    type: "post",
    content:
      "Just completed my summer internship at Tech Startup! It was an amazing experience working with talented engineers and learning about web development.",
    timestamp: "2 weeks ago",
    likes: 24,
    comments: 8,
  },
  {
    id: 2,
    type: "connection",
    person: "Sarah Williams",
    action: "connected with",
    timestamp: "1 month ago",
  },
  {
    id: 3,
    type: "follow",
    person: "Michael Chen",
    action: "started following",
    timestamp: "1 month ago",
  },
]

const ProfilePage = () => {
  const [postContent, setPostContent] = useState("")

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle post submission logic here
    console.log("Submitting post:", postContent)
    setPostContent("")
  }

  return (
    <div className="container py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left sidebar - Profile info */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="relative pb-0">
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-primary/20 to-primary/30 rounded-t-lg" />
              <div className="relative pt-12 flex flex-col items-center">
                <Avatar className="h-24 w-24 border-4 border-background">
                  <AvatarImage src={userData.avatar} alt={userData.name} />
                  <AvatarFallback>{userData.initials}</AvatarFallback>
                </Avatar>
                <h2 className="mt-4 text-xl font-bold">{userData.name}</h2>
                <p className="text-sm text-muted-foreground">{userData.role}</p>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin className="h-3 w-3 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{userData.location}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{userData.university}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Intern at Tech Startup</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{userData.email}</span>
                </div>
                {userData.website && (
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <a
                      href={`https://${userData.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      {userData.website}
                    </a>
                  </div>
                )}
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between">
                <div className="text-center">
                  <p className="font-medium">{userData.connectionCount}</p>
                  <p className="text-xs text-muted-foreground">Connections</p>
                </div>
                <div className="text-center">
                  <p className="font-medium">{userData.followingCount}</p>
                  <p className="text-xs text-muted-foreground">Following</p>
                </div>
              </div>

              <Button variant="outline" className="w-full mt-4">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </CardContent>
          </Card>

          {/* Skills card */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {userData.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* About section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{userData.about}</p>
            </CardContent>
          </Card>

          {/* Create post card */}
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handlePostSubmit}>
                <div className="flex items-start gap-3">
                  <Avatar>
                    <AvatarImage src={userData.avatar} alt={userData.name} />
                    <AvatarFallback>{userData.initials}</AvatarFallback>
                  </Avatar>
                  <Textarea
                    placeholder="Share an update..."
                    className="flex-1 resize-none"
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button type="button" variant="ghost" size="sm">
                      <Image className="h-4 w-4 mr-2" />
                      Photo
                    </Button>
                    <Button type="button" variant="ghost" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      Document
                    </Button>
                  </div>
                  <Button type="submit" size="sm" disabled={!postContent.trim()}>
                    Post
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Tabs for different sections */}
          <Tabs defaultValue="activity">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
            </TabsList>

            {/* Activity tab */}
            <TabsContent value="activity" className="space-y-4 mt-6">
              {activityData.map((activity) => (
                <Card key={activity.id}>
                  <CardContent className="pt-6">
                    {activity.type === "post" ? (
                      <div>
                        <div className="flex items-start gap-3">
                          <Avatar>
                            <AvatarImage src={userData.avatar} alt={userData.name} />
                            <AvatarFallback>{userData.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold">{userData.name}</h4>
                            <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                          </div>
                        </div>
                        <p className="mt-3 text-sm">{activity.content}</p>
                        <div className="mt-4 flex items-center text-sm text-muted-foreground">
                          <span>{activity.likes} likes</span>
                          <span className="mx-2">•</span>
                          <span>{activity.comments} comments</span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={userData.avatar} alt={userData.name} />
                          <AvatarFallback>{userData.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm">
                            <span className="font-semibold">{userData.name}</span> {activity.action}{" "}
                            <span className="font-semibold">{activity.person}</span>
                          </p>
                          <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Experience tab */}
            <TabsContent value="experience" className="space-y-4 mt-6">
              {userData.experience.map((exp) => (
                <Card key={exp.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{exp.role}</CardTitle>
                    <CardDescription>
                      {exp.company} • {exp.years}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
              <Button variant="outline" className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Add Experience
              </Button>
            </TabsContent>

            {/* Education tab */}
            <TabsContent value="education" className="space-y-4 mt-6">
              {userData.education.map((edu) => (
                <Card key={edu.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <CardDescription>
                      {edu.institution} • {edu.years}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
              <Button variant="outline" className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Add Education
              </Button>
            </TabsContent>

            {/* Projects tab */}
            <TabsContent value="projects" className="space-y-4 mt-6">
              {userData.projects.map((project) => (
                <Card key={project.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{project.description}</p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline mt-2 inline-block"
                      >
                        View Project
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
              <Button variant="outline" className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Add Project
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage

