import { ReactNode, ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  children?: ReactNode
  variant?: 'default'
  color?: 'primary' | 'danger'
}

const buttonVariantMap = {
  default: 'min-h-10 rounded-lg px-5 font-semibold transition'
}

const buttonColorMap = {
  primary: 'bg-green-600 text-white hover:bg-green-500',
  danger: 'bg-red-600 text-white hover:bg-red-500'
}

const Button = ({ children, variant = 'default', color = 'primary', ...props }: ButtonProps) => {
  return (
    <button
      className={`${buttonVariantMap[variant]} ${buttonColorMap[color]}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
