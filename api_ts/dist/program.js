"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const startUp_1 = require("./startUp");
let port = process.env.PORT || '3000';
startUp_1.default.app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`);
});
