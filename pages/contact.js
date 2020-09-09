import React, { Component } from "react"
import { Formik } from "formik"

class Contact extends Component {
  handleSubmit = (values, actions) => {
    console.log(values)
    actions.setSubmitting(false)
    actions.resetForm()
  }

  handleRules = (values) => {
    let errors = {}

    for (let prop in values) {
      if (!values[prop]) {
        errors[prop] = "Required"
      }
    }

    const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!reg.test(values.email)) {
      errors.email = "Not a valid email"
    }

    return errors
  }

  render() {
    return (
      <>
        <div className="title_page">
          <h1>Contact Us</h1>
        </div>
        <div className="content_wrapper">
          <div className="inner">
            <h1>Feel free to contact us</h1>
            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validate={(values) => this.handleRules(values)}
              onSubmit={(values, actions) => this.handleSubmit(values, actions)}
            >
              {({ errors, values, handleSubmit, handleChange, isSubmitting, handleBlur, touched }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Enter your name"
                      value={values.name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.name && touched.name ? <div className="error_label">{errors.name}</div> : null}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      placeholder="Enter your email"
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.email && touched.email ? <div className="error_label">{errors.email}</div> : null}
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Enter your message"
                      value={values.message}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && touched.message ? <div className="error_label">{errors.message}</div> : null}
                  </div>
                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    Submit
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </>
    )
  }
}
export default Contact
