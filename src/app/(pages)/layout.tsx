import { ModeToggle } from '@/app/Component/ModeToggle'
import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <ModeToggle/>
      {children}
    </div>
  )
}

export default layout
