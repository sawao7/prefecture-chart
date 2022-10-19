import React from "react";
import Chart from "@/components/Chart";
import MainTitle from "@/components/atoms/MainTitle";
import styles from "@/components/organisms/Main/styles.module.scss";

const Main = (props) => {
  const API_KEY: any = process.env.NEXT_PUBLIC_API_KEY;

  // グラフ表示用の人口データリスト
  const [dataList, setDataList] = React.useState<
    {
      name: string;
      data: {
        year: number;
        value: number;
      }[];
    }[]
  >([]);

  // URLフォーマット
  const url =
    "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=";

  // コピーを作成
  let dataListCopy = dataList.slice();

  // 都道府県を選択したときの処理
  const getPeopleData = async (index: number, name: string, checked: boolean) => {
    // checkがついている県のみ取得
    if (checked) {
      // findIndexでdataListCopyに同じ都道府県名があるかを確認　あったら処理を終了
      if (dataListCopy.findIndex((value) => value.name === name) !== -1) {
        return;
      }

      // URLを作成 indexは+1している
      const fetchURL = url + (index + 1).toString();
      // APIを用いてデータを取得
      await fetch(fetchURL, {
        headers: {
          "X-Api-Key": API_KEY,
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          // エラー処理
          throw new Error(`There is something wrong`);
        })
        .then((data) => {
          // データのオブジェクト
          const dataObj = data.result.data[0].data;
          dataListCopy.push({
            name: name,
            data: dataObj,
          });

          setDataList(dataListCopy);
        })
        .catch((err) => {
          // エラーが発生した場合
          throw new Error(`There is something wrong`);
        });
    }
    // もしチェックが外れてた場合
    else {
      // 都道府県名でがListにあるか indexを返す
      const indexDelete = dataListCopy.findIndex((value) => value.name === name);
      // もともとデータがなかったら処理を終了
      if (indexDelete === -1) {
        return;
      }

      // リストから削除
      dataListCopy.splice(indexDelete, 1);
      setDataList(dataListCopy);
    }
  };
  return (
    <main className={styles.main}>
      <div className={styles.contents}>
        <MainTitle />
        <div className={styles.checkboxes}>
          {props.prefectures.map((name, index) => {
            return (
              <div className={styles.checkbox} key={index}>
                <input
                  id={index.toString()}
                  className={styles.checkbox_box}
                  type="checkbox"
                  onChange={(e) => getPeopleData(index, name, e.target.checked)}
                />
                <label className={styles.checkbox_label} htmlFor={index.toString()}>
                  {name}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      {/* Chart Component */}
      <div className={styles.chart_content}>
        <Chart dataList={dataList} />
      </div>
    </main>
  );
};

export default Main;
