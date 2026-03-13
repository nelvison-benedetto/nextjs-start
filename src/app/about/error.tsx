'use client' // Error boundaries must be Client Components
 
import { use, useEffect } from 'react'
import { useRouter } from 'next/navigation'  //added. è /NAVIGATION!!
import { startTransition } from 'react' //added

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  const router = useRouter();
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          //() => reset()  default dato da DOCS nextjs
          ()=> {
            startTransition(() => {
              router.refresh()
              reset()
            })// refresh dati + retry render. top. 
          }
        }
      >
        Try again
      </button>
    </div>
  )
}