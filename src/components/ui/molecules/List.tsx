import ListItem from './ListItem'
import { useList } from '../../../ListContext'

const List = () => {
  const list = useList()

  return (
    <ul>
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
