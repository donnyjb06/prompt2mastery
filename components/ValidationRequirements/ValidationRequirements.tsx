import React from 'react'
import { useWatch } from 'react-hook-form'

interface ValidationRequirementsProps {
  name: string,
  control: string
}

const ValidationRequirements = ({control, name}: ValidationRequirementsProps) => {
  const password = useWatch({
    name,
  })
  return (
    <div>ValidationRequirements</div>
  )
}

export default ValidationRequirements