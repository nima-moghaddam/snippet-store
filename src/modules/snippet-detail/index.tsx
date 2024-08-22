import { useLocation, useNavigate } from "react-router";
import SyntaxHighlighterWrapper from "../../components/syntax-highlighter/SyntaxHighlighterWrapper";
import { Tags } from "../../constants/Tags";
import { SnippetList } from "../../data";
import useFilterStore from "../../store/useFilterStore";
import useMenuStore from "../../store/useMenuStore";
import copy from "copy-to-clipboard";
import { MdContentCopy } from "react-icons/md";
import { toastFire } from "../../components/toast/Toast";
import { IoCameraOutline } from "react-icons/io5";
import { RouteEnum } from "../../types/RouteModels";
import useAnimation from "../../utils/useAnimation";
import { ImLink } from "react-icons/im";
import Card from "../../components/card/Card";

const SnippetDetailPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { setTagFilter } = useFilterStore((state) => state);
  const { resetMenu } = useMenuStore((state) => state);
  const { animateClass } = useAnimation();

  const snippetTitle = decodeURIComponent(
    pathname.split(`/${RouteEnum.Snippet}/`)[1],
  );
  const snippet = SnippetList.find((code) => code.title === snippetTitle);

  const handleTagFilter = (tag: Tags) => {
    setTagFilter(tag);
    resetMenu();
    navigate(`/${RouteEnum.Snippet}`);
  };

  const handleCodeCopy = () => {
    if (snippet) {
      copy(snippet?.code + (`\n${snippet?.type}` || ""));
      toastFire("success", "Code copied");
    }
  };

  return (
    <>
      <Card classes={`${animateClass} mb-4`}>
        <div className="mb-1 border-b border-gray-lighter pb-2">
          <h1 className="text-lg font-bold text-gray-dark md:text-xl">
            {snippet?.title}
          </h1>
        </div>

        <div className="mb-5 flex flex-col items-start justify-between sm:flex-row sm:items-center">
          <div className="flex flex-wrap">
            {snippet?.tags?.map((tag) => (
              <div
                className="me-1 cursor-pointer text-blue hover:text-secondary"
                onClick={() => handleTagFilter(tag)}
              >
                #{tag}
              </div>
            ))}
          </div>
          <div className="flex items-center">
            {snippet?.link && (
              <button
                onClick={() => window.open(snippet?.link)}
                className="flex cursor-pointer items-center justify-center px-2 py-1 text-gray-dark hover:text-secondary"
              >
                <ImLink className="me-2 h-4 w-4" />
                <span>Link</span>
              </button>
            )}
            <button
              onClick={() => window.open(`preview/${snippet?.title}`)}
              className="flex cursor-pointer items-center justify-center px-2 py-1 text-gray-dark hover:text-secondary"
            >
              <IoCameraOutline className="me-2 h-5 w-5" />
              <span>Photo</span>
            </button>
            <button
              onClick={handleCodeCopy}
              className="flex cursor-pointer items-center justify-center px-2 py-1 text-gray-dark hover:text-secondary"
            >
              <MdContentCopy className="me-2 h-4 w-4" />
              <span>Copy</span>
            </button>
          </div>
        </div>

        {snippet && (
          <div className="mb-10 flex w-full flex-col">
            <div className="overflow-hidden rounded-md">
              <SyntaxHighlighterWrapper>
                {snippet.code}
              </SyntaxHighlighterWrapper>
            </div>
            {snippet?.type && (
              <div className="mt-5 overflow-hidden rounded-md">
                <SyntaxHighlighterWrapper>
                  {snippet.type}
                </SyntaxHighlighterWrapper>
              </div>
            )}
          </div>
        )}
      </Card>
      {snippet?.description && (
        <Card>
          <div className="mb-2 text-lg font-bold text-gray-dark">
            Description
          </div>
          <p className="text-base text-gray">{snippet?.description}</p>
        </Card>
      )}
    </>
  );
};

export default SnippetDetailPage;
