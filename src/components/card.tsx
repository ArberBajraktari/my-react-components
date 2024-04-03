// Button.tsx
import { FC, HTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../lib/utils";
import Button from "./button";

const cardVariants = cva(
  'bg-white border border-gray-200 rounded-lg shadow h-fit',
  {
    variants: {
      variant: {
        withImage: 'withImage',
        noImage: 'noImage',
      },
      size: {
        small: 'w-1/6',
        medium: 'w-1/3',
        large: 'w-1/2',
      },
    },
    defaultVariants: {
      variant: 'noImage',
      size: 'small',
    }
  }
)

interface CardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
  imagePath?: string; // Optional prop for image path
  title?: string;
  desc?: string
}

const Card: FC<CardProps> = ({ children, className, variant, size, imagePath, title, desc, ...props }) => {
  return (
    <div {...props} className={cn(cardVariants({ variant, size }), className)}>
      {variant === 'withImage' && imagePath && (
        <a href="#">
          <img 
            className={cn("rounded-t-lg object-contain bg-gradient-to-r from-green-200 to-green-300/80 w-full", size === 'large' ? 'max-h-60' : 'max-h-40')} 
            src={imagePath} 
            alt="" 
          />
        </a>
      )}
      <div className="p-4">
        <div className="w-full h-fit ">
          <h5 className={cn("mb-2 tracking-tight text-gray-900 dark:text-white", size === 'large' ? 'text-3xl ' : 'text-2xl ')}>{title}</h5>
        </div>
        <div className="w-full h-fit">
          <h5 className={cn("mb-1 tracking-tight text-gray-900 dark:text-white", size === 'large' ? 'text-xl ' : 'text-lg ')}>{desc}</h5>
        </div>
        <div className="w-full h-fit">
          <Button size={'small'}>Hey</Button>
        </div>
      </div>
    </div>
  )
}

export default Card
