import React from 'react'
import PropTypes from 'prop-types'

const PrimaryButton = (props) => (
  <button {...props} className="px-4 py-1 m-2 text-lg bg-blue-700 text-white rounded-md">{props.children}</button>
)

PrimaryButton.propTypes = {
  children: PropTypes.string.isRequired
}


export default PrimaryButton