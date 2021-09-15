//createContext:グローバル変数を定義
import React, { createContext, useState } from "react";

//createContext({})でグローバル変数のセットを宣言
export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;

  //userInfo, setUserInfoをグローバル変数として利用できるようにする
  const [userInfo, setUserInfo] = useState(null);

  /*   
  valueの中でオブジェクトで書いた変数をProviderで囲まれたコンポーネント内で使用できる
  変数の受け取り側ではUseContextを指定して読み込む
   */
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
