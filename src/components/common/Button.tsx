import clsx from "clsx"
import Link from "next/link"
import { MouseEvent, MouseEventHandler, ReactNode } from "react"

export function Button({
  type,
  children,
  onClick,
  className,
}: {
  type: "primary" | "secondary" | "white"
  children: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "rounded-2xl transition-colors duration-200",
        !className && "py-2 px-14",
        type === "primary" && "bg-pink-400 text-pink-500 hover:bg-pink-600 hover:text-white",
        type === "secondary" && "bg-pink-500 text-white hover:bg-pink-600",
        type === "white" && "bg-white text-pink-500 hover:text-pink-500 hover:bg-gray-100",
        className
      )}
    >
      {children}
    </button>
  )
}

export function LinkButton({
  type,
  href,
  children,
  className,
  onMouseOver,
  onMouseLeave,
  onClick,
}: {
  type: "primary" | "secondary" | "white"
  children: ReactNode
  href: string
  className?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
  onMouseOver?: () => void
  onMouseLeave?: () => void
}) {
  return (
    <Link href={href}>
      <a
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={clsx(
          "rounded-2xl transition-colors duration-200 text-center",
          !className && "py-2 px-14",
          type === "primary" &&
            "bg-vlvu-pink-400 text-vlvu-pink-500 hover:bg-vlvu-pink-600 hover:text-white hover:{children=value}",
          type === "secondary" && "bg-vlvu-pink-500 text-white hover:bg-vlvu-pink-600",
          type === "white" && "bg-white text-vlvu-pink-500 hover:text-vlvu-pink-500 hover:bg-gray-100",
          className
        )}
      >
        {children}
      </a>
    </Link>
  )
}
