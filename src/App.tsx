import React, { useState, useEffect } from 'react';
import defaultDataset from './dataset';
import './assets/styles/style.css';
import { AnswersList } from './components/index';

type DataSet = {
  [key:string]: Data
}

type Data = {
  answers:Answers[],
  question:string
}

type Answers = {
  content: string,
  nextId: string
}

function App() {
  const [answers, setAnswers] = useState<Answers[]>([]); // 回答コンポーネントに表示するデータ
  const [chats, setChats] = useState([]); // チャットコンポーネントに表示するデータ
  const [currentId, setCurrentId] = useState('init'); // 現在の質問ID
  const [dataset, setDataset] = useState<DataSet>(defaultDataset); // 質問と回答のデータセット
  const [open, setOpen] = useState(false); // 問い合わせフォーム用モーダルの開閉を管理

  useEffect(() => {
    const initDataset = dataset[currentId];
    const initAnswer = initDataset.answers;

    setAnswers(initAnswer);
  });

  return (
    <section className="c-section">
      <div className="c-box">
        <AnswersList answers={answers} />
      </div>
    </section>
  );
}

export default App;
