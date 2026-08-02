 
        import {createRequire} from 'module';
        const require = createRequire(import.meta.url)
        
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// prisma/generated/prisma/enums.ts
var init_enums = __esm({
  "prisma/generated/prisma/enums.ts"() {
    "use strict";
  }
});

// prisma/generated/prisma/internal/class.ts
import * as runtime from "@prisma/client/runtime/client";
async function decodeBase64AsWasm(wasmBase64) {
  const { Buffer: Buffer2 } = await import("buffer");
  const wasmArray = Buffer2.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
function getPrismaClientClass() {
  return runtime.getPrismaClient(config);
}
var config;
var init_class = __esm({
  "prisma/generated/prisma/internal/class.ts"() {
    "use strict";
    config = {
      "previewFeatures": [],
      "clientVersion": "7.9.1",
      "engineVersion": "e922089b7d7502aff4249d5da3420f6fa55fc6ad",
      "activeProvider": "postgresql",
      "inlineSchema": 'model Car {\n  id    Int    @id @default(autoincrement())\n  name  String\n  model String\n  year  Int\n}\n\n// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Get a free hosted Postgres database in seconds: `npx create-db`\n\ngenerator client {\n  provider = "prisma-client"\n  output   = "../generated/prisma"\n}\n\ndatasource db {\n  provider = "postgresql"\n}\n',
      "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
      },
      "parameterizationSchema": {
        "strings": [],
        "graph": ""
      }
    };
    config.runtimeDataModel = JSON.parse('{"models":{"Car":{"fields":[{"name":"id","kind":"scalar","type":"Int"},{"name":"name","kind":"scalar","type":"String"},{"name":"model","kind":"scalar","type":"String"},{"name":"year","kind":"scalar","type":"Int"}],"dbName":null}},"enums":{},"types":{}}');
    config.parameterizationSchema = {
      strings: JSON.parse('["where","Car.findUnique","Car.findUniqueOrThrow","orderBy","cursor","Car.findFirst","Car.findFirstOrThrow","Car.findMany","data","Car.createOne","Car.createMany","Car.createManyAndReturn","Car.updateOne","Car.updateMany","Car.updateManyAndReturn","create","update","Car.upsertOne","Car.deleteOne","Car.deleteMany","having","_count","_avg","_sum","_min","_max","Car.groupBy","Car.aggregate","AND","OR","NOT","id","name","model","year","equals","in","notIn","lt","lte","gt","gte","contains","startsWith","endsWith","not","set","increment","decrement","multiply","divide"]'),
      graph: "KwsQBxwAACIAMB0AAAQAEB4AACIAMB8CAAAAASABACQAISEBACQAISICACMAIQEAAAABACABAAAAAQAgBxwAACIAMB0AAAQAEB4AACIAMB8CACMAISABACQAISEBACQAISICACMAIQADAAAABAAgAwAABQAwBAAAAQAgAwAAAAQAIAMAAAUAMAQAAAEAIAMAAAAEACADAAAFADAEAAABACAEHwIAAAABIAEAAAABIQEAAAABIgIAAAABAQgAAAkAIAQfAgAAAAEgAQAAAAEhAQAAAAEiAgAAAAEBCAAACwAwAQgAAAsAMAQfAgArACEgAQAqACEhAQAqACEiAgArACECAAAAAQAgCAAADgAgBB8CACsAISABACoAISEBACoAISICACsAIQIAAAAEACAIAAAQACACAAAABAAgCAAAEAAgAwAAAAEAIA8AAAkAIBAAAA4AIAEAAAABACABAAAABAAgBRUAACUAIBYAACYAIBcAACkAIBgAACgAIBkAACcAIAccAAAaADAdAAAXABAeAAAaADAfAgAbACEgAQAcACEhAQAcACEiAgAbACEDAAAABAAgAwAAFgAwFAAAFwAgAwAAAAQAIAMAAAUAMAQAAAEAIAccAAAaADAdAAAXABAeAAAaADAfAgAbACEgAQAcACEhAQAcACEiAgAbACENFQAAHgAgFgAAIQAgFwAAHgAgGAAAHgAgGQAAHgAgIwIAAAABJAIAAAAEJQIAAAAEJgIAAAABJwIAAAABKAIAAAABKQIAAAABLQIAIAAhDhUAAB4AIBgAAB8AIBkAAB8AICMBAAAAASQBAAAABCUBAAAABCYBAAAAAScBAAAAASgBAAAAASkBAAAAASoBAAAAASsBAAAAASwBAAAAAS0BAB0AIQ4VAAAeACAYAAAfACAZAAAfACAjAQAAAAEkAQAAAAQlAQAAAAQmAQAAAAEnAQAAAAEoAQAAAAEpAQAAAAEqAQAAAAErAQAAAAEsAQAAAAEtAQAdACEIIwIAAAABJAIAAAAEJQIAAAAEJgIAAAABJwIAAAABKAIAAAABKQIAAAABLQIAHgAhCyMBAAAAASQBAAAABCUBAAAABCYBAAAAAScBAAAAASgBAAAAASkBAAAAASoBAAAAASsBAAAAASwBAAAAAS0BAB8AIQ0VAAAeACAWAAAhACAXAAAeACAYAAAeACAZAAAeACAjAgAAAAEkAgAAAAQlAgAAAAQmAgAAAAEnAgAAAAEoAgAAAAEpAgAAAAEtAgAgACEIIwgAAAABJAgAAAAEJQgAAAAEJggAAAABJwgAAAABKAgAAAABKQgAAAABLQgAIQAhBxwAACIAMB0AAAQAEB4AACIAMB8CACMAISABACQAISEBACQAISICACMAIQgjAgAAAAEkAgAAAAQlAgAAAAQmAgAAAAEnAgAAAAEoAgAAAAEpAgAAAAEtAgAeACELIwEAAAABJAEAAAAEJQEAAAAEJgEAAAABJwEAAAABKAEAAAABKQEAAAABKgEAAAABKwEAAAABLAEAAAABLQEAHwAhAAAAAAABLgEAAAABBS4CAAAAAS8CAAAAATACAAAAATECAAAAATICAAAAAQAAAAAFFQAGFgAHFwAIGAAJGQAKAAAAAAAFFQAGFgAHFwAIGAAJGQAKAQIBAgMBBQYBBgcBBwgBCQoBCgwCCw0DDA8BDRECDhIEERMBEhQBExUCGhgFGxkL"
    };
    config.compilerWasm = {
      getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),
      getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs");
        return await decodeBase64AsWasm(wasm);
      },
      importName: "./query_compiler_fast_bg.js"
    };
  }
});

// prisma/generated/prisma/internal/prismaNamespace.ts
import * as runtime2 from "@prisma/client/runtime/client";
var getExtensionContext, NullTypes2, TransactionIsolationLevel, defineExtension;
var init_prismaNamespace = __esm({
  "prisma/generated/prisma/internal/prismaNamespace.ts"() {
    "use strict";
    init_class();
    getExtensionContext = runtime2.Extensions.getExtensionContext;
    NullTypes2 = {
      DbNull: runtime2.NullTypes.DbNull,
      JsonNull: runtime2.NullTypes.JsonNull,
      AnyNull: runtime2.NullTypes.AnyNull
    };
    TransactionIsolationLevel = runtime2.makeStrictEnum({
      ReadUncommitted: "ReadUncommitted",
      ReadCommitted: "ReadCommitted",
      RepeatableRead: "RepeatableRead",
      Serializable: "Serializable"
    });
    defineExtension = runtime2.Extensions.defineExtension;
  }
});

// prisma/generated/prisma/client.ts
import "process";
import * as path from "path";
import { fileURLToPath } from "url";
import "@prisma/client/runtime/client";
var PrismaClient;
var init_client = __esm({
  "prisma/generated/prisma/client.ts"() {
    "use strict";
    init_enums();
    init_class();
    init_prismaNamespace();
    init_enums();
    init_enums();
    globalThis["__dirname"] = path.dirname(fileURLToPath(import.meta.url));
    PrismaClient = getPrismaClientClass();
  }
});

// src/lib/prisma.ts
import { PrismaPg } from "@prisma/adapter-pg";
var adapter, prisma;
var init_prisma = __esm({
  "src/lib/prisma.ts"() {
    "use strict";
    init_client();
    adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
    prisma = new PrismaClient({ adapter });
  }
});

// src/app.ts
import express from "express";
import "stream/consumers";
var app, app_default;
var init_app = __esm({
  "src/app.ts"() {
    "use strict";
    init_prisma();
    app = express();
    app.use(express.json());
    app.get("/", async (req, res) => {
      res.send("server is done");
    });
    app_default = app;
  }
});

// src/server.ts
var require_server = __commonJS({
  "src/server.ts"() {
    init_app();
    app_default.listen(5e3, () => {
      console.log("server is running on 5000");
    });
  }
});
export default require_server();
