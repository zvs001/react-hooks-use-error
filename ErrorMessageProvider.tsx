import React, { ReactElement } from 'react'
import { ErrorContext, ErrorProviderContextParams } from './lib/context'

interface Props extends Pick<ErrorProviderContextParams, 'getErrorMessage'> {
  children: ReactElement
}

function ErrorMessageProvider(props: Props) {
  const { children, getErrorMessage } = props

  return (
    <ErrorContext.Provider
      value={{
        getErrorMessage,
      }}
    >
      {children}
    </ErrorContext.Provider>
  )
}

export default ErrorMessageProvider
