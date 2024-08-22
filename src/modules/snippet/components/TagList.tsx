import { Tags } from "../../../constants/tags"
import useFilterStore from "../../../store/useFilterStore"
import useMenuStore from "../../../store/useMenuStore"

const TagList = ({ tags }: { tags: Tags[] }) => {
  const { setTagFilter } = useFilterStore((state) => state)
  const { resetMenu } = useMenuStore((state) => state)

  const handleTagClick = (e: React.MouseEvent<HTMLSpanElement>, tag: Tags) => {
    e.stopPropagation()
    setTagFilter(tag)
    resetMenu()
  }
  return (
    <div className="flex flex-wrap">
      {tags?.map((i) => (
        <span className="text-blue text-sm me-1 cursor-pointer hover:text-secondary" onClick={(e) => handleTagClick(e, i)}>
          #{i}
        </span>
      ))}
    </div>
  )
}

export default TagList
