import { readLines } from "./utils.ts";

function* window(numbers: number[], size: number): Generator<number[]> {
    for (let i = 0; i < numbers.length - size + 1; i++) {
        yield numbers.slice(i, i + size);
    }
}

export function valid_line(numbers: number[]): boolean {
    // First determine if the line goes up or down.
    const ascending = numbers[0] < numbers[1];
    for (const [a, b] of window(numbers, 2)) {
        if ((ascending && a > b) || (!ascending && a < b)) return false;
        const diff = Math.abs(a - b);
        if (diff < 1 || diff > 3) return false;
    }
    return true;
}

export async function save_reports(filename: string): Promise<number> {
    const lines = await readLines(filename);

    // Looses the efficiency of the stream, because it puts it in memory. It
    // will do for now to have a more readable and functional implementation.
    const array = await Array.fromAsync(lines);

    return array.map((line) => line.split(" ").map(Number)).filter(valid_line)
        .length;
}
