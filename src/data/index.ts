import { Tags } from "../constants/tags"
import { ISnippetFormat } from "../types/ISnippetFormat"

export const Snippets: ISnippetFormat[] = [
  {
    title: "React query custom useQuery hook",
    tags: [Tags.ReactQuery, Tags.Utility],
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
  },
  {
    title: "Checks if the passed date is today",
    tags: [Tags.Utility],
    description: "todays date",
    code: `const isToday = (date) => {
      const today = new Date();
      return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      );
    };`
  },
  {
    title: "email regex",
    tags: [Tags.Regex],
    description: "",
    code: `email: yup
    .string()
    .required("ایمیل را وارد کنید")
    .matches(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\. [0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   )`
  }
]
