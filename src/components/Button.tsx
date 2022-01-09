import { Component, ComponentProps } from "solid-js";

interface Props {
  onClick: () => void;
}

const Button: Component<Props> = (props) => {
  return (
    <button
      onClick={props.onClick}
      class="flex bg-button border border-border mt-4 px-4 py-1 items-center font-bold rounded-md"
    >
      {props.children}
    </button>
  );
};

export default Button;
