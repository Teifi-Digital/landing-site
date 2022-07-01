import React from "react"
import * as Icons from "react-icons/fa"

function DynamicFaIcon({ name }) {
  const IconComponent = Icons[name]

  if (!IconComponent) {
    return <Icons.FaBeer />
  }

  return <IconComponent />
}

export default DynamicFaIcon