import { createContext, useState, useCallback, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'

// create new context
const Context = createContext({})

export default function NavbarProvider({ children }) {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const toggle = useCallback(() => {
    setOpen((prevState) => !prevState)
  }, [])

  useEffect(() => {
    if (open && window.innerWidth > 750) {
      router.events.on('routeChangeStart', () => setOpen(false))
    }
    return () => {
      if (open && window.innerWidth > 750) {
        router.events.off('routeChangeStart', () => setOpen(false))
      }
    }
  }, [open, router])

  return (
    <Context.Provider value={{ open, toggle }}>
      {children}
    </Context.Provider>
  )
}

export function useToggle() {
  return useContext(Context)
}
