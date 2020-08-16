import React from 'react'
import PropTypes from 'prop-types'

const SecondaryButton = (props) => (
  <button {...props} className="px-4 py-1 m-2 text-lg bg-gray-600 text-white rounded-md">{props.children}</button>
)

SecondaryButton.propTypes = {
  children: PropTypes.string.isRequired
}


export default SecondaryButton