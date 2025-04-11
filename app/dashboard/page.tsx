"use client"

import { useState } from "react"
import { Calendar, Code, CreditCard, Home, MessageSquare, PieChart, Settings, Star, User, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent } from "@/components/ui/sheet"

export default function Dashboard() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  // Tech stack with icons
  const techStack = [
    { name: "React", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "Java", level: 70 },
    { name: "PHP", level: 65 },
  ]

  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      {/* Desktop Sidebar */}
      <aside className="hidden w-64 flex-col border-r bg-background p-6 md:flex">
        <div className="flex items-center gap-3 pb-6">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
            <AvatarFallback>CB</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium">Charles Basil</h3>
            <p className="text-xs text-muted-foreground">Frontend Developer</p>
          </div>
        </div>
        <nav className="space-y-1.5">
          <Button variant="ghost" className="w-full justify-start gap-3">
            <Home className="h-4 w-4" />
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <User className="h-4 w-4" />
            Profile
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <PieChart className="h-4 w-4" />
            Projects
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <Code className="h-4 w-4" />
            Skills
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <Users className="h-4 w-4" />
            Clients
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <MessageSquare className="h-4 w-4" />
            Messages
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <CreditCard className="h-4 w-4" />
            Payments
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <Calendar className="h-4 w-4" />
            Schedule
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <Settings className="h-4 w-4" />
            Settings
          </Button>
        </nav>
        <div className="mt-auto">
          <Card className="bg-primary/10">
            <CardContent className="p-4">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Upgrade to Pro</p>
                <p className="text-xs text-muted-foreground">Get more features and priority support</p>
                <Button size="sm" className="mt-2">
                  Upgrade
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </aside>

      {/* Mobile Navigation */}
      <Sheet open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <div className="flex h-full flex-col">
            <div className="flex items-center gap-3 border-b p-6">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                <AvatarFallback>CB</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">Charles Basil</h3>
                <p className="text-xs text-muted-foreground">Frontend Developer</p>
              </div>
            </div>
            <nav className="flex-1 space-y-1.5 p-6">
              <Button variant="ghost" className="w-full justify-start gap-3" onClick={() => setIsMobileNavOpen(false)}>
                <Home className="h-4 w-4" />
                Dashboard
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3" onClick={() => setIsMobileNavOpen(false)}>
                <User className="h-4 w-4" />
                Profile
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3" onClick={() => setIsMobileNavOpen(false)}>
                <PieChart className="h-4 w-4" />
                Projects
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3" onClick={() => setIsMobileNavOpen(false)}>
                <Code className="h-4 w-4" />
                Skills
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3" onClick={() => setIsMobileNavOpen(false)}>
                <Users className="h-4 w-4" />
                Clients
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3" onClick={() => setIsMobileNavOpen(false)}>
                <MessageSquare className="h-4 w-4" />
                Messages
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3" onClick={() => setIsMobileNavOpen(false)}>
                <CreditCard className="h-4 w-4" />
                Payments
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3" onClick={() => setIsMobileNavOpen(false)}>
                <Calendar className="h-4 w-4" />
                Schedule
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3" onClick={() => setIsMobileNavOpen(false)}>
                <Settings className="h-4 w-4" />
                Settings
              </Button>
            </nav>
            <div className="border-t p-6">
              <Card className="bg-primary/10">
                <CardContent className="p-4">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium">Upgrade to Pro</p>
                    <p className="text-xs text-muted-foreground">Get more features and priority support</p>
                    <Button size="sm" className="mt-2">
                      Upgrade
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
          <Button variant="outline" size="icon" className="md:hidden" onClick={() => setIsMobileNavOpen(true)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              April 2025
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                    <AvatarFallback>CB</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Profile Overview */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold">Profile Overview</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Profile Completion</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">92%</div>
                    <Badge variant="outline">2 steps left</Badge>
                  </div>
                  <Progress value={92} className="mt-3" />
                  <div className="mt-3 text-xs text-muted-foreground">Complete your profile to increase visibility</div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    Complete Profile
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Profile Views</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">1,842</div>
                    <Badge className="bg-green-500">+18%</Badge>
                  </div>
                  <div className="mt-3 text-xs text-muted-foreground">Last 30 days</div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    View Analytics
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">Open to Work</div>
                    <Badge className="bg-green-500">Available</Badge>
                  </div>
                  <div className="mt-3 text-xs text-muted-foreground">Next availability: Immediate</div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    Update Status
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Tech Stack</h2>
              <Button variant="outline" size="sm">
                Edit Skills
              </Button>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Skills & Expertise</CardTitle>
                <CardDescription>Technologies I specialize in</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {techStack.map((tech) => (
                    <div key={tech.name} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{tech.name}</span>
                        <span className="text-sm text-muted-foreground">{tech.level}%</span>
                      </div>
                      <Progress value={tech.level} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Recent Projects */}
          <section className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Recent Projects</h2>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>E-commerce Platform</CardTitle>
                  <CardDescription>Frontend Development</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Completed</Badge>
                    <span className="text-sm text-muted-foreground">Apr 2, 2025</span>
                  </div>
                  <div className="mt-4 text-sm">
                    Built a responsive e-commerce platform with React, improving conversion rates by 24%.
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex -space-x-2">
                    <Avatar className="border-2 border-background">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Client" />
                      <AvatarFallback>C1</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-background">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Client" />
                      <AvatarFallback>C2</AvatarFallback>
                    </Avatar>
                  </div>
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Admin Dashboard</CardTitle>
                  <CardDescription>Full-stack Development</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">In Progress</Badge>
                    <span className="text-sm text-muted-foreground">Due Apr 15, 2025</span>
                  </div>
                  <div className="mt-4 text-sm">
                    Creating a comprehensive admin dashboard with React, Node.js, and TypeScript.
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex -space-x-2">
                    <Avatar className="border-2 border-background">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Client" />
                      <AvatarFallback>C3</AvatarFallback>
                    </Avatar>
                  </div>
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mobile App UI</CardTitle>
                  <CardDescription>Frontend Development</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Completed</Badge>
                    <span className="text-sm text-muted-foreground">Mar 28, 2025</span>
                  </div>
                  <div className="mt-4 text-sm">
                    Developed a responsive mobile app interface with React Native and TypeScript.
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex -space-x-2">
                    <Avatar className="border-2 border-background">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Client" />
                      <AvatarFallback>C4</AvatarFallback>
                    </Avatar>
                  </div>
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Client Feedback */}
          <section className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Client Feedback</h2>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Client" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base">John Doe</CardTitle>
                        <CardDescription>TechCorp Inc.</CardDescription>
                      </div>
                    </div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    "Charles delivered exceptional work on our e-commerce platform. His attention to detail and
                    expertise in React resulted in a significant improvement in our conversion rates. Highly
                    recommended!"
                  </p>
                </CardContent>
                <CardFooter className="text-xs text-muted-foreground">April 2, 2025</CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Client" />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base">Jane Smith</CardTitle>
                        <CardDescription>HealthTech Solutions</CardDescription>
                      </div>
                    </div>
                    <div className="flex">
                      {[1, 2, 3, 4].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="h-4 w-4 text-yellow-400" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    "Working with Charles has been a pleasure. His knowledge of modern frontend technologies and ability
                    to deliver clean, maintainable code has been invaluable to our project. Looking forward to working
                    together again."
                  </p>
                </CardContent>
                <CardFooter className="text-xs text-muted-foreground">March 28, 2025</CardFooter>
              </Card>
            </div>
          </section>

          {/* Earnings Summary */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">Earnings Summary</h2>
            <Tabs defaultValue="monthly">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="weekly">Weekly</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="yearly">Yearly</TabsTrigger>
                </TabsList>
                <Button variant="outline" size="sm">
                  Download Report
                </Button>
              </div>

              <TabsContent value="weekly" className="mt-4">
                <div className="grid gap-6 md:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Total Earnings</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$1,580</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-500">+15%</span> from last week
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Projects Completed</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">4</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-500">+2</span> from last week
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Pending Payments</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$720</div>
                      <p className="text-xs text-muted-foreground">Due within 7 days</p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Weekly Revenue</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] w-full">
                      {/* Placeholder for chart */}
                      <div className="flex h-full w-full items-end justify-between gap-2 rounded-md border p-4">
                        <div className="h-[30%] w-8 rounded bg-primary"></div>
                        <div className="h-[60%] w-8 rounded bg-primary"></div>
                        <div className="h-[45%] w-8 rounded bg-primary"></div>
                        <div className="h-[80%] w-8 rounded bg-primary"></div>
                        <div className="h-[65%] w-8 rounded bg-primary"></div>
                        <div className="h-[40%] w-8 rounded bg-primary"></div>
                        <div className="h-[75%] w-8 rounded bg-primary"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="monthly" className="mt-4">
                <div className="grid gap-6 md:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Total Earnings</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$6,240</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-500">+10%</span> from last month
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Projects Completed</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">14</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-500">+3</span> from last month
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Pending Payments</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$1,450</div>
                      <p className="text-xs text-muted-foreground">Due within 30 days</p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Monthly Revenue</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] w-full">
                      {/* Placeholder for chart */}
                      <div className="flex h-full w-full items-end justify-between gap-2 rounded-md border p-4">
                        <div className="h-[40%] w-6 rounded bg-primary"></div>
                        <div className="h-[65%] w-6 rounded bg-primary"></div>
                        <div className="h-[35%] w-6 rounded bg-primary"></div>
                        <div className="h-[80%] w-6 rounded bg-primary"></div>
                        <div className="h-[55%] w-6 rounded bg-primary"></div>
                        <div className="h-[70%] w-6 rounded bg-primary"></div>
                        <div className="h-[45%] w-6 rounded bg-primary"></div>
                        <div className="h-[60%] w-6 rounded bg-primary"></div>
                        <div className="h-[75%] w-6 rounded bg-primary"></div>
                        <div className="h-[50%] w-6 rounded bg-primary"></div>
                        <div className="h-[85%] w-6 rounded bg-primary"></div>
                        <div className="h-[65%] w-6 rounded bg-primary"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="yearly" className="mt-4">
                <div className="grid gap-6 md:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Total Earnings</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$72,840</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-500">+18%</span> from last year
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Projects Completed</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">156</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-500">+28</span> from last year
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Client Retention</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">92%</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-500">+8%</span> from last year
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Yearly Revenue</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] w-full">
                      {/* Placeholder for chart */}
                      <div className="flex h-full w-full items-end justify-between gap-2 rounded-md border p-4">
                        <div className="h-[60%] w-16 rounded bg-primary"></div>
                        <div className="h-[75%] w-16 rounded bg-primary"></div>
                        <div className="h-[45%] w-16 rounded bg-primary"></div>
                        <div className="h-[90%] w-16 rounded bg-primary"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>
        </div>
      </main>
    </div>
  )
}

function Menu(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}