import { colorList } from '@/types'
import { ListItemProps } from '@/types/ui'
import Button from '@/components/ui/atoms/Button'
import Checkbox from '@/components/ui/atoms/Checkbox'
import XMark from '@/components/icons/XMark'
import { useListDispatch } from '@/ListContext'

const ListItem = ({ listItem }: ListItemProps) => {
  const dispatch = useListDispatch()

  return (
    <li
      className={`${colorList[listItem.colorIndex ?? 0]} p-3 relative shadow-slate-600/20 min-h-64 shadow-md bg-gradient-to-br `}
    >
      {/* simulating a tape */}
      <span className="opacity-70 absolute shadow-orange-600/20  h-8 w-5 shadow-md bg-gradient-to-br from-yellow-100 to-yellow-200 left-1/2 -translate-x-1/2 -top-3"></span>

      <header>
        {/* checkbox that marks if the task is done */}
        <Checkbox
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
          title={`${listItem.done ? 'Uncheck' : 'Check'} item`}
        />

        {/* deletes the item from the list */}
        <Button
          variant="icon"
          color="danger"
          onClick={() => dispatch({ type: 'deleted', item: listItem })}
          title="Remove item"
          className="absolute top-0 right-0"
        >
          <XMark />
        </Button>
      </header>

      <p>{listItem.done ? <s className="text-slate-400">{listItem.text}</s> : listItem.text}</p>
    </li>
  )
}

export default ListItem
