import { ISnippet } from "../../types/SnippetModels";
import SyntaxHighlighterWrapper from "../../components/syntax-highlighter/SyntaxHighlighterWrapper";
import { useNavigate } from "react-router";
import TagList from "./components/TagList";
import Toolbar from "./components/Toolbar";
import { RouteEnum } from "../../types/RouteModels";
import useAnimation from "../../utils/useAnimation";

interface Props {
  snippet: ISnippet;
}

const SnippetCard = ({ snippet }: Props) => {
  const navigate = useNavigate();
  const { title, code, tags } = snippet;
  const { animateClass } = useAnimation();

  return (
    <div
      onClick={() => navigate(`/${RouteEnum.Snippet}/${title}`)}
      className={`group z-20 max-h-[700px] cursor-pointer overflow-hidden rounded-lg shadow-card hover:shadow-slate-300 ${animateClass}`}
    >
      <div className="bg-white px-3 pb-5 pt-4">
        <div className="flex h-3 justify-end">
          <Toolbar snippet={snippet} isForCard />
        </div>
        <span className="mb-2 line-clamp-1 text-lg font-bold text-gray-dark group-hover:text-secondary">
          {title}
        </span>
        <TagList tags={tags} />
      </div>
      <div className="h-[1px] bg-border-gradient opacity-50" />

      <SyntaxHighlighterWrapper
        styles={{ scrollbarWidth: "none", paddingBottom: "1rem" }}
      >
        {code}
      </SyntaxHighlighterWrapper>
    </div>
  );
};

export default SnippetCard;
