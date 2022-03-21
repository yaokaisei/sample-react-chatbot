import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

type Props = {
    content: string
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Answer: React.VFC<Props> = function Answer({ content }: Props) {
  const classes = useStyles();

  return (
    <Button variant="contained" color="primary" className={classes.root}>{content}</Button>
  );
};

export default Answer;
