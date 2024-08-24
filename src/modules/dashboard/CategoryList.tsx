import Card from "../../components/card/Card";
import { LinksCategory, SnippetCategory } from "../../constants/Category";
import { RouteEnum } from "../../types/RouteModels";
import { categoryIconPicker } from "../../utils/categoryIconPicker";
import CategoryPill from "./components/CategoryPill";

const CategoryList = ({ classes }: { classes: string }) => {
  const snippetCategories = Object.values(SnippetCategory);
  const linkCategories = Object.values(LinksCategory);
  return (
    <Card
      classes={`${classes}`}
      title="Category List"
      subTitle="   This is the list of all active categories. for more info click on each
      pill."
    >
      <div className="flex flex-wrap mt-5">
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
    </Card>
  );
};

export default CategoryList;
