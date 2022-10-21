import { render, screen } from "@testing-library/react";
import Label from "@/components/atoms/Label";
import MainTitle from "@/components/atoms/MainTitle";
import Title from "@/components/atoms/Title";
import CheckBox from "@/components/molecules/CheckBox";
import CheckBoxes from "@/components/organisms/CheckBoxes";
import Header from "@/components/organisms/Header";
import Main from "@/components/organisms/Main";
import Chart from "@/containers/atoms/Chart";

describe("Atoms", () => {
  test("Label", () => {
    render(<Label index={1} name="テスト" />);
  });
  // test("Chart", () => {
  //   render(<Chart />);
  // });
  // test("Input", () => {
  //   render(<Input />);
  // });
  test("MainTitle", () => {
    render(<MainTitle />);
  });
  test("Title", () => {
    render(<Title />);
  });
});

describe("Molecules", () => {
  test("CheckBox", () => {
    const name = "テスト";
    const index = 1;
    render(<CheckBox name={name} index={index} />);
  });
});

describe("Organisms", () => {
  test("CheckBoxes", () => {
    const prefectures = ["北海道", "東京都"];
    render(<CheckBoxes />);
  });
  test("Header", () => {
    render(<Header />);
  });
  test("Main", () => {
    const prefectures = ["北海道", "東京都"];
    render(<Main prefectures={prefectures} />);
  });
});
