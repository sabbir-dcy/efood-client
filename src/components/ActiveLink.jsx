import { Link, useMatch, useResolvedPath } from "react-router-dom"


function ActiveLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to)
  let match = useMatch({ path: resolved.pathname, end: true })

  return (
    <Link
      className={`${match ? 'bg-zinc-100 bg-opacity-50  border-amber-600 ' : 'border-transparent'} h-full flex items-center border-b-4 px-4`}
      to={to}
      {...props}
    >
      {children}
    </Link>
  )
}

export default ActiveLink