import type { ReactNode } from 'react'
import './Table.scss'

export type HeadCell = {
  children: ReactNode
  width: string
}

export type RowItem = {
  cells: string[]
}

interface TableProps {
  className?: string
  headCells: HeadCell[]
  rows: RowItem[]
}

const Table = ({ className, headCells, rows }: TableProps) => {
  return (
    <table className={className}>
      {headCells.length > 0 && (
        <thead>
          <tr>
            {headCells.map(({ children, width }, index) => (
              <th key={index} style={{ width }}>
                {children}
              </th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map(({ cells }, index) => (
          <tr key={index}>
            {cells.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
