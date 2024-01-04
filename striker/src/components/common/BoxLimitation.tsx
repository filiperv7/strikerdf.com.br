interface BoxLimitationProps {
  children: any
  className?: string
}

export function BoxLimitation({ children, className }: BoxLimitationProps) {
  return (
    <div
      className={`flex justify-center w-full
  ${className ?? ''}`}
    >
      <div className="px-7 xl:px-0 w-full max-w-5xl xl:w-[1200px]">
        {children}
      </div>
    </div>
  )
}
