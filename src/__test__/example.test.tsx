import { render, screen } from "@testing-library/react";
import ChartPresenter from "@/components/atoms/Chart";
import InputPresenter from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";
import MainTitle from "@/components/atoms/MainTitle";
import Title from "@/components/atoms/Title";
import CheckBox from "@/components/molecules/CheckBox";
import CheckBoxes from "@/components/organisms/CheckBoxes";
import Header from "@/components/organisms/Header";
import Main from "@/components/organisms/Main";
import Chart from "@/containers/atoms/Chart";
import Input from "@/containers/atoms/Input";

import Home from "@/pages";

describe("Atoms", () => {
  test("Label", () => {
    render(<Label index={1} name="テスト" />);
  });
  test("ChartPresenter", () => {
    const options = {
      type: "line",
      name: "北海道",
      data: [
        [10, 1990],
        [20, 2000],
      ],
    };
    render(<ChartPresenter options={options} />);
  });
  test("MainTitle", () => {
    render(<MainTitle />);
  });
  test("Title", () => {
    render(<Title />);
  });
});

describe("Organisms", () => {
  test("Header", () => {
    render(<Header />);
  });
});

describe("Pages", () => {
  test("index", () => {
    const prefectures = ["北海道", "東京都"];
    render(<Home prefectures={prefectures} />);
  });
});
