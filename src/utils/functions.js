import { posts } from "../__tests__/__data__/testData";

module.exports = {
  shortenText (text) {
    if (text.trim().length >= 100 && text.length !== 100) {
      return `${text.substr(0, 100).trim()}...`;
    }
    return text;
  },

  wordCount(posts) {
    return posts.reduce((a, v) => (a += v.text.split(' ').length), 0);

  },

  attachUserName(users, posts) {
    let userDict = users.reduce((a, v) => {
      a[v.id] = v;
      return a;
    }, {});
    return posts
      .filter(p => userDict[p.userId])
      .map(p => {
        p.displayName = `${userDict[p.userId].first} ${userDict[p.userId].last}`;
        return p;
      });
  }
}
