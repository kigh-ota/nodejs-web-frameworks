import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('contents')
const root = createRoot(container!)
root.render(
  <>
    <AppBar position="sticky">
      <Toolbar>Fastify</Toolbar>
    </AppBar>
    <a href="./logout">Logout</a>
  </>
)
