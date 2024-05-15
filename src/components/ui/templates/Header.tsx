import { useState } from 'react'
import { useListDispatch } from '../../../ListContext'
import Button from '../atoms/Button'
import PlusCircle from '../../icons/PlusCircle'

const Header = () => {
  const [text, setText] = useState('')

  // adds the item to the list
  const add = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    dispatch({
      type: 'added',
      item: {
        text,
        done: false
      }
    })

    // clears text input field
    setText('')
  }

  const dispatch = useListDispatch()

  return (
    <header className="container pt-10 pb-2 mx-auto flex-none w-full text-center">
      <h1 className="font-kalam text-4xl">Yet another TODO List</h1>

      {/* create item form */}
      <form
        onSubmit={add}
        className="flex items-center justify-center py-5 space-x-3"
      >
        <input
          type="text"
          required
          placeholder="Write here..."
          value={text}
          name="new-item"
          onChange={event => setText(event.target.value)}
          className="rounded-lg border-none ring-1 ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-green-500 transition"
        />

        <Button
          variant="icon"
          type="submit"
        >
          <PlusCircle />
        </Button>
      </form>
    </header>
  )
}

export default Header
