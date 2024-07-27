import { Category } from "../../constants/Category"
import { Tags } from "../../constants/Tags"

export const Utils = [
  {
    title: "Date is today?",
    tags: [Tags.Utility],
    category: Category.Utils,
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
    title: "Add Days",
    tags: [Tags.Utility],
    category: Category.Utils,
    description: "increase current day by number",
    code: `export const addDays = (date:Date, number:number) => {
          const newDate = new Date(date);
          newDate.setDate(date.getDate() + number);
          return newDate;
      }`
  }
]
