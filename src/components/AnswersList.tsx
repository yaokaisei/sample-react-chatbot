import React from 'react';
import Answer from './Answer';

type Answers = {
  content: string,
  nextId: string
}

type Props = {
    answers: Answers[]
}

const AnswersList: React.VFC<Props> = function Link({ answers }: Props) {
  return (
    <div className="c-grid__answer">
      {
        answers.map((key, index) => (
          <Answer
            content={key.content}
            key={index.toString()}
          />
        ))
      }
    </div>
  );
};

export default AnswersList;
