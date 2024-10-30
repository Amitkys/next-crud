import Link from "next/link"
export default function homepage() {
  return (
    <div>
      <h1>Welcome to todo app</h1>
      <Link href={'/todos'}>
        <button>Show all Todos</button>
      </Link>
    </div>
  )
}