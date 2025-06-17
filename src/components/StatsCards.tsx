
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Activity, TrendingUp, AlertTriangle } from "lucide-react"

const stats = [
  {
    title: "Tổng người dùng",
    value: "1,234",
    change: "+12.5%",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "Tổng số bệnh",
    value: "89",
    change: "+3.2%",
    icon: Activity,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    title: "Tăng trưởng",
    value: "23.1%",
    change: "+5.4%",
    icon: TrendingUp,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    title: "Cảnh báo",
    value: "7",
    change: "-2.1%",
    icon: AlertTriangle,
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  }
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {stat.value}
            </div>
            <p className={`text-xs ${
              stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change} so với tháng trước
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
