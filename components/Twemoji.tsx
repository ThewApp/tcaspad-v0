import React from "react";
import twemoji from "twemoji";
import regex from "twemoji-parser/dist/lib/regex";

// https://github.com/twitter/twemoji/blob/master/scripts/build.js
const UFE0Fg = /\uFE0F/g;

type TwemojiProps = { children: string; className?: string };

export default function Twemoji({
  children,
  className = "",
  ...props
}: TwemojiProps) {
  const emojis = children
    .match(regex)
    .map((emoji) => ({
      codePoint: twemoji.convert.toCodePoint(emoji.replace(UFE0Fg, "")),
      alt: emoji,
    }))
    .map((emojiObj, i) => (
      <img
        className={"twemoji " + className}
        draggable="false"
        src={`${twemoji.base}svg/${emojiObj.codePoint}.svg`}
        alt={emojiObj.alt}
        key={emojiObj.alt + i}
        {...props}
      />
    ));
  return <>{emojis}</>;
}
