import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Chat from './Chat';

type ChatsData = {
  text: string,
  type: string
}

type Props = {
    chats: ChatsData[]
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
}));

const Chats: React.VFC<Props> = function Chats({ chats }: Props) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {chats.map((key, index) => (
        <Chat
          text={key.text}
          type={key.type}
          key={index.toString()}
        />
      ))}
    </List>
  );
};

export default Chats;
