import { ComponentProps } from 'react'

interface FormFieldProps extends ComponentProps<'div'> {
  label?: string
}

const FormField = ({ label, ...props }: FormFieldProps) => {
  return (
    <div className='w-min rounded border' {...props}>
      {label && <label>{label}</label>}
      {props.children}
    </div>
  )
}

export default FormField
