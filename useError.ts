import { useContext, useState } from 'react'
import { ErrorContext } from './lib/context'

export interface UseErrorOptions {
  getErrorMessage?<Err extends Error>(error: Err): string
}

function useError(options?: UseErrorOptions) {
  const { getErrorMessage } = options || {}
  const [errorMessage, setErrorMessage] = useState('')
  const [isErrored, setIsErrored] = useState(false)

  const errorCtx = useContext(ErrorContext)

  function resetError() {
    setErrorMessage('')
    setIsErrored(false)
  }

  function setError(error: Error | null | string | unknown) {
    let gerErrorMessageFn = getErrorMessage || errorCtx.getErrorMessage

    if (!error) return resetError()
    if (typeof error === 'string') error = new Error(error)
    const apiError = gerErrorMessageFn(error as Error)
    setErrorMessage(apiError)
    setIsErrored(true)
  }

  return { error: errorMessage, isErrored, setError, resetError }
}

export default useError
