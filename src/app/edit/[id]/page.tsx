import Todo from "@/app/components/Todo"
import fetchTodo from "@/lib/fetchTodo"
import { notFound } from "next/navigation"

export const revalidate = 0

interface PageProps {
    params: { id: string }
}

export default async function Page({ params }: PageProps) {
    // Fetch the todo from the API
    const todo = await fetchTodo(params.id)

    if (!todo) {
        // If no todo is found, navigate to a 404 page
        notFound()
    }

    // Render the Todo component with the todo data
    return <Todo {...todo} />
}
