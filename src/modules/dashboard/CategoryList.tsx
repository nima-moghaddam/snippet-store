import Card from "../../components/card/Card";
import { LinksCategory, SnippetCategory } from "../../constants/Category";
import { RouteEnum } from "../../types/RouteModels";
import { categoryIconPicker } from "../../utils/categoryIconPicker";
import CategoryPill from "./components/CategoryPill";

const CategoryList = () => {
  const snippetCategories = Object.values(SnippetCategory);
  const linkCategories = Object.values(LinksCategory);
  return (
    <Card classes="w-full lg:w-2/3">
      <div className="flex flex-col">
        <div className="mb-3 font-bolder text-gray-dark">Category List</div>
        <p className="mb-3 text-base text-gray">
          This is the list of all active categories. for more info click on each
          pill.
        </p>
        <div className="flex flex-wrap">
          {snippetCategories.map((category) => (
            <CategoryPill
              key={category}
              name={category}
              icon={categoryIconPicker(category)}
              route={RouteEnum.Snippet}
            />
          ))}
          {linkCategories.map((category) => (
            <CategoryPill
              key={category}
              name={category}
              icon={categoryIconPicker(category)}
              route={RouteEnum.Links}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default CategoryList;
