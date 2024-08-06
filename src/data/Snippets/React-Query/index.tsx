import { Category } from "../../../constants/Category"
import { Tags } from "../../../constants/Tags"

export const ReactQuery = [
  {
    title: "useRequest",
    tags: [Tags.React, Tags.ReactQuery],
    category: Category.ReactQuery,
    description: "custom hook for coupling useQuery with axios or fetch api's",
    code: `const useRequest = ({
            queryKey,
            url,
            staleTime = 0,
            enabled,
            successCallback,
            errorCallback,
            refetchOnWindowFocus,
            header = {},
            customBaseUrl
          }: RequestQuery) => {
            return useQuery({
              queryKey,
              queryFn: async () => {
                const requestOptions = {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: \`Bearer \${swid},
                    ...header
                  }
                }
                try {
                  const response = await fetch(\`\${customBaseUrl ?? BaseURL}/\${url}\`, requestOptions)
          
                  if (!response.ok) {
                    throw new Error("Server has encountered problem")
                  }
          
                  const parsedResponse = await response.json()
                  const data = parsedResponse.data
                  return data
                } catch (error: any) {
                  throw new Error(error.message)
                }
              },
              staleTime: staleTime === "Infinity" ? Infinity : staleTime,
              enabled,
              refetchOnWindowFocus,
              onSuccess: (data) => {
                successCallback?.(data)
              },
              onError: (error: any) => {
                errorCallback?.(error.message)
              }
            })
          }`,
    type: `interface RequestQuery {
      queryKey: string | any[]
      url: string
      staleTime?: number | "Infinity"
      enabled?: boolean
      successCallback?: (data: any) => void
      errorCallback?: (error: string) => void
      refetchOnWindowFocus?: boolean | "always"
      header?: Record<string, string>
      customBaseUrl?: string
    }`
  },
  {
    title: "Key handler",
    tags: [Tags.React, Tags.ReactQuery],
    category: Category.ReactQuery,
    description: "",
    code: `const keyHandler = (key: string) => {
          return {
            predicate: (query: any) => query.queryKey.includes(key)
          }
        }`
  },
  {
    title: "useMutation",
    tags: [Tags.React, Tags.ReactQuery],
    category: Category.ReactQuery,
    description: "custom hook for coupling useMutate with axios or fetch api's",
    code: `const useMutate = ({
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
                  throw new Error("Server has encountered problem")
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
        `,
    type: `
    interface MutateQuery {
      method: "POST" | "DELETE" | "PATCH" | "PUT"
      url?: string
      successCallback?: (data: any) => void
      errorCallback?: (error: string) => void
      header?: Record<string, string>
      preventDefaultMessage?: boolean
      customBaseUrl?: string
    }
    
     interface QueryParam {
      query?: any
      id?: string
      requestUrl?: string
    }`
  }
]
