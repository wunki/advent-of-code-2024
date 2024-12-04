defmodule AocEx.Utils do
  @doc """
  Opens an input file and streams it, splitting on newlines
  and trimming any whitespace.
  """
  def stream_input(path, :line) do
    File.stream!(path)
    |> Stream.map(&String.trim/1)
  end
end
