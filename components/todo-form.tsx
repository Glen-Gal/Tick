"use client";
import { addTodo } from "@/app/(dashboard)/todos/action";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Todo } from "@/types/custom";
import { data } from "autoprefixer";
import { Send } from "lucide-react";
import { useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";

export type Action = "delete" | "update" | "create";

// In todo-form.tsx
type TodoFormProps = {
  optimisticUpdate: (update: { action: Action; todo: Todo }) => void;
};

// Update TodoCommentDescriptor or the type used in TodoForm
type TodoCommentDescriptor = (update: { action: Action; todo: Todo }) => void;

function FormContent() {
  const { pending } = useFormStatus();
  return (
    <>
      <Textarea
        disabled={pending}
        minLength={4}
        name="todo"
        required
        placeholder="Add a new todo"
      />
      <Button type="submit" size="icon" className="min-w-10" disabled={pending}>
        <Send className="h-5 w-5" />
        <span className="sr-only">Submit Todo</span>
      </Button>
    </>
  );
}

export function TodoForm({
  optimisticUpdate,
}: {
  optimisticUpdate: TodoCommentDescriptor;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <Card>
      <CardContent className="p-3">
        <form
          ref={formRef}
          className="flex gap-4"
          action={async (data) => {
            const newTodo: Todo = {
              id: -1,
              inserted_at: "",
              user_id: "",
              task: data.get("todo") as string,
              is_complete: false,
            };
            optimisticUpdate({ action: "create", todo: newTodo });
            await addTodo(data);
            formRef.current?.reset();
          }}
        >
          <FormContent />
        </form>
      </CardContent>
    </Card>
  );
}
