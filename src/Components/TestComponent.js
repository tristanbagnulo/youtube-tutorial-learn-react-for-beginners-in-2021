import React from 'react'
import { Button } from "semantic-ui-react"

export default function TestComponent({childToParent}) {
    const data = "information from child component";
  return (
    <div>
        <Button onClick={() => childToParent(data)}>
            Click me - Nah
        </Button>
    </div>
    
  )
};