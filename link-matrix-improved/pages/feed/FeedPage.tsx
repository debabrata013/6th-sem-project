"use client"

import type React from "react"

import { useState } from "react"
import { Link } from "react-router-dom"
import { ThumbsUp, MessageSquare, Share2, Image, FileText, Calendar, Briefcase, GraduationCap } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

// Mock data for posts
const posts = [
  {
    id: 1,
    author: {
      name: "Jane Smith",
      role: "Software Engineer at Tech Corp",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "JS",
      isAlumni: true,
    },
    content:
      "Excited to announce that I've just been promoted to Senior Software Engineer at Tech Corp! Looking forward to mentoring junior engineers and taking on more challenging projects.",
    image: "/placeholder.svg?height=400&width=600",
    timestamp: "2h ago",
    likes: 42,
    comments: 8,
  },
  {
    id: 2,
    author: {
      name: "Alex Johnson",
      role: "Computer Science Student, Class of 2024",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "AJ",
      isAlumni: false,
    },
    content:
      "Just completed my summer internship at Google! It was an amazing experience working with talented engineers and learning about large-scale systems. Would love to connect with anyone interested in tech internships!",
    image: null,
    timestamp: "5h ago",
    likes: 28,
    comments: 12,
  },
  {
    id: 3,
    author: {
      name: "Sarah Williams",
      role: "Marketing Director at Global Brands",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SW",
      isAlumni: true,
    },
    content:
      "Our university's marketing program gave me the foundation I needed to succeed in my career. Now I'm looking to give back by mentoring current students. If you're interested in marketing, feel free to reach out!",
    image: "/placeholder.svg?height=400&width=600",
    timestamp: "1d ago",
    likes: 56,
    comments: 15,
  },
]

// Mock data for suggested connections
const suggestedConnections = [
  {
    id: 1,
    name: "Michael Chen",
    role: "Data Scientist at Analytics Co",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "MC",
    isAlumni: true,
  },
  {
    id: 2,
    name: "Emily Rodriguez",
    role: "UX Designer at Creative Studio",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "ER",
    isAlumni: true,
  },
  {
    id: 3,
    name: "David Kim",
    role: "Business Administration, Class of 2023",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "DK",
    isAlumni: false,
  },
]

// Mock data for upcoming events
const upcomingEvents = [
  {
    id: 1,
    title: "Career Fair 2023",
    date: "Oct 15, 2023",
    attendees: 120,
  },
  {
    id: 2,
    title: "Alumni Networking Mixer",
    date: "Oct 22, 2023",
    attendees: 85,
  },
]

const FeedPage = () => {
  const [postContent, setPostContent] = useState("")

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle post submission logic here
    console.log("Submitting post:", postContent)
    setPostContent("")
  }

  return (
    <div className="container py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left sidebar - Profile summary */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="relative pb-0">
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-primary/20 to-primary/30 rounded-t-lg" />
              <div className="relative pt-12 flex flex-col items-center">
                <Avatar className="h-20 w-20 border-4 border-background">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Profile" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-lg font-semibold">John Doe</h3>
                <p className="text-sm text-muted-foreground">Computer Science, Class of 2024</p>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Intern at Tech Startup</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">University of Technology</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Connections:</span>
                  <span className="text-sm">152</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Following:</span>
                  <span className="text-sm">48 alumni</span>
                </div>
              </div>
              <Separator className="my-4" />
              <Link to="/dashboard/profile" className="text-sm text-primary hover:underline">
                View full profile
              </Link>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="mt-6">
            <CardHeader>
              <h3 className="text-lg font-semibold">Upcoming Events</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{event.title}</h4>
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                      <p className="text-xs text-muted-foreground">{event.attendees} attending</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Events
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Main content - Feed */}
        <div className="md:col-span-2 space-y-6">
          {/* Create post card */}
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handlePostSubmit}>
                <div className="flex items-start gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Profile" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Textarea
                    placeholder="Share something with your network..."
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

          {/* Feed tabs */}
          <Tabs defaultValue="all">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All Posts</TabsTrigger>
              <TabsTrigger value="alumni">Alumni</TabsTrigger>
              <TabsTrigger value="students">Students</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-6 mt-6">
              {posts.map((post) => (
                <Card key={post.id}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <Avatar>
                        <AvatarImage src={post.author.avatar} alt={post.author.name} />
                        <AvatarFallback>{post.author.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">{post.author.name}</h4>
                          {post.author.isAlumni && (
                            <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">Alumni</span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{post.author.role}</p>
                        <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{post.content}</p>
                    {post.image && (
                      <div className="mt-3">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt="Post attachment"
                          className="rounded-md w-full object-cover max-h-[400px]"
                        />
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="border-t pt-3">
                    <div className="flex items-center justify-between w-full">
                      <Button variant="ghost" size="sm">
                        <ThumbsUp className="h-4 w-4 mr-2" />
                        Like ({post.likes})
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Comment ({post.comments})
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="alumni" className="space-y-6 mt-6">
              {posts
                .filter((post) => post.author.isAlumni)
                .map((post) => (
                  <Card key={post.id}>
                    <CardHeader className="pb-3">
                      <div className="flex items-start gap-3">
                        <Avatar>
                          <AvatarImage src={post.author.avatar} alt={post.author.name} />
                          <AvatarFallback>{post.author.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold">{post.author.name}</h4>
                            <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">Alumni</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{post.author.role}</p>
                          <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">{post.content}</p>
                      {post.image && (
                        <div className="mt-3">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt="Post attachment"
                            className="rounded-md w-full object-cover max-h-[400px]"
                          />
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="border-t pt-3">
                      <div className="flex items-center justify-between w-full">
                        <Button variant="ghost" size="sm">
                          <ThumbsUp className="h-4 w-4 mr-2" />
                          Like ({post.likes})
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Comment ({post.comments})
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4 mr-2" />
                          Share
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
            </TabsContent>
            <TabsContent value="students" className="space-y-6 mt-6">
              {posts
                .filter((post) => !post.author.isAlumni)
                .map((post) => (
                  <Card key={post.id}>
                    <CardHeader className="pb-3">
                      <div className="flex items-start gap-3">
                        <Avatar>
                          <AvatarImage src={post.author.avatar} alt={post.author.name} />
                          <AvatarFallback>{post.author.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold">{post.author.name}</h4>
                            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">Student</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{post.author.role}</p>
                          <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">{post.content}</p>
                      {post.image && (
                        <div className="mt-3">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt="Post attachment"
                            className="rounded-md w-full object-cover max-h-[400px]"
                          />
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="border-t pt-3">
                      <div className="flex items-center justify-between w-full">
                        <Button variant="ghost" size="sm">
                          <ThumbsUp className="h-4 w-4 mr-2" />
                          Like ({post.likes})
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Comment ({post.comments})
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4 mr-2" />
                          Share
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* Right sidebar - Suggested connections */}
        <div className="md:col-span-1 md:order-last order-2">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">People You May Know</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {suggestedConnections.map((connection) => (
                  <div key={connection.id} className="flex items-start gap-3">
                    <Avatar>
                      <AvatarImage src={connection.avatar} alt={connection.name} />
                      <AvatarFallback>{connection.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{connection.name}</h4>
                        {connection.isAlumni && (
                          <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">Alumni</span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{connection.role}</p>
                      <div className="mt-2 flex gap-2">
                        <Button size="sm" variant="outline" className="w-full">
                          Connect
                        </Button>
                        {connection.isAlumni && (
                          <Button size="sm" variant="secondary" className="w-full">
                            Follow
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full">
                View More
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default FeedPage

