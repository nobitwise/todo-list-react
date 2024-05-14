import { ListProvider } from './ListContext'
import List from './components/ui/molecules/List'
import Header from './components/ui/templates/Header'
import Footer from './components/ui/templates/Footer'

const App = () => {
  return (
    <ListProvider>
      <div className="text-slate-700 bg-gradient-to-b from-slate-100 to-slate-300 h-full flex flex-col">
        <Header />

        <main className="flex-auto container mx-auto flex flex-col overflow-y-auto h-full">
          <List />
        </main>

        <Footer />
      </div>
    </ListProvider>
  )
}

export default App
