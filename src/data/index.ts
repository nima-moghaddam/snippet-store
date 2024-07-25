import { Tags } from "../constants/tags"
import { ISnippetFormat } from "../types/ISnippetFormat"

export const Snippets: ISnippetFormat[] = [
  {
    title: "React query custom useQuery hook",
    tags: [Tags.ReactQuery],
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
      }`
  }
]
