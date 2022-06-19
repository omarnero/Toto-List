class Todo {
  id: string;
  name: string;
  constructor(Todotext: string) {
    this.name = Todotext;
    this.id = new Date().toISOString();
  }
}
export default Todo;
