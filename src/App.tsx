import { ListProvider } from './ListContext'
import List from './components/ui/molecules/List'
import Header from './components/ui/templates/Header'
import Footer from './components/ui/templates/Footer'

const App = () => {
  return (
    <ListProvider>
      <Header />

      <main className="flex-auto flex flex-col overflow-y-auto h-full">
        <List />
      </main>

      <Footer />
    </ListProvider>
  )
}

export default App
