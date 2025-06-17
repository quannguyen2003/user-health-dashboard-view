
import { StatsCards } from "./StatsCards"
import { UserTable } from "./UserTable"
import { DiseaseChart } from "./DiseaseChart"

export function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <StatsCards />
      
      {/* Charts */}
      <DiseaseChart />
      
      {/* User Table */}
      <UserTable />
    </div>
  )
}
