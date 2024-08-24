import { Category } from "../../../constants/Category";
import { Tags } from "../../../constants/tags";

export const NextJs = [
  {
    title: "fetch function",
    tags: [Tags.React, Tags.NextJs],
    category: Category.NextJs,
    description: "next js fetch function template",
    code: `const fetchFunc = async () => {
        try {
          const response = await fetch(\`url\`, {
            headers: {
              "Content-Type": "application/json",
            },
            cache: "no-store",
          });
      
          if (!response.ok) {
            throw new Error(\`An error occurred: \${response.statusText}\`);
          }
      
          const data = await response.json();
          return data;
        } catch (error: any) {
          throw new Error("Failed to fetch data");
        }
      };`,
  },
];
