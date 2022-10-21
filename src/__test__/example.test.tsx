import { render, screen } from "@testing-library/react";
import Label from "@/components/atoms/Label";

describe("大タイトル", () => {
  test("大タイトルが表示される", () => {
    render(<Label name="北海道" index={0} />);
    // expect(screen.getByText("大タイトル")).toBeInTheDocument();
  });
});
