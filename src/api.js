export const getComments = async () => {
    return [
      {
        id: "1",
        body: "First comment",
        username: "Abhishek",
        userId: "1",
        parentId: null,
      },
      {
        id: "2",
        body: "Second comment",
        username: "Rahul",
        userId: "2",
        parentId: null,
      },
      {
        id: "3",
        body: "First Reply",
        username: "Rahul",
        userId: "2",
        parentId: "1",
      },
      {
        id: "4",
        body: "Second Reply",
        username: "Rahul",
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
  