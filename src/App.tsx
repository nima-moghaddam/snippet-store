import SyntaxHighlighterWrapper from "./components/syntax-highlighter"

function App() {
  const codeString = `
  const useMutate = ({
    method,
    url,
    successCallback,
    errorCallback,
    header = {},
    customBaseUrl,
    preventDefaultMessage = false
  }: MutateQuery) => {
    const toast = useToast()
  
    return useMutation({
      mutationFn: async ({ id, query, requestUrl }: QueryParam) => {
        const requestOptions = {
          method,
          headers: {
            "Content-Type": "application/json",
            Authorization: \`Bearer \${swid}\`,
            ...header
          },
          body: JSON.stringify(query)
        }
  
        const urlPath = requestUrl || \`\${url}\${id ? \`/\${id}\` : ""}\`
  
        try {
          const response = await fetch(\`\${customBaseUrl ?? BaseURL}/\${urlPath}\`, requestOptions)
  
          if (!response.ok) {
            throw new Error("Server has encountered a problem")
          }
  
          const parsedResponse = await response.json()
          const data = parsedResponse.data
  
          return { ...data, statusMessage: parsedResponse.message }
        } catch (error: any) {
          throw new Error(error.message)
        }
      },
      onSuccess: (data) => {
        successCallback?.(data)
        !preventDefaultMessage && toast("Success", data.statusMessage)
      },
      onError: (error: any) => {
        errorCallback?.(error.message)
        !preventDefaultMessage && toast("Error", error.message)
      }
    })
  }
  `
  return <SyntaxHighlighterWrapper>{codeString}</SyntaxHighlighterWrapper>
}

export default App
