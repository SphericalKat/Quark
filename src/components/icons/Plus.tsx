import { Component } from "solid-js";

interface Props {
  height?: string;
  width?: string;
	class?: string;
}

const Plus: Component<Props> = (props) => {
  return (
    <svg
      class={`fill-current stroke-current ${props.class ?? ""}`}
      width={props.width ?? "24"}
      height={props.height ?? "24"}
      viewBox="0 0 56 57"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28 12.1667V44.8334"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.6667 28.5H44.3333"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Plus;
