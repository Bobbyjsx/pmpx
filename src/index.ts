import { runConfigCommand } from "./commands/config";
import { showHelp } from "./commands/help";
import { runProxyCommand } from "./commands/proxy";
import { showPmpxVersion } from "./commands/version";
import { COMMANDS } from "./utils/commands";

const args = process.argv.slice(2);
const commandFromTerminal = args[0];

switch (commandFromTerminal) {
   case COMMANDS.HELP:
      showHelp();
      break;
   case COMMANDS.PMPX_CONFIG:
      runConfigCommand(args.slice(1));
      break;
   // This breaks the proxy command
   // case "anim":
   //   showAnimation().then(() => process.exit(0));
   //   break;
   case COMMANDS.GET_VERSION_FULL: // show pmpx version
   case COMMANDS.GET_VERSION_SHORT:
      showPmpxVersion();
      break;
   default:
      runProxyCommand(args);
      break;
}
