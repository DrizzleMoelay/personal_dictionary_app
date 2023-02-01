import React from "react";
import "./styles.css";
import { InputText } from "./components/InputText";
import { MemorizationText } from "./components/MemorizationText";
import { NewvocabText } from "./components/NewvocabText";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="語彙を入力" />
        <input placeholder="解説を入力" />
        <button>追加</button>
      </div>
      <div>
        <p>新語彙</p>
        <ul>
          <div>
            <li>aaa</li>
            <button>暗記済</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div>
        <p>暗記済語彙</p>
        <ul>
          <div>
            <li>aaa</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
