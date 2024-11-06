import Todo from "@/app/components/Todo"
import fetchTodo from "@/lib/fetchTodo"
import { notFound } from "next/navigation"

export const revalidate = 0

type Params = { id: string }

export async function generateMetadata({ params }: { params: Params }) {
    const { id } = params

    return {
        title: `Todo ${id}`,
    }
}

export default async function Page({ params }: { params: Params }) {
    const todo = await fetchTodo(params.id)

    if (!todo) {
        notFound()
    }

    return <Todo {...todo} />
}
