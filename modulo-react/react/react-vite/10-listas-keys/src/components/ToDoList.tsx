type ToDo = {
  id: number;
  text: string;
};

const ToDoList = () => {
    const ToDos: ToDo[] = [
        {id: 1, text: 'Estudar React'},
        {id: 2, text: 'Estudar JavaScript'},
        {id: 3, text: 'Estudar TypeScript'}
    ]

    return (
        <>
        <h1>Tarefas</h1>
        <ul>
            {
                ToDos.map(toDo => (
                    <li key={toDo.id}>{toDo.text}</li>
                ))
            }
        </ul>
        </>
    )
}

export default ToDoList