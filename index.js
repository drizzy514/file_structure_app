const path = require("path");
const { IO } = require("./io");
const io = new IO();

const MVC = ([, , type, name]) => {
  if (type === "mvc-express") {
    //   FOLDERS
    io.createFolder(path.join(__dirname, `./${name}`));
    io.createFolder(path.join(__dirname, `./${name}`, "modules"));
    io.createFolder(
      path.join(__dirname, `./${name}`, "modules", "users")
    );
    io.createFolder(
      path.join(__dirname, `./${name}`,  "modules", "posts")
    );
    io.createFolder(
      path.join(__dirname, `./${name}`,  "uploads")
    );
    io.createFolder(
      path.join(__dirname, `./${name}`,  "utils")
    );

    

    //   FILES AND CODES
    io.writeFile(
      path.join(__dirname, `./${name}`, "server.js"),
      'const express = require("express");\nconst cors = require("cors");\nconst  PORT  = 2000;\n\nconst app = express();\n\napp.use(cors());\napp.use(express.json());\napp.get("/", (req, res) => {res.status(200).send(ok)};\napp.listen(PORT, () => console.log(`Server has been started on port: ${PORT}`));\n'
    );
    io.writeFile(
      path.join(__dirname, `./${name}`, ".gitignore"),
      "node_modules/\n.env"
    );
    io.writeFile(
      path.join(__dirname, `./${name}`,"utils", "jwt.js"),
      'const jwt = require("jsonwebtoken");\nconst  JWT_KEY  = hibro0710;\n\nmodule.exports = {\n  sign: (data) => jwt.sign(data, JWT_KEY),\n  verify: (data) => jwt.verify(data, JWT_KEY),\n};\n'
    );
    io.writeFile(
        path.join(__dirname, `./${name}`, "modules", "index.js"), 
        'const Users = require("./users");\n const Posts = require("./posts")\n module.exports=[Users, Posts]'
    )
        io.writeFile(
      path.join(
        __dirname,
        `./${name}`,
        "modules",
        "users",
        "index.js"
      ),
      'const typeDefs = require("./schema");\nconst resolvers = require("./resolvers");\n\nmodule.exports = {\n  typeDefs, \n resolvers   }'
    );
    io.writeFile(
      path.join(
        __dirname,
        `./${name}`,
        "modules",
        "users",
        "schema.js"
      ),
      'const {gql} = require("apollo-server-express");\nmodule.exports = gql `\ntype Users\n{id: ID!\nname:String!\n}\ntype Query{\nusers:[Users!]!\n}\ntype Mutation{\n newUsers(id: Int!, name:String!)\n}\n`'
    );
    io.writeFile(
      path.join(
        __dirname,
        `./${name}`,
        "modules",
        "users",
        "resolvers.js"
      ),
      'const users = [];\nmodule.exports = {\nQuery: {\nusers: () => users\n}, Mutation:{ \nnewUser: (_, {id, name})=>{\n users.push({\nuser_id: id,\nname:name })\n return "created user"}\n  }\n  }'
    );
    io.writeFile(
      path.join(
        __dirname,
        `./${name}`,
        "modules",
        "posts",
        "index.js"
      ),
      'const typeDefs = require("./schema.js");\nconst resolvers = require("./resolvers.js");\nmodule.exports = {\ntypeDefs, \nresolvers}'
    );
    io.writeFile(
      path.join(
        __dirname,
        `./${name}`,
        "modules",
        "posts",
        "schema.js"
      ),
      'const {gql} = require("apollo-server-express");\nmodule.exports = gql `\ntype Posts\n{post_id: ID!\ntitle:String!\n}\ntype Query{\npost:[Posts!]!\n}\ntype Mutation{\n newPost(id: Int!, name:String!)\n}\n`'
    );
    io.writeFile(
      path.join(
        __dirname,
        `./${name}`,
        "modules",
        "posts",
        "resolvers.js"
      ),
      'const posts = [];\nmodule.exports = {\nQuery: {\nposts: () => posts\n}, Mutation:{ \nnewPost: (_, {id, title})=>{\n posts.push({\npost_id: id,\ntitle:title })\n return "created post"}\n  }\n  }'
    );
  }
  console.log(type);
};
MVC(process.argv);