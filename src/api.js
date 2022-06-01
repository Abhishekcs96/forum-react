export const getComments = async () => {
    return [
      {
        id: "1",
        body: "Pythagoras theorem",
      username: "Student1",
        userId: "1",
        parentId: null,
      },
      {
        id: "2",
        body: "Triangles",
        username: "Student2",
        userId: "2",
        parentId: null,
      },
      {
        id: "3",
        body: "Wrong",
      username: "Student2",
        userId: "2",
        parentId: "1",
      },
      {
        id: "4",
        body: "Squares",
      username: "Student1",
        userId: "2",
        parentId: "2",
      },
    ];
  };
  
  export const createComment = async (text, pseudonym, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId: "1",
      username: pseudonym,
    };
  };
  