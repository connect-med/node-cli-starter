import { BaseContext, Cli, CommandClass } from 'clipanion'
import { Writable } from 'stream'

export const createWritable = () => {
  const writes: string[] = []
  const stdout = new Writable({
    write(chunk, _encoding, callback) {
      writes.push(chunk.toString())
      callback()
    },
  })
  return { stdout, writes }
}

export const createAndRegisterCli = (command: CommandClass<BaseContext>) => {
  const cli = new Cli({
    binaryLabel: '',
    binaryName: '',
    binaryVersion: '',
  })
  cli.register(command)
  return cli
}
