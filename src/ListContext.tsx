import { Dispatch, ReactNode, Reducer, createContext, useContext, useReducer } from 'react'
import { ListAction, ListItem } from './types'

const initialList: ListItem[] = []

const listReducer: Reducer<ListItem[], ListAction> = (list, action): ListItem[] => {
  switch (action.type) {
    case 'added': {
      return [
        ...list,
        {
          ...action.item,
          id: list.length + 1
        }
      ]
    }
    case 'changed': {
      return list.map(listItem => (listItem.id === action.item?.id ? action.item : listItem))
    }
    case 'deleted': {
      return list.filter(({ id }) => id !== action.item.id)
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
