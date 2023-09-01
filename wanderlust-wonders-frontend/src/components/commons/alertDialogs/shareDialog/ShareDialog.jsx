import { Dialog } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  EmailIcon,
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import closeIcon from "../../../../assets/icons/close.svg";
import "./ShareDialog.css";
import SocialMediaButton from "../../../buttons/socialMedia/SocialMediaButton";

function AlertDialog({ onDialogClose, url, socialMediaUrl, onCopyUrl, open }) {

  useEffect(() => {
    onCopyUrl();
  }, []);

  return (
    <Dialog onClose={onDialogClose} open={open}>
      <div className="alert-dialog-wrapper">
        <div className="alert-dialog-header">
          <p className="alert-dialog-title">Share</p>
          <button className="btn-dialog-close" onClick={onDialogClose}>
            <Link>
              <img src={closeIcon} alt="Close icon" />
            </Link>
          </button>
        </div>

        <div className="alert-dialog-social-media">
          <SocialMediaButton socialMediaIcon={EmailIcon} url={socialMediaUrl} />

          <SocialMediaButton
            socialMediaIcon={FacebookIcon}
            url={socialMediaUrl}
          />

          <SocialMediaButton
            socialMediaIcon={TwitterIcon}
            url={socialMediaUrl}
          />

          <SocialMediaButton
            socialMediaIcon={WhatsappIcon}
            url={socialMediaUrl}
          />

          <SocialMediaButton
            socialMediaIcon={TelegramIcon}
            url={socialMediaUrl}
          />
        </div>

        <div className="alert-dialog-url">
          <p className="url">{url}</p>
          <button className="btn-copy-url" onClick={onCopyUrl}>
            Copy
          </button>
        </div>
      </div>
    </Dialog>
  );
}

export default AlertDialog;
