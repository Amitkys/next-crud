import { ShowAllTodo } from "@/app/lib/Components/ShowAllTodo"
import { fetchAllTodo } from "@/app/lib/actions";
import Link from "next/link";

export default async function homePage() {
  const data = await fetchAllTodo();
  return (
  <div>
    <Link href={'/todos/create'}><button>Create new todo</button></Link>
    <ShowAllTodo data = {data} />
  </div>
  )
}