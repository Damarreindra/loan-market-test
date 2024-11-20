import MainDashboard from "../Components/MainDashboard"
import ProfileHero from "../Components/ProfileHero"
import DashboardLayout from "../Layout/DashboardLayout"




function DashboardPage() {
  return (
   <DashboardLayout>
  <ProfileHero/>
  <MainDashboard/>
   </DashboardLayout>
  )
}

export default DashboardPage