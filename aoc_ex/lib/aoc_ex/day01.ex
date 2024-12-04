defmodule AocEx.Day01 do
  def distance(input) do
    {left, right} =
      AocEx.Utils.stream_input(input, :line)
      |> Stream.map(&String.split/1)
      |> Enum.reduce({[], []}, fn [left, right], {lefts, rights} ->
        {[String.to_integer(left) | lefts], [String.to_integer(right) | rights]}
      end)
      |> then(fn {l, r} -> {Enum.sort(l), Enum.sort(r)} end)

    Enum.zip(left, right)
    |> Enum.map(fn {l, r} ->
      abs(l - r)
    end)
    |> Enum.sum()
  end
end
