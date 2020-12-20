import React, { useState } from 'react'
import { SwipeableDrawer } from '@material-ui/core'

const SideNavMenu: React.FC = () => {
  const [state, setState] = useState(false)
  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setState(open)
  }
  return (
    <div>
      <SwipeableDrawer
        anchor={'left'}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <h2>SwipeableDrawer</h2>
      </SwipeableDrawer>
    </div>
  )
}

export default SideNavMenu
