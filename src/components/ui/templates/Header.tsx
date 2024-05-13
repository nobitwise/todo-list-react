import { useState } from 'react'
import { useListDispatch } from '../../../ListContext'
import Button from '../atoms/Button'
import FormField from '../atoms/FormField'

const Header = () => {
  const [text, setText] = useState('')

  const editForm = (text: string) => {
    setText(text)
  }

  const add = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    dispatch({
      type: 'added',
      item: {
        text,
        done: false
      }
    })
    setText('')
  }

  const dispatch = useListDispatch()

  return (
    <header className="flex-none w-full">
      <h1>TODO List</h1>

      {/* create item form */}
      <form onSubmit={add} className='flex items-center space-x-3'>
        <FormField>
          <input
            type="text"
            required
            placeholder="Write here..."
            value={text}
            onChange={event => editForm(event.target.value)}
          />
        </FormField>

        <Button type="submit">Add</Button>
      </form>
    </header>
  )
}

export default Header
