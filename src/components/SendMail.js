import React from "react";
import { Button, IconButton } from "@material-ui/core";
import { useForm } from "react-hook-form";

import "../styles/sendMail.css";

import CloseIcon from "@material-ui/icons/Close";
import FormatColorTextIcon from "@material-ui/icons/FormatColorText";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import InsertLinkIcon from "@material-ui/icons/InsertLink";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";

import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";

function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {};

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail__close"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="Recipent"
          type="email"
          ref={register({ required: true })}
        />
        {errors.to && <p className="sendMail__errors">Recipent is required</p>}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          ref={register({ required: true })}
        />
        {errors.subject && (
          <p className="sendMail__errors">Subject is required</p>
        )}
        <input
          name="message"
          type="text"
          className="sendMail__message"
          ref={register({ required: true })}
        />
        {errors.message && (
          <p className="sendMail__errors">Message is required</p>
        )}

        <div className="sendMail__options">
          <div className="sendMail__optionsLeft">
            <Button
              className="sendMail__send"
              variant="contained"
              color="primary"
              type="submit"
            >
              Send
            </Button>
            <IconButton>
              <FormatColorTextIcon />
            </IconButton>
            <IconButton>
              <AttachFileIcon />
            </IconButton>
            <IconButton>
              <InsertLinkIcon />
            </IconButton>
            <IconButton>
              <InsertEmoticonIcon />
            </IconButton>
            <IconButton>
              <InsertPhotoIcon />
            </IconButton>
          </div>

          <div className="sendMail__optionsRight">
            <IconButton>
              <MoreVertIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
