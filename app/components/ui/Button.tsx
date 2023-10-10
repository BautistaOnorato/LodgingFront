import { forwardRef } from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, disabled, type = "button", children, ...props }, ref) => {
    return (
      <button
        className={`${className} rounded-sm w-auto disabled:cursor-not-allowed disabled:opacity-50 font-medium transition`}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    )
})

Button.displayName = "Button";

export default Button