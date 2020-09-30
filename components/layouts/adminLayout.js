import React from "react"
import AdminHeader from "../includes/home/adminHeader"

const AdminLayout = (props) => {
  return (
    <div className="admin_layout">
      <AdminHeader {...props}></AdminHeader>
      {props.children}
    </div>
  )
}

export default AdminLayout
