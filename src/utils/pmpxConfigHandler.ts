import { getConfig, setConfig } from "./config";

function runpmpxConfig(args: string[]): void {
   const [action, key, value] = args;

   if (action === "get") {
      const result = getConfig(key);
      console.log(result ?? "(not set)");
   } else if (action === "set" && key && value) {
      setConfig(key, value);
      console.log(`Set ${key} = ${value}`);
   } else {
      console.log("Usage: pmpx pmpx-config get <key> | set <key> <value>");
   }
}

export { runpmpxConfig };
