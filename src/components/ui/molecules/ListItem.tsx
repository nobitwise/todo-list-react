import { ListItem as ListItemType } from '../../../types'
import Button from '../atoms/Button'
import { useListDispatch } from '../../../ListContext'
import { useEffect, useState } from 'react'
import Remove from '../../../icons/Remove'

interface ListItemProps {
  listItem: ListItemType
}

const ListItem = ({ listItem }: ListItemProps) => {
  const dispatch = useListDispatch()
  const [randomRotation, setRandomRotation] = useState(0)
  const [randomColorIndex, setRandomColorIndex] = useState(0)

  const colorList = [
    'from-red-100 to-red-200',
    'from-green-100 to-green-200',
    'from-blue-100 to-blue-200',
    'from-pink-100 to-pink-200',
    'from-yellow-100 to-yellow-200',
    'from-orange-100 to-orange-200',
    'from-purple-100 to-purple-200'
  ]

  useEffect(() => {
    // sets a random degree to rotate the tape
    // also randomly decides if the rotation will be positive or negative
    setRandomRotation(Math.random() * 5 * (Math.random() > 0.5 ? 1 : -1))

    setRandomColorIndex(Math.floor(Math.random() * (colorList.length + 1)))
  }, [])

  return (
    <li
      className={`${colorList[randomColorIndex]} p-3 relative shadow-slate-600/20 min-h-64 shadow-md bg-gradient-to-br `}
    >
      {/* simulating a tape */}
      <span
        style={{
          transform: `rotate(${randomRotation}deg)`
        }}
        className="opacity-70 absolute shadow-orange-600/20  h-8 w-5 shadow-md bg-gradient-to-br from-yellow-100 to-yellow-200 left-1/2 -translate-x-1/2 -top-3"
      ></span>

      <header > 
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
          className="size-5 inline-block accent-green-400"
        />

        {/* deletes the item from the list */}
        <Button
          color="danger"
          onClick={() => dispatch({ type: 'deleted', item: listItem })}
          title="Remove item"
          className="absolute p-2 top-0 right-0 hover:bg-red-500/30 transition hover:scale-110 rounded-full text-red-600"
        >
          <Remove />
        </Button>
      </header>

      <p>{listItem.done ? <s className="text-slate-400">{listItem.text}</s> : listItem.text}</p>
    </li>
  )
}

export default ListItem
