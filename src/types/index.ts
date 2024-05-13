export interface ListItem {
  id?: number
  done: boolean
  text: string
}

export interface ListAction {
  type: 'added' | 'changed' | 'deleted'
  item: ListItem
}
