import { render, screen } from "@testing-library/react";
import Label from "@/components/atoms/Label";
import MainTitle from "@/components/atoms/MainTitle";
import Chart from "@/containers/atoms/Chart";

describe("Atoms", () => {
  test("Label", () => {
    render(<Label index={1} name="テスト" />);
  });
  // test("Chart", () => {
  //   render(<Chart />);
  // });
  test("MainTitle", () => {
    render(<MainTitle />);
  });
});
