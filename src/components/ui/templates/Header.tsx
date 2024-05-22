import { useState } from 'react'
import Button from '@/components/ui/atoms/Button'
import PlusCircle from '@/components/icons/PlusCircle'
import { useListDispatch } from '@/ListContext'

const Header = () => {
  const [text, setText] = useState('')
  const dispatch = useListDispatch()

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

  return (
    <header className="p-5 container text-center pt-7 sm:text-left sm:pt-10 mx-auto flex-none w-full">
      <h1 className="font-kalam text-3xl sm:text-4xl mb-4">Yet another TODO List</h1>

      {/* create item form */}
      <form
        onSubmit={add}
        className="flex-col space-y-3 sm:flex-row flex items-center sm:justify-normal justify-center sm:space-y-0 sm:space-x-3"
      >
        <textarea
          required
          placeholder="Write here..."
          value={text}
          name="new-item"
          onChange={event => setText(event.target.value)}
          className="w-full sm:w-auto rounded-lg border-none ring-1 ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-green-500 transition"
        />

        {/* mobile button */}
        <Button
          variant="icon"
          type="submit"
          title="Add new Item"
          className="hidden sm:inline-flex"
        >
          <PlusCircle />
        </Button>

        {/* desktop button */}
        <Button
          type="submit"
          className="w-full space-x-3 sm:hidden"
        >
          <span>Add new Item</span>
          <PlusCircle />
        </Button>
      </form>
    </header>
  )
}

export default Header
