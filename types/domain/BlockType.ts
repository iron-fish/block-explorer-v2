export interface BlockType {
  id: number | string,
  hash: string,
  main: boolean,
  object: string, // ??
  graffity: string, // ??
  difficulty: number | string,
  previous_block_hash: string,
  sequence: number | string,
  size: number,
  time_since_last_block_ms: number,
  timestamp: string,
  transactions_count: number
}

export function isBlock(x: unknown): x is Block {
  return typeof x === 'object' && !!x && 'transactions' in x && !('block' in x)
}


export default BlockType