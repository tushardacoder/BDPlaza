
import {
  type RouteConfig,
  route,
  layout,
  index,
 
} from "@react-router/dev/routes";

export default [
    
  layout("Layouts/Mainlayout.tsx", [
    index("./routes/home.tsx"),
       // About page
    //   route("user", "./routes/users.tsx"),   // Blogs page
    //   route("post", "./routes/post.tsx"),
    //  route("comment", "./routes/comment.tsx"),
    //  route("photo", "./routes/photos.tsx"),
    //  route("todo", "./routes/todo.tsx"),
    //    route("album", "./routes/album.tsx"),
    
    
   
   
  ]),
  
  
] satisfies RouteConfig;