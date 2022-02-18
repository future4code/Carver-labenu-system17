import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import router from "./routes/router";
import { changeProfessorClass, getProfessors, postProfessor } from "./controllers/professor.controller";
import { allowedNodeEnvironmentFlags } from "process";

const app: Express = express();
app.use(express.json());
app.use(cors());
app.use(router);

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

app.post("/professor", postProfessor)

app.get("/professor", getProfessors)

app.put("/professors/:id", changeProfessorClass)