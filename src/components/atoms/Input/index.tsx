import React from "react";
import styles from "@/components/atoms/Input/styles.module.scss";
import { Props } from "@/containers/atoms/Input";
import { dataContextType, dataValueType, useDataContext } from "@/hooks/useDataContext";

const Input: React.FC<Props> = (props: Props) => {
  const API_KEY: any = process.env.NEXT_PUBLIC_API_KEY;

  const { dataList, setDataList }: dataContextType = useDataContext();
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
      if (dataListCopy.findIndex((value: dataValueType) => value.name === name) !== -1) {
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
      const indexDelete = dataListCopy.findIndex((value: dataValueType) => value.name === name);
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
    <input
      id={props.index.toString()}
      className={styles.checkbox_box}
      type="checkbox"
      onChange={(e) => getPeopleData(props.index, props.name, e.target.checked)}
    />
  );
};

export default Input;
