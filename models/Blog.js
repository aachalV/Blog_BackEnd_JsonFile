const uniqid = require("uniqid");

class Blog {
  constructor(blogName, author, title, content, imageUrl) {
    this.id = uniqid();
    this.author = author;
    this.title = title;
    this.content = content;
    this.imageUrl = imageUrl;
  }
}
