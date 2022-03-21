import React, { useState, useEffect } from 'react';
import defaultDataset from './dataset';
import './assets/styles/style.css';

import { AnswersList, Chats } from './components/index';

import type { DataSet } from './types/dataset';
import type { Answers } from './types/answers';

type ChatsData = {
  text: string,
  type: string
}

function App() {
  const [answers, setAnswers] = useState<Answers[]>([]); // 回答コンポーネントに表示するデータ
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [chats, setChats] = useState<ChatsData[]>([]); // チャットコンポーネントに表示するデータ
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentId, setCurrentId] = useState('init'); // 現在の質問ID
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dataset, setDataset] = useState<DataSet>(defaultDataset); // 質問と回答のデータセット
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [open, setOpen] = useState(false); // 問い合わせフォーム用モーダルの開閉を管理

  const initDataset = dataset[currentId];
  const initAnswer = initDataset.answers;
  const initChats = {
    text: initDataset.question,
    type: 'question',
  };

  useEffect(() => {
    setChats([...chats, initChats]);
    setAnswers(initAnswer);
  }, []);

  return (
    <section className="c-section">
      <div className="c-box">
        <Chats chats={chats} />
        <AnswersList answers={answers} />
      </div>
    </section>
  );
}

export default App;
