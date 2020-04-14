import React, { Component } from 'react'

import './form-input.styles.scss'

const FormInput = ({ label, handleChange, ...otherProps }) => (
  <div className="group">
    <input
      type="text"
      className="form-input"
      onChange={handleChange}
      {...otherProps}
    />
    {label ? (
      <label className={`${otherProps.value ? 'shrink' : ''} form-inpu-label`}>
        {label}
      </label>
    ) : null}
  </div>
)
export default FormInput