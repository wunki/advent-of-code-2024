import { assertEquals } from "@std/assert";

import {
    readAndSortInput,
    similarity_score,
    total_distance,
} from "./day-01.ts";

Deno.test(async function test_total_distance() {
    const pair = await readAndSortInput("./inputs/day-01.test");
    assertEquals(total_distance(pair), 11);
});

Deno.test(async function test_similarity() {
    const pair = await readAndSortInput("./inputs/day-01.test");
    assertEquals(similarity_score(pair), 31);
});
