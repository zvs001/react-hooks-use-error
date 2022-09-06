
import React from 'react'

export interface ErrorProviderContextParams {
  getErrorMessage<Err extends Error>(error: Err): string
}

const processErrorDefault = function errorProcessor(error: Error): string {
  if (typeof error === 'string') return error
  return error?.message || ''
}

export const ErrorContext = React.createContext<ErrorProviderContextParams>({
  getErrorMessage: processErrorDefault,
})

export default { ErrorContext }
