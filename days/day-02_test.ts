import { assertEquals } from "@std/assert";
import { save_reports, valid_line } from "./day-02.ts";

Deno.test(function test_valid_line() {
  const line = [77, 75, 76, 77, 80, 83, 85, 88];
  assertEquals(valid_line(line), false);
});

Deno.test(async function test_safe_reports() {
  const safe = await save_reports("./inputs/day-02.test");
  assertEquals(safe, 2);
});

Deno.test(async function test_safe_reports_with_tolerance() {
  const safe_tolerance = await save_reports("./inputs/day-02.test", 1);
  assertEquals(safe_tolerance, 4);
});
