import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

type Props = {
    text: string,
    type: string
}

const Chat: React.VFC<Props> = function Chat({ text, type }: Props) {
  /* typeにquestionを受け取っているかの判定 */
  const isQuestion = type === 'question';

  return (
    <ListItem
      className={isQuestion ? 'p-question__row' : 'p-question__reverse'}
    >
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt="質問者" src="https://v4.mui.com/static/images/avatar/1.jpg" />
        ) : (
          <Avatar alt="回答者" src="https://v4.mui.com/static/images/avatar/3.jpg" />
        )}
      </ListItemAvatar>
      <div className="p-chat__bubble">
        {text}
      </div>
    </ListItem>
  );
};

export default Chat;
