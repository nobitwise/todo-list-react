import { ListItem as ListItemType } from '../../../types'
import Button from '../atoms/Button'
import { useListDispatch } from '../../../ListContext'

interface ListItemProps {
  listItem: ListItemType
}

const ListItem = ({ listItem }: ListItemProps) => {
  const dispatch = useListDispatch()

  return (
    <li className="flex items-center space-x-3">
      {/* checkbox that marks if the task is done */}
      <input
        type="checkbox"
        checked={listItem.done}
        onChange={() =>
          dispatch({
            type: 'changed',
            item: {
              ...listItem,
              done: !listItem.done
            }
          })
        }
        name={`list-item-${listItem.id}`}
        id={`list-item-${listItem.id}`}
      />

      <p>{listItem.done ? <s>{listItem.text}</s> : listItem.text}</p>

      {/* deletes the item from the list */}
      <Button
        color="danger"
        onClick={() => dispatch({ type: 'deleted', item: listItem })}
      >
        Remove
      </Button>
    </li>
  )
}

export default ListItem
