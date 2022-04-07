import { Button } from "./../../components/Button";

const Add = () => {
  return (
    <form>
      <h3>Create a new movie card</h3>
      <label htmlFor="title">Title:</label>
      <input type="text" name="title" />
      <div>
        <Button>+ Add to the database</Button>
      </div>
    </form>
  );
};

export default Add;
