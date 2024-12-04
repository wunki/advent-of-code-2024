defmodule AocEx.DayOne.Test do
  use ExUnit.Case

  test "day one, part one" do
    distance = AocEx.Day01.distance("priv/inputs/day01.test")
    assert distance == 11
  end
end
