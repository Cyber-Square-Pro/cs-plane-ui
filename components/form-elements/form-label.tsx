import React from 'react'
import { Label } from '../ui/label'

interface Props{
 labelText: string
}

export const FormLabel:React.FC<Props> = (props) => {
    const {labelText} = props
  return (
    <Label className="block text-md text-muted-foreground font-medium text-gray-700">
        { labelText }
    </Label>
  )
}

 