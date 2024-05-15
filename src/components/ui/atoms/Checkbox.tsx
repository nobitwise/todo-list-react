import { ComponentProps } from 'react'

interface CheckboxProps extends ComponentProps<'input'> {
  color?: 'primary' | 'danger'
}

const colorMap = {
  primary: `text-green-500 focus:ring-green-500`,
  danger: `text-red-500 focus:ring-red-500`
}

const Checkbox = ({ color = 'primary', ...props }: CheckboxProps) => {
  return (
    <input
      type="checkbox"
      {...props}
      className={`size-5 rounded transition ${colorMap[color]} ${props.className ?? ''}`}
    />
  )
}

export default Checkbox
