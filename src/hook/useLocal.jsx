import  { useEffect, useState } from 'react'

function useLocal(key, initialVal="") {
  const [value, setValue] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initialVal
  )

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value, setValue]
  
}

export default useLocal;