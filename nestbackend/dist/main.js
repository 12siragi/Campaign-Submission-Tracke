"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dotenv = require("dotenv");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const port = process.env.PORT || 3001;
    app.enableCors({
        origin: '*',
        methods: 'GET,POST,PUT,DELETE',
        allowedHeaders: 'Content-Type, Accept',
    });
    await app.listen(port);
    console.log(`App listening on port ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map