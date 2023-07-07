import { Command } from "commander";

const program = new Command();

program
  .name("Space Trader Agent")
  .version("1.0.0")
  .description("Command line tool for acting on behalf of an agent in Space Traders");

interface IRegisterOptions {
  callsign: string
  faction: string
}

program
  .command("register")
  .description("Create a new agent in Space Traders")
  .option("-c, --callsign <callsign>", "The callsign of the agent")
  .option("-f, --faction <faction>", "The faction to join", "COSMIC")
  .action((options: IRegisterOptions) => {
    if (options.callsign === undefined) {
      console.error("You must provide a callsign");
      process.exit(1);
    }
    console.log(`Registering agent ${options.callsign} with faction ${options.faction}...`);
  });

program.parse();
