import { useState } from 'react'
import './App.css'

interface ListItem {
  id?: number
  done: boolean
  text: string
}

const App = () => {
  const todayDate = new Date()
  const [list, setList] = useState([] as ListItem[])

  const [text, setText] = useState('')

  const editForm = (text: string) => {
    setText(text)
  }

  const add = () => {
    setList([...list, { text, done: false, id: list.length + 1 }])

    setText('')
  }

  const edit = (listItem: ListItem, index: number) => {
    setList(list.map((item, itemIndex) => (itemIndex === index ? listItem : item)))
  }

  const remove = (index: number) => {
    setList(list.filter((_item, itemIndex) => itemIndex !== index))
  }

  return (
    <>
      <header className="flex-none w-full">
        <h1>TODO List</h1>

        {/* create item form */}
        <form
          onSubmit={event => {
            event.preventDefault()
            add()
          }}
        >
          <input
            type="text"
            required
            placeholder="Write here..."
            value={text}
            onChange={event => editForm(event.target.value)}
          />

          <button type="submit">Add</button>
        </form>
      </header>

      <main className="flex-auto flex flex-col overflow-y-auto h-full">
        <ul>
          {/* empty list */}
          {list.length === 0 && <li>Create your first TODO item.</li>}

          {/* has items */}
          {list.length > 0 &&
            list.map((listItem, index) => (
              <li className="flex items-center space-x-3">
                {/* checkbox that marks if the task is done */}
                <input
                  type="checkbox"
                  checked={listItem.done}
                  onChange={() =>
                    edit(
                      {
                        ...listItem,
                        done: !listItem.done
                      },
                      index
                    )
                  }
                  name={`list-item-${listItem.id}`}
                  id={`list-item-${listItem.id}`}
                />

                <p>{listItem.done ? <s>{listItem.text}</s> : listItem.text}</p>

                {/* deletes the item from the list */}
                <button onClick={() => remove(index)}>Remove</button>
              </li>
            ))}
        </ul>
      </main>

      <footer className="flex-none w-full text-center">TODO List &copy; {todayDate.getFullYear()} nobitwise</footer>
    </>
  )
}

export default App
