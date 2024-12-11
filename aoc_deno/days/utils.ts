import { TextLineStream } from "jsr:@std/streams@1.0.8";

// Read lines from a file and return a stream of lines.
export async function readLines(path: string) {
    const file = await Deno.open(path);
    const lineStream = file.readable
        .pipeThrough(new TextDecoderStream())
        .pipeThrough(new TextLineStream());

    return lineStream;
}
