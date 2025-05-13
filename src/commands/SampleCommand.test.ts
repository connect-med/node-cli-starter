import { describe, it, expect } from 'vitest'
import { SampleCommand } from './SampleCommand'
import { createAndRegisterCli, createWritable } from 'test/testUtils'

describe('SampleCommand', () => {
  it('prints t and w values if provided', async () => {
    const { stdout, writes } = createWritable()
    const cli = createAndRegisterCli(SampleCommand)

    await cli.run(['-t', '123', '-w', 'abc'], { stdout })
    expect(writes).toContain('t value: 123\n')
    expect(writes).toContain('w value: abc\n')
  })

  it('prints only t if only t is provided', async () => {
    const { stdout, writes } = createWritable()
    const cli = createAndRegisterCli(SampleCommand)

    await cli.run(['-t', 'hello'], { stdout })

    expect(writes).toContain('t value: hello\n')
    expect(writes.some((line) => line.includes('w value'))).toBe(false)
  })
})
