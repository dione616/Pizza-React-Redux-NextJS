import React, { Component } from "react"
import AuthRoute from "../../components/HOC/authRoute"
import AdminLayout from "../../components/layouts/adminLayout"
import { connect } from "react-redux"
import { updateSite } from "../../store/actions/message_action"
import { compose } from "redux"

class AdminSite extends Component {
  state = {
    address: this.props.siteData.address,
    email: this.props.siteData.email,
    phone: this.props.siteData.phone,
    update: false,
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.dispatch(updateSite(this.state)).then(() => {
      console.log(this.props.admin.site.update)
      if (this.props.admin.site.update) {
        this.setState({ update: true })
        setTimeout(() => {
          this.setState({ update: false })
        }, 2000)
      }
    })
  }

  handleEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  handleAddress = (e) => {
    this.setState({ address: e.target.value })
  }
  handlePhone = (e) => {
    this.setState({ phone: e.target.value })
  }
  render() {
    console.log(this.props)
    const form = this.state
    return (
      <AdminLayout sectionName="Site Data">
        <form onSubmit={this.handleSubmit} className="form">
          <div className="form-group">
            <label>Address</label>
            <input type="text" className="form-control" onChange={(e) => this.handleAddress(e)} value={form.address} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" onChange={(e) => this.handleEmail(e)} value={form.email} />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="text" className="form-control" onChange={(e) => this.handlePhone(e)} value={form.phone} />
          </div>
          <button className="btn-primary" type="submit">
            Submit
          </button>
          {this.state.update ? <div className="update">Done</div> : null}
        </form>
      </AdminLayout>
    )
  }
}

const mapState = (state) => {
  return {
    admin: state.admin,
  }
}
// TODO:compose
//compose(AuthRoute,connect(mapState))(AdminSite)
export default compose(AuthRoute, connect(mapState))(AdminSite)
