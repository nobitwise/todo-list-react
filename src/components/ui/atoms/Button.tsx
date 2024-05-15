import { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'filled' | 'icon'
  color?: 'primary' | 'danger'
}

const variantCommonClassesMap = {
  filled: 'px-4 rounded-lg text-white',
  icon: 'p-2 rounded-full hover:scale-110'
}

const buttonColorMap = {
  filled: {
    primary: `${variantCommonClassesMap.filled} bg-green-500 hover:bg-green-800 focus-visible:ring-green-400`,
    danger: `${variantCommonClassesMap.filled} bg-red-500 hover:bg-red-800 focus-visible:ring-red-400`
  },
  icon: {
    primary: `${variantCommonClassesMap.icon} hover:bg-green-500/30 text-green-600`,
    danger: `${variantCommonClassesMap.icon} hover:bg-red-500/30 text-red-600`
  }
}

const Button = ({ children, variant = 'filled', color = 'primary', ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`
        ${buttonColorMap[variant][color]}
        min-h-10 min-w-10 [&>svg]:size-5
        inline-flex select-none items-center justify-center text-sm font-semibold transition-all
		    focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none
		    disabled:pointer-events-none disabled:cursor-not-allowed
        disabled:bg-slate-100 disabled:border disabled:border-slate-200 disabled:text-slate-500 disabled:shadow-none
        ${props.className ?? ''}
        `}
    >
      {children}
    </button>
  )
}

export default Button
