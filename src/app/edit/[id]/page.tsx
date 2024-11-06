import Todo from "@/app/components/Todo"
import fetchTodo from "@/lib/fetchTodo"
import { notFound } from "next/navigation"

export const revalidate = 0

interface PageProps {
    params: { id: string }
}

export default async function Page({ params }: PageProps) {
    const todo = await fetchTodo(params.id)

    if (!todo) notFound()

    return <Todo {...todo} />
}
