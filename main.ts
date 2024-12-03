import { day_01 } from "./day-01.ts";

if (import.meta.main) {
    const day_01_result = await day_01("./inputs/day-01.txt");
    console.log(`Day one result: ${day_01_result}`);
}
