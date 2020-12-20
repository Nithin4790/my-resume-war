import React from 'react'
import SideNavMenu from 'components/SideNavMenu'
import Header from 'components/Header'

const DashboardPage: React.FC = () => {
  return (
    <div className="Dashboard">
      <Header />
      <SideNavMenu />
    </div>
  )
}

export default DashboardPage
