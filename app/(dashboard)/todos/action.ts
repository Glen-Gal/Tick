'use server';

import { Todo } from '@/types/custom';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

export async function addTodo(formData: FormData) {
  const supabase = await createClient();
  const text = formData.get('todo') as string | null;

  if (!text) {
    console.error('Todo text is missing.');
    return;
  }
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.error('no user logged');
  }
  const { data, error } = await (await supabase).from('todos').insert({
    user_id: user?.id,
    task: text,
  });
  if (error) {
    console.error('Error adding todo:', error);
  } else {
    console.log('Todo added:', data);
  }
  revalidatePath('/todos');
}

export async function deleteTodo(id: number) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.error('no user logged');
  }
  const { error } = await (await supabase).from('todos').delete().match({
    user_id: user?.id,
    id: id,
  });

  if (error) {
    console.error('error deleting task');
  }
  revalidatePath('/todos');
}

export async function updateTodo(todo: Todo) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    console.error('no user logged');
  }
  const { error } = await (await supabase).from('todos').update(todo).match({
    user_id: user?.id,
    id: todo.id,
  });

  if (error) {
    console.error('error updationg task');
  }
  revalidatePath('/todos');
}
