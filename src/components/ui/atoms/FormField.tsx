import { ComponentProps } from 'react'

interface FormFieldProps extends ComponentProps<'div'> {
  label?: string
}

const FormField = ({ label, ...props }: FormFieldProps) => {
  return (
    <div className='w-min px-3 py-2 bg-white rounded-lg ring-1 ring-slate-200' {...props}>
      {label && <label>{label}</label>}
      {props.children}
    </div>
  )
}

export default FormField
