import Todo from "@/app/components/Todo"
import fetchTodo from "@/lib/fetchTodo"
import { notFound } from "next/navigation"

export const revalidate = 0

export default async function page({ params }: { params: { id: string } }) {
    const todo = await fetchTodo(params.id)

    if (!todo) notFound()

    return <Todo {...todo} />
}
