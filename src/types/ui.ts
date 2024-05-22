import { ComponentProps } from 'react'
import { ListItem } from '@/types'

export interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'filled' | 'icon'
  color?: 'primary' | 'danger'
}

export interface CheckboxProps extends ComponentProps<'input'> {
  color?: 'primary' | 'danger'
}

export interface ListItemProps {
  listItem: ListItem
}
