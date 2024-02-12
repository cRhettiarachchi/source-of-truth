#!/usr/bin/env node
import yargs from "yargs"
import { hideBin } from "yargs/helpers"
import { BuildArgv } from "./cli/args.js"
import { version } from "./cli/constants.js"
import { handleBuild } from "./cli/handlers.js"

yargs(hideBin(process.argv))
  .scriptName("quartz")
  .version(version)
  .usage("$0 <cmd> [args]")
  .command("build", "Build Quartz into a bundle of static HTML files", BuildArgv, async (argv) => {
    await handleBuild(argv)
  })
  .showHelpOnFail(false)
  .help()
  .strict()
  .demandCommand().argv
