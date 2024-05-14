import { useState } from 'react'
import { useListDispatch } from '../../../ListContext'
import Button from '../atoms/Button'
import FormField from '../atoms/FormField'

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
    <header className="container py-10 mx-auto flex-none w-full text-center">
      <h1 className='font-kalam text-5xl'>Yet another TODO List</h1>

      {/* create item form */}
      <form
        onSubmit={add}
        className="flex items-center justify-center py-5 space-x-3"
      >
        <FormField>
          <input
            type="text"
            required
            placeholder="Write here..."
            value={text}
            name="new-item"
            onChange={event => setText(event.target.value)}
          />
        </FormField>

        <Button type="submit">Add</Button>
      </form>
    </header>
  )
}

export default Header
