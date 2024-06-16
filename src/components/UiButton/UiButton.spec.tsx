import { fireEvent, render } from "@testing-library/react";
import { describe, it, expect, vitest } from "vitest";
import UiButton from "./UiButton";

type Params = React.ComponentProps<typeof UiButton>;

function mockParams(params?: Params) {
  const properties: Params = {
    isDisabled: false,
    children: "This is a button",
    ...params,
  };

  return properties;
}

describe("MyComponent", () => {
  it("should render the button", () => {
    const { getByTestId } = render(<UiButton />);
    expect(getByTestId("@UiButton")).toBeInTheDocument();
  });

  it("should render the button enabled", () => {
    const params = mockParams({ isDisabled: false });

    const { getByTestId } = render(<UiButton {...params} />);
    expect(getByTestId("@UiButton")).toBeEnabled();
  });

  it("should render the button disabled", () => {
    const params = mockParams({ isDisabled: true });

    const { getByTestId } = render(<UiButton {...params} />);
    expect(getByTestId("@UiButton")).toBeDisabled();
  });

  it("should render the button with text", () => {
    const params = mockParams();
    const text = "This is a button!";

    const { getByTestId } = render(<UiButton {...params}>{text}</UiButton>);
    expect(getByTestId("@UiButton")).toHaveTextContent(text);
  });

  it("should not be possible to click on the button when is disabled", () => {
    const params = mockParams({ isDisabled: true });
    const text = "This is a button!";
    const handleClick = vitest.fn();

    const { getByTestId } = render(
      <UiButton {...params} onClick={handleClick}>
        {text}
      </UiButton>
    );
    const button = getByTestId("@UiButton");
    expect(button).toHaveTextContent(text);
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
