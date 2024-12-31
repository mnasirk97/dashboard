import { BarChart2, ShoppingBag, User, Users } from 'lucide-react'
import React from 'react'

const SIDEBAR_ITEMS = [
  {
    name: "Overview",
    icon: BarChart2,  
    color : "#6366f1",
    path: "/",
  },
  {
    name: "Products",
    icon: ShoppingBag,  
    color : "#8B5CF6",
    path: "/products",
  },
  {
    name: "Users",
    icon: Users,  
    color : "#EC4899",
    path: "/users",
  },
  {
    name: "Overview",
    icon: BarChart2,  
    color : "#6366f1",
    path: "/",
  },
  {
    name: "Overview",
    icon: BarChart2,  
    color : "#6366f1",
    path: "/",
  },
  {
    name: "Overview",
    icon: BarChart2,  
    color : "#6366f1",
    path: "/",
  },
  {
    name: "Overview",
    icon: BarChart2,  
    color : "#6366f1",
    path: "/",
  },
]

function Sidebar() {
  return (
    <div>
      Sidebar
    </div>
  )
}

export default Sidebar
