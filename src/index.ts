import { runConfigCommand } from "./commands/config";
import { showHelp } from "./commands/help";
import { runProxyCommand } from "./commands/proxy";

const args = process.argv.slice(2);
const command = args[0];

switch (command) {
   case "help":
      showHelp();
      break;
   case "pmpx-config":
      runConfigCommand(args.slice(1));
      break;
   // This breaks the proxy command
   // case "anim":
   //   showAnimation().then(() => process.exit(0));
   //   break;
   default:
      runProxyCommand(args);
      break;
}
