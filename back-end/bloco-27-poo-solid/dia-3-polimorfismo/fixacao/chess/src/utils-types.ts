export type BoardColumn = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
export type BoardRow = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
export type BoardHouse = [BoardColumn, BoardRow];

export const boardColumns: BoardColumn[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
export const boardRows: BoardRow[] = ['1', '2', '3', '4', '5', '6', '7', '8'];

export const isInList = (element: any, list: any[]) => {
    for (let e of list)
        if (element[0] == e[0] && element[1] == e[1]) return true;
    return false;
};