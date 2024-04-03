// Button.tsx
import { ButtonHTMLAttributes, FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  'h-fit text-center border border-violet-600 rounded focus:outline-none focus:ring',
  {
    variants: {
      variant: {
        default: 'bg-violet-600 active:text-violet-500 hover:bg-transparent hover:text-violet-600 text-white',
        outline: 'text-violet-600 hover:bg-violet-600 hover:text-white active:bg-indigo-500 ',
        white: 'text-violet-600 bg-white hover:bg-violet-600 hover:text-white active:bg-indigo-500 '
      },
      size: {
        default: 'px-6 py-2 min-w-[120px] text-lg',
        small: 'px-2 py-1 min-w-[100px] ',
        big: 'px-10 py-4 min-w-[140px] text-2xl',
      },
      animation: {
        default: '',
        loading: 'cursor-not-allowed hover:bg-transparent hover:text-violet-600'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      animation: 'default'
    }
  }
)

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> { }

const Button: FC<ButtonProps> = ({ children, className, variant, animation, size, ...props }) => {
  return (
    <button {...props} className={cn(buttonVariants({ variant, size, animation }), className)}>
      {animation === 'loading' ? (
        <div className="flex flex-row items-center">
          <img src="/loading.webp" alt="Loading" width={25} height={25} className="animate-spin"/> {/* Adjust the path to your loading image */}
          {children}
        </div>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
