import { Category } from "../../../constants/Category";
import { Tags } from "../../../constants/tags";

export const Utils = [
  {
    title: "Date is today",
    tags: [Tags.Utility],
    category: Category.Utils,
    description: "get the date and examine if it is today?",
    code: `const isToday = (date) => {
          const today = new Date();
          return (
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
          );
        };`,
  },
  {
    title: "Add Days",
    tags: [Tags.Utility],
    category: Category.Utils,
    description: "increase current day by number",
    code: `const addDays = (date:Date, number:number) => {
          const newDate = new Date(date);
          newDate.setDate(date.getDate() + number);
          return newDate;
      }`,
  },
  {
    title: "scroll into position",
    tags: [Tags.Utility, Tags.React],
    category: Category.Utils,
    description: "scroll into ref position with specific ref",
    code: `const scrollToPosition = (ref, offset: number = 0) => {
      let position = 0;
      if (ref!.current) {
        position = ref.current.getBoundingClientRect()?.top + window.pageYOffset;
      }
      window.scrollTo({ top: position + offset, behavior: 'smooth' });
    };
      }`,
  },
  {
    title: "Uppercase first letter",
    tags: [Tags.Utility],
    category: Category.Utils,
    code: `export const uppercaseFirstLetter = (text: string) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };`,
  },
  {
    title: "download image",
    tags: [Tags.Utility, Tags.React, Tags.Html2Canvas],
    category: Category.Utils,
    description:
      "download image using html2canvas lib, formats can be jpeg or png",
    code: ` const downloadImage = async (format: "png" | "jpeg" | "svg", ref: RefObject<HTMLDivElement>) => {
      if (!ref.current) return
      const canvas = await html2canvas(ref.current)
      const dataUrl = canvas.toDataURL(\`image/\${format}\`)
    
      const link = document.createElement("a")
      link.href = dataUrl
      link.download = \`component.\${format}\`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }`,
  },
  {
    title: "clean obj",
    tags: [Tags.Utility],
    category: Category.Utils,
    description:
      "This function removes properties from the object that have values of null, undefined, or an empty array. All other properties remain intact in the returned object.",
    code: `export const cleanObject = (obj) => {
      const cleanedObj = {}
   
      for (const key in obj) {
         if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const value = obj[key]
   
            if (![null, undefined].includes(value) && !(Array.isArray(value) && value.length === 0)) {
               cleanedObj[key] = value
            }
         }
      }
   
      return cleanedObj
   }`,
  },
  {
    title: "convert time HH:mm:ss",
    tags: [Tags.Utility],
    category: Category.Utils,
    description:
      "Convert a time string in the format HH:mm:ss to a Date object",
    code: `export const timeStringToDate = (timeString) => {
      if (!timeString) return ""
      const [hours, minutes, seconds] = timeString.split(":")
      const date = new Date()
      date.setHours(hours)
      date.setMinutes(minutes)
      date.setSeconds(seconds)
      return date
   }`,
  },
  {
    title: "convert to shamsi date",
    tags: [Tags.Utility],
    category: Category.Utils,
    description: "convert Date to persian shamsi date",
    code: `const convertToFaIRDateString = (date: Date) => {
      const convertedTime = date.toLocaleDateString("fa-IR")
      return convertedTime
   }`,
  },
];
