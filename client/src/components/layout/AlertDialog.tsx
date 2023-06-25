import React, { useRef } from 'react';
import { EmailSignUp } from '../common/FirebaseLogin';
import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material';

interface AlertDialogProps {
  open: boolean;
  handleClose: () => void;
}

const AlertDialog: React.FC<AlertDialogProps> = ({ open, handleClose }) => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    EmailSignUp(email.current?.value as string, password.current?.value as string);
  };
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{'Use Google'}</DialogTitle>
      <DialogContent>
        <form onSubmit={onSubmit}>
          <div>
            <input id="email" type="email" ref={email} placeholder="Email" />
            <div />
            <input id="password" type="password" ref={password} placeholder="Password" />
          </div>
          <Button type="submit" onClick={handleClose}>
            회원가입
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AlertDialog;
