import { TextLineStream } from "jsr:@std/streams@1.0.8";

type InputPair = {
    left: number[];
    right: number[];
};

// Read lines from a file and return a stream of lines.
async function readLines(path: string) {
    const file = await Deno.open(path);
    const lineStream = file.readable
        .pipeThrough(new TextDecoderStream())
        .pipeThrough(new TextLineStream());

    return lineStream;
}

export async function readAndSortInput(path: string): Promise<InputPair> {
    const lines = await readLines(path);

    const left = [];
    const right = [];
    for await (const line of lines) {
        const [l, r] = line.split(/\s+/);

        left.push(parseInt(l));
        right.push(parseInt(r));
    }
    left.sort();
    right.sort();

    return { left, right };
}

/**
 * Calculates the total distance between corresponding numbers in two arrays.
 * For each position, finds the absolute difference between the numbers
 * and adds it to a running sum.
 *
 * @param left - First array of numbers to compare
 * @param right - Second array of numbers to compare against
 * @returns The sum of absolute differences between corresponding numbers
 */
export function total_distance({ left, right }: InputPair): number {
    let distance = 0;
    for (let i = 0; i < left.length; i++) {
        distance += Math.abs(left[i] - right[i]);
    }
    return distance;
}
/**
 * Calculates a similarity score between two arrays of numbers.
 * For each number in the left array, if it appears in the right array,
 * multiply that number by the count of its occurrences in the right array
 * and add to the total score.
 *
 * @param left - First array of numbers to compare
 * @param right - Second array of numbers to compare against
 * @returns The total similarity score
 */
export function similarity_score({ left, right }: InputPair): number {
    const rightCounts = new Map();
    for (const num of right) {
        rightCounts.set(num, (rightCounts.get(num) || 0) + 1);
    }

    let similarity = 0;
    for (const num of left) {
        const occurences = rightCounts.get(num) || 0;
        if (occurences > 0) {
            similarity += num * occurences;
        }
    }
    return similarity;
}

export async function print_result_day_one() {
    const pair = await readAndSortInput("./inputs/day-01.txt");
    const part_one = total_distance(pair);
    const part_two = similarity_score(pair);

    console.log(`Day one, part one result: ${part_one}`);
    console.log(`Day one, part two result: ${part_two}`);
}

if (import.meta.main) {
    print_result_day_one();
}
