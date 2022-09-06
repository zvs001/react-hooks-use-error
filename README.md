
React Hook to provide more feature when work with errors.

[![npm](https://img.shields.io/npm/v/react-hooks-use-error)](https://www.npmjs.com/package/react-hooks-use-error)

## Install

``yarn add react-hooks-use-error``

or 

```npm i -S react-hooks-use-error```


## Usage

Simple example:

```tsx
import { useError } from 'react-hooks-use-error'

function MyComponent() {
  const errorState = useError()
  const { error, isErrored, setError, resetError } = errorState
    
  async function fetchData() {
    try {
      await api.fetchSomething()
    } catch (e) {
      setError(e)
    }
  }
    
  useEffect(() => {
    fetchData()
  }, [])


  return <div>{error}</div>
}
```



### ErrorMessageProvider 

You can set error processor in global context.
It is good when you have same api or same errors in many components, or
you want to support localization.

```tsx
import { ErrorMessageProvider } from 'react-hooks-use-error'

function ComponentWithErrorMessageProvider({ user_id }) {
  const getErrorMessage = (e) => {
    // axios api error example
    const { status, data } = e.request || {}
    const { errorCode } = data

    if(errorCode === 'email-is-invalid') {
      return 'Email you provided is invalid. Try to use different email'
    }

    return e.message
  }
    
  return (
    <ErrorMessageProvider getErrorMessage={getErrorMessage}>
      <App /> 
    </ErrorMessageProvider>
  ) 
}
```


## See Also

List of libraries that work well with hook:

- [react-hooks-async-handlers](https://www.npmjs.com/package/react-hooks-async-handlers)
