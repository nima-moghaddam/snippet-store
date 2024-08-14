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
    <section className={`${animateClass}`}>
      <div className="mb-1 border-b border-slate-300 pb-2">
        <h1 className="text-[1.5rem] font-semibold md:text-[2rem]">
          {snippet?.title}
        </h1>
      </div>

      <div className="mb-5 flex flex-col items-start justify-between sm:flex-row sm:items-center">
        <div className="flex flex-wrap">
          {snippet?.tags?.map((tag) => (
            <div
              className="me-1 cursor-pointer text-blue hover:text-pink"
              onClick={() => handleTagFilter(tag)}
            >
              #{tag}
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <button
            onClick={() => window.open(`preview/${snippet?.title}`)}
            className="flex cursor-pointer items-center justify-center px-2 py-1 hover:text-pink"
          >
            <IoCameraOutline className="me-2 h-5 w-5" />
            <span>Photo</span>
          </button>
          <button
            onClick={handleCodeCopy}
            className="flex cursor-pointer items-center justify-center px-2 py-1 hover:text-pink"
          >
            <MdContentCopy className="me-2 h-4 w-4" />
            <span>Copy</span>
          </button>
        </div>
      </div>

      {snippet && (
        <div className="mb-10 flex w-full flex-col">
          <div className="overflow-hidden rounded-md">
            <SyntaxHighlighterWrapper>{snippet.code}</SyntaxHighlighterWrapper>
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
      {snippet?.description && (
        <>
          <div className="underline underline-offset-2 mb-1">Description</div>
          <p className="ps-3 font-light">{snippet?.description}</p>
        </>
      )}
    </section>
  );
};

export default SnippetDetailPage;
