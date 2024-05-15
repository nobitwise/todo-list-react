import List from './components/ui/molecules/List'
import Header from './components/ui/templates/Header'
import Footer from './components/ui/templates/Footer'
import { useEffect } from 'react'
import { ListItem } from './types'
import { useListDispatch } from './ListContext'

const App = () => {
  const dispatch = useListDispatch()

  // checks localstorage for a list of items
  useEffect(() => {
    try {
      const storageList = JSON.parse(localStorage.getItem('list') ?? '[]') as ListItem[]

      dispatch({ type: 'setted', list: storageList })
    } catch (error) {
      console.error(error)
      dispatch({ type: 'setted', list: [] })
    }
  }, [])

  return (
    <div className="text-slate-700 bg-gradient-to-b from-slate-100 to-slate-300 h-full flex flex-col">
      <Header />

      <main className="flex-auto container mx-auto flex flex-col overflow-y-auto h-full">
        <List />
      </main>

      <Footer />
    </div>
  )
}

export default App
