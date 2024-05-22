export interface ListItem {
  id?: string
  done?: boolean
  text: string
  colorIndex?: number
}

export interface ListAction {
  type: 'added' | 'changed' | 'deleted' | 'set'
  item?: ListItem
  list?: ListItem[]
}

export const colorList = [
  'from-red-100 to-red-200',
  'from-green-100 to-green-200',
  'from-blue-100 to-blue-200',
  'from-pink-100 to-pink-200',
  'from-yellow-100 to-yellow-200',
  'from-orange-100 to-orange-200',
  'from-purple-100 to-purple-200'
]
