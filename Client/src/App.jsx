import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './routers/router'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

function App() {

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ClerkProvider>
  )
}

export default App