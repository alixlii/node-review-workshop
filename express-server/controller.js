const list = {
  Todos: []
};

module.exports = {
  fetch: (req, res) => {
    console.log("In GET...");
    const {listName} = req.query;
    if (listName in list) {
      res.status(200).send(list[listName]);
    } else {
      res.status(404).send("List not Found");
    }
  },
  post: (req, res) => {
    console.log("In POST...");
    const {todo, listName} = req.body;
    list[listName].push(todo);
    res.status(201).send(list[listName]);
  },
  delete: (req, res) => {
    console.log("In DELETE...");
    const {index, listName} = req.query;
    list[listName].splice(index, 1);
    req.status(202).send(list[listName]);
  }
};
