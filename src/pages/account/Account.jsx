import { Outlet } from "react-router-dom"

function Account() {
  return (
    <div className="pt-8">
      <h2 className="text-center text-2xl font-medium">Your Account</h2>
      <Outlet />
    </div>
  )
}

export default Account