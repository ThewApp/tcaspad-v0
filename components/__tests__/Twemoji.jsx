import { render, screen } from "@testing-library/react";
import Twemoji from "../Twemoji";

test("render single twemoji", async () => {
  render(<Twemoji>⚡️</Twemoji>);

  expect(screen.getAllByAltText("⚡️")).toHaveLength(1);
});

test("render multiple same twemojis", async () => {
  render(<Twemoji>⚡️⚡️⚡️</Twemoji>);

  expect(screen.getAllByAltText("⚡️")).toHaveLength(3);

  const emojiImgs = screen.getAllByRole("img");
  expect(emojiImgs).toHaveLength(3);
  emojiImgs.map((emoji) => expect(emoji).toHaveAttribute("src"));
});

test("render multiple different twemojis", async () => {
  render(<Twemoji>😀😃😄</Twemoji>);

  expect(screen.getByAltText("😀")).toBeInTheDocument();
  expect(screen.getByAltText("😃")).toBeInTheDocument();
  expect(screen.getByAltText("😄")).toBeInTheDocument();

  const emojiImgs = screen.getAllByRole("img");
  expect(emojiImgs).toHaveLength(3);
  emojiImgs.map((emoji) => expect(emoji).toHaveAttribute("src"));
});
