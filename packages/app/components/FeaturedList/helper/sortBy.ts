export const sortBy = (value: string) => (a: any, b: any) => {
  if (value === "asc") {
    if (a.dateCreated < b.dateCreated) {
      return 1;
    }
    if (a.dateCreated > b.dateCreated) {
      return -1;
    }
  }

  if (value === "desc") {
    if (a.dateCreated > b.dateCreated) {
      return 1;
    }
    if (a.dateCreated < b.dateCreated) {
      return -1;
    }
  }

  if (value === "mostLiked") {
    if (a.likes < b.likes) {
      return 1;
    }
    if (a.likes > b.likes) {
      return -1;
    }
  }

  if (value === "leastLiked") {
    if (a.likes > b.likes) {
      return 1;
    }
    if (a.likes < b.likes) {
      return -1;
    }
  }

  return 0;
};
