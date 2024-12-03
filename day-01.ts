import { TextLineStream } from "jsr:@std/streams@1.0.8";

// Read lines from a file and return a stream of lines.
async function readLines(path: string) {
	const file = await Deno.open(path);
	const lineStream = file.readable
		.pipeThrough(new TextDecoderStream())
		.pipeThrough(new TextLineStream());

	return lineStream;
}

async function readAndSortInput(path: string) {
	const lines = await readLines(path);

	const left_lines = [];
	const right_lines = [];
	for await (const line of lines) {
		const [left, right] = line.split(/\s+/);

		left_lines.push(left);
		right_lines.push(right);
	}
	left_lines.sort();
	right_lines.sort();

	return [left_lines, right_lines];
}

export async function day_01(input: string) {
	const [left, right] = await readAndSortInput(input);

	let distance = 0;
	for (let i = 0; i < left.length; i++) {
		distance += Math.abs(parseInt(left[i]) - parseInt(right[i]));
	}
	return distance;
}

if (import.meta.main) {
	const day_01_result = await day_01("./inputs/day-01.txt");
	console.log(`Day one result: ${day_01_result}`);
}