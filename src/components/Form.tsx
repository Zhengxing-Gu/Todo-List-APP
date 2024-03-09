import AddCircleIcon from "@mui/icons-material/AddCircle";

interface FormPropTypes {
  createTodo: React.FormEventHandler<HTMLFormElement>; 
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const Form = ({ createTodo, input, setInput }: FormPropTypes) => {
  return (
    <form
      className="flex justify-between
    bg-teal-300 p-4"
      onSubmit={createTodo}
    >
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className="w-full text-lg rounded-lg p-[3px]"
        type="text"
      />
      <button className="ml-2 rounded-lg text-gray-800">
        <AddCircleIcon />
      </button>
    </form>
  );
};

export default Form;
