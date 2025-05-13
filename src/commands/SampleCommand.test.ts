import { describe, it, expect, vi } from 'vitest'
import { SampleCommand } from './SampleCommand'
import { Cli } from 'clipanion'

describe('SampleCommand', () => {
  it('prints t and w values if provided', async () => {
    const stdout = { write: vi.fn() }
    const cli = new Cli({
      binaryLabel: 'test',
      binaryName: 'test',
      binaryVersion: '1.0.0',
    })

    cli.register(SampleCommand)

    const t = await cli.run(['-t', '123', '-w', 'abc'])
    console.log(t, stdout.write)

    expect(stdout.write).toHaveBeenCalledWith('t value: 123\n')
    expect(stdout.write).toHaveBeenCalledWith('w value: abc\n')
  })

  // it('prints only t if only t is provided', async () => {
  //   const stdout = { write: vi.fn() }
  //   const cli = new Cli({ binaryLabel: '', binaryName: '', binaryVersion: '' })
  //   cli.register(SampleCommand)

  //   await cli.run(['-t', 'hello'])

  //   expect(stdout.write).toHaveBeenCalledWith('t value: hello\n')
  //   expect(stdout.write).not.toHaveBeenCalledWith(expect.stringContaining('w value'))
  // })
})
