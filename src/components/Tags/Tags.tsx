import './Tags.scss'

interface TagsProps {
  items: string[]
}

const Tags = ({ items }: TagsProps) => {
  return (
    <div className="tags">
      <ul className="tags__list">
        {items.map((tag, index) => (
          <li key={index} className="tags__item">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tags
