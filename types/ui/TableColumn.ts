export default interface TableColumn<T = any> {
    key: string & keyof T
    label: string
    align?: 'left' | 'center' | 'right'
    width?: string
    classes?: string[]
    formatter?: (row: T, column: TableColumn<T>) => string
    sortable?: boolean
}
