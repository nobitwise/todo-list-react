import ListItem from './ListItem'
import { useList } from '../../../ListContext'

const List = () => {
  const list = useList()

  return (
    <ul className="p-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      {/* empty list */}
      {list.length === 0 && <li>Create your first TODO item.</li>}

      {/* has items */}
      {list.length > 0 &&
        list.map(listItem => (
          <ListItem
            key={listItem.id}
            listItem={listItem}
          />
        ))}
    </ul>
  )
}

export default List
