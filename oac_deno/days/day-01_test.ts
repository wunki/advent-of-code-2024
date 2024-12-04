import { assertEquals } from "@std/assert";

import {
    readAndSortInput,
    similarity_score,
    total_distance,
} from "./day-01.ts";

Deno.test(async function test_total_distance() {
    const pair = await readAndSortInput("./inputs/day-01.txt");
    assertEquals(total_distance(pair), 3574690);
});

Deno.test(async function test_similarity() {
    const pair = await readAndSortInput("./inputs/day-01.txt");
    assertEquals(similarity_score(pair), 22565391);
});
