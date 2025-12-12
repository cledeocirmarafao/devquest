type TaskProps = {
  description?: string;
};
//Default Props aqui, não esquecer de deixar a desciption com o '?', isso a torna um valor opcional e caso nenhum valor seja passado, ai sim a default prop vai atuar
const NewTask = ({ description = 'Nenhuma tarefa cadastrada' }: TaskProps) => {
  return <p>Tarefa: {description}</p>;
};

export default NewTask;
