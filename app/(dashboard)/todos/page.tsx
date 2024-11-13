import { TodoList } from "@/components/todo-list";
import { Separator } from "@/components/ui/separator";
import { createClient } from "@/utils/supabase/server";

export default async function TodosPage() {
  const supabase = await createClient();

  const { data: todos } = await supabase
    .from("todos")
    .select()
    .order("inserted_at", { ascending: false });

  return (
    <div className="flex flex-col justify-center w-full">
      <div className="flex w-full px-8 py-4 border-b border-[#ECECEC]">
        <span className="text-lg font-semibold">Goodluck with your Ticks!</span>
      </div>

      <div className="px-8 pt-12 max-w-3xl w-full flex flex-col gap-4">
        <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-6xl font-serif">
          Ticks
        </h1>
        <Separator className="w-full " />
        <TodoList todos={todos ?? []} />
      </div>
    </div>
  );
}
