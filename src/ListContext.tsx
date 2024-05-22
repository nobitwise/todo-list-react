import { Dispatch, ReactNode, Reducer, createContext, useContext, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ListAction, ListItem, colorList } from '@/types'

const initialList: ListItem[] = []

const setListOnLocalStorage = (list: ListItem[]) => {
  localStorage.setItem('list', JSON.stringify(list))
}

// ref: https://react.dev/reference/react/useReducer
const listReducer: Reducer<ListItem[], ListAction> = (list, action): ListItem[] => {
  switch (action.type) {
    case 'added': {
      const newList = [
        ...list,
        {
          ...action.item,
          id: uuidv4(),
          colorIndex: Math.floor(Math.random() * (colorList.length + 1))
        } as ListItem
      ]

      setListOnLocalStorage(newList)
      return newList
    }
    case 'changed': {
      const newList = list.map(listItem => (listItem.id === action.item?.id ? (action.item as ListItem) : listItem))

      setListOnLocalStorage(newList)
      return newList
    }
    case 'deleted': {
      const newList = list.filter(({ id }) => id !== action.item?.id)

      setListOnLocalStorage(newList)
      return newList
    }
    case 'set': {
      const newList = action.list as ListItem[]

      setListOnLocalStorage(newList)
      return newList
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

const ListContext = createContext([] as ListItem[])
const ListDispatchContext = createContext({} as Dispatch<ListAction>)

export const ListProvider = ({ children }: { children: ReactNode }) => {
  const [list, dispatch] = useReducer(listReducer, initialList)

  return (
    <ListContext.Provider value={list}>
      <ListDispatchContext.Provider value={dispatch}>{children}</ListDispatchContext.Provider>
    </ListContext.Provider>
  )
}

export const useList = () => {
  return useContext(ListContext)
}

export const useListDispatch = () => {
  return useContext(ListDispatchContext)
}
