import { ShowAllTodo } from "@/app/lib/Components/ShowAllTodo"
import { fetchAllTodo } from "@/app/lib/actions"

export default async function homePage() {
  const data = await fetchAllTodo();
  return (
    <ShowAllTodo data = {data} />
  )
}