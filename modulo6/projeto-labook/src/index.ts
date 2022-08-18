import { app } from "./app"
import { friendRouter } from "./router/friendRouter"
import { likeRouter } from "./router/likeRouter"
import { postRouter } from "./router/postRouter"
import {userRouter} from "./router/userRouter"

app.use("/users", userRouter)
app.use("/post", postRouter)
app.use("/friend", friendRouter)
app.use("/like", likeRouter)

