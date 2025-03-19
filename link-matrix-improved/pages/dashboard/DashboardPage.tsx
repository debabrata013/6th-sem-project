import { Link } from "react-router-dom"
import { Users, MessageSquare, Bell, Calendar, Briefcase, TrendingUp, ChevronRight, MapPin } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data
const userData = {
  name: "John Doe",
  avatar: "/placeholder.svg?height=80&width=80",
  initials: "JD",
  role: "Computer Science Student",
  university: "University of Technology",
  completedProfile: 85,
  stats: {
    connections: 152,
    following: 48,
    messages: 12,
    notifications: 5,
  },
}

const upcomingEvents = [
  {
    id: 1,
    title: "Career Fair 2023",
    date: "Oct 15, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "University Main Hall",
  },
  {
    id: 2,
    title: "Alumni Networking Mixer",
    date: "Oct 22, 2023",
    time: "6:00 PM - 8:00 PM",
    location: "Downtown Conference Center",
  },
]

const recommendedAlumni = [
  {
    id: 1,
    name: "Sarah Williams",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "SW",
    role: "Marketing Director at Global Brands",
    graduationYear: 2015,
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "MC",
    role: "Senior Data Scientist at Analytics Co",
    graduationYear: 2017,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "ER",
    role: "UX Design Lead at Creative Studio",
    graduationYear: 2016,
  },
]

const recentActivity = [
  {
    id: 1,
    user: {
      name: "Sarah Williams",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SW",
    },
    action: "posted",
    content: "Looking for interns to join our marketing team this summer! If you're interested, send me a message.",
    timestamp: "2h ago",
  },
  {
    id: 2,
    user: {
      name: "Tech Career Services",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "TC",
    },
    action: "posted",
    content:
      "Resume workshop this Friday at 3 PM in the Student Center. Bring your resume for review by industry professionals!",
    timestamp: "1d ago",
  },
]

const jobOpportunities = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Tech Innovations",
    location: "San Francisco, CA",
    type: "Internship",
    postedBy: "James Wilson (Alumni)",
    postedDate: "2d ago",
  },
  {
    id: 2,
    title: "Junior UX Designer",
    company: "Creative Studio",
    location: "Chicago, IL",
    type: "Full-time",
    postedBy: "Emily Rodriguez (Alumni)",
    postedDate: "3d ago",
  },
  {
    id: 3,
    title: "Data Analyst",
    company: "Analytics Co",
    location: "Remote",
    type: "Full-time",
    postedBy: "Michael Chen (Alumni)",
    postedDate: "1w ago",
  },
]

const DashboardPage = () => {
  return (
    <div className="container py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile summary card */}
        <Card className="md:col-span-1">
          <CardHeader className="pb-2">
            <div className="flex items-start gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={userData.avatar} alt={userData.name} />
                <AvatarFallback>{userData.initials}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{userData.name}</CardTitle>
                <CardDescription>{userData.role}</CardDescription>
                <CardDescription>{userData.university}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Profile Completion</span>
                  <span className="text-sm font-medium">{userData.completedProfile}%</span>
                </div>
                <Progress value={userData.completedProfile} className="h-2" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
                  <Users className="h-5 w-5 text-primary mb-1" />
                  <span className="font-medium">{userData.stats.connections}</span>
                  <span className="text-xs text-muted-foreground">Connections</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
                  <TrendingUp className="h-5 w-5 text-primary mb-1" />
                  <span className="font-medium">{userData.stats.following}</span>
                  <span className="text-xs text-muted-foreground">Following</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
                  <MessageSquare className="h-5 w-5 text-primary mb-1" />
                  <span className="font-medium">{userData.stats.messages}</span>
                  <span className="text-xs text-muted-foreground">Messages</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
                  <Bell className="h-5 w-5 text-primary mb-1" />
                  <span className="font-medium">{userData.stats.notifications}</span>
                  <span className="text-xs text-muted-foreground">Notifications</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link to="/dashboard/profile">View Full Profile</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Main content area */}
        <div className="md:col-span-2 space-y-6">
          {/* Quick actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-sm font-medium">Find Alumni</CardTitle>
              </CardContent>
              <CardFooter className="p-2 pt-0">
                <Button asChild variant="ghost" className="w-full h-8">
                  <Link to="/alumni">
                    <span>Explore</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <MessageSquare className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-sm font-medium">Messages</CardTitle>
              </CardContent>
              <CardFooter className="p-2 pt-0">
                <Button asChild variant="ghost" className="w-full h-8">
                  <Link to="/messages">
                    <span>View</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <Calendar className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-sm font-medium">Events</CardTitle>
              </CardContent>
              <CardFooter className="p-2 pt-0">
                <Button asChild variant="ghost" className="w-full h-8">
                  <Link to="/events">
                    <span>Browse</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <Briefcase className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-sm font-medium">Jobs</CardTitle>
              </CardContent>
              <CardFooter className="p-2 pt-0">
                <Button asChild variant="ghost" className="w-full h-8">
                  <Link to="/jobs">
                    <span>Search</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Tabs for different sections */}
          <Tabs defaultValue="activity">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
            </TabsList>

            {/* Activity tab */}
            <TabsContent value="activity" className="space-y-4 mt-4">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
              {recentActivity.map((activity) => (
                <Card key={activity.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Avatar>
                        <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                        <AvatarFallback>{activity.user.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="font-medium">{activity.user.name}</span>
                          <span className="text-sm text-muted-foreground">{activity.action}</span>
                        </div>
                        <p className="text-sm mt-1">{activity.content}</p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.timestamp}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <h3 className="text-lg font-semibold mt-6">Recommended Alumni to Follow</h3>
              <div className="grid grid-cols-1 gap-4">
                {recommendedAlumni.map((alumni) => (
                  <Card key={alumni.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={alumni.avatar} alt={alumni.name} />
                            <AvatarFallback>{alumni.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-medium">{alumni.name}</h4>
                            <p className="text-sm text-muted-foreground">{alumni.role}</p>
                            <p className="text-xs text-muted-foreground">Class of {alumni.graduationYear}</p>
                          </div>
                        </div>
                        <Button size="sm">Follow</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <Button asChild variant="outline">
                  <Link to="/alumni">View All Alumni</Link>
                </Button>
              </div>
            </TabsContent>

            {/* Opportunities tab */}
            <TabsContent value="opportunities" className="space-y-4 mt-4">
              <h3 className="text-lg font-semibold">Job Opportunities</h3>
              {jobOpportunities.map((job) => (
                <Card key={job.id}>
                  <CardContent className="p-4">
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{job.title}</h4>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{job.type}</span>
                      </div>
                      <p className="text-sm">{job.company}</p>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <p className="text-xs text-muted-foreground">Posted by {job.postedBy}</p>
                        <p className="text-xs text-muted-foreground">{job.postedDate}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
              <Button asChild variant="outline">
                <Link to="/jobs">View All Opportunities</Link>
              </Button>
            </TabsContent>

            {/* Events tab */}
            <TabsContent value="events" className="space-y-4 mt-4">
              <h3 className="text-lg font-semibold">Upcoming Events</h3>
              {upcomingEvents.map((event) => (
                <Card key={event.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-md">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{event.title}</h4>
                        <p className="text-sm">
                          {event.date} • {event.time}
                        </p>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0 flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      More Info
                    </Button>
                    <Button size="sm" className="flex-1">
                      RSVP
                    </Button>
                  </CardFooter>
                </Card>
              ))}
              <Button asChild variant="outline">
                <Link to="/events">View All Events</Link>
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage

