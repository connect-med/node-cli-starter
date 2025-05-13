import { Command, Option } from 'clipanion'

export class SampleCommand extends Command {
  static paths = [[]]

  valueT = Option.String('-t', { required: false })
  valueW = Option.String('-w', { required: false })

  // eslint-disable-next-line @typescript-eslint/require-await
  async execute() {
    if (this.valueT) {
      this.context.stdout.write(`t value: ${this.valueT}\n`)
    }
    if (this.valueW) {
      this.context.stdout.write(`w value: ${this.valueW}\n`)
    }
  }
}
