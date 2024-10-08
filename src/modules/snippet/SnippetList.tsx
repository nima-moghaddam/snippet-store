import { useState } from "react";
import { useNavigate } from "react-router";
import { ISnippet } from "../../types/SnippetModels";
import SyntaxHighlighterWrapper from "../../components/syntax-highlighter/SyntaxHighlighterWrapper";
import TagList from "./components/TagList";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import Toolbar from "./components/Toolbar";
import { RouteEnum } from "../../types/RouteModels";
import useAnimation from "../../utils/useAnimation";

interface Props {
  snippet: ISnippet;
  hasBorder?: boolean;
}

const SnippetList = ({ snippet }: Props) => {
  const [openList, setOpenList] = useState(false);
  const navigate = useNavigate();
  const { animateClass } = useAnimation();

  const { title, code, tags } = snippet;

  return (
    <div className={`mb-4 flex flex-col ${animateClass}`}>
      <TagList tags={tags} />
      <div className="mt-1 flex items-center">
        {openList ? (
          <span
            className="cursor-pointer rounded-full bg-primary-gradient p-1"
            onClick={() => setOpenList(false)}
          >
            <FiChevronDown className="h-5 w-5 text-white" />
          </span>
        ) : (
          <span
            className="cursor-pointer rounded-full bg-primary-gradient p-1"
            onClick={() => setOpenList(true)}
          >
            <FiChevronRight className="h-5 w-5 text-white" />
          </span>
        )}
        <div
          className="ms-3 cursor-pointer text-lg font-bold text-gray-dark hover:text-secondary"
          onClick={() => navigate(`/${RouteEnum.Snippet}/${title}`)}
        >
          {title}
        </div>
      </div>
      {openList && (
        <div className="mb-2 mt-4 overflow-hidden rounded-xl">
          <SyntaxHighlighterWrapper>{code}</SyntaxHighlighterWrapper>
        </div>
      )}
      <div
        className={`flex items-center justify-end border-b border-gray-lighter pb-2`}
      >
        <Toolbar snippet={snippet} />
      </div>
      {/* {hasBorder && <div className="h-[1px] bg-border-gradient opacity-50" />} */}
    </div>
  );
};

export default SnippetList;
