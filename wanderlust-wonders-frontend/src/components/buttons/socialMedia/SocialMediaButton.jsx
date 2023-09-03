import React from "react";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  MailruIcon,
  MailruShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import "./SocialMediaButton.css";

const SocialMediaButton = ({ socialMediaIcon, url }) => {
  switch (socialMediaIcon) {
    case FacebookIcon:
      return (
        <FacebookShareButton url={url}>
          <FacebookIcon size={64} round />
          <p className="btn-social-media-title">Facebook</p>
        </FacebookShareButton>
      );

    case TelegramIcon:
      return (
        <TelegramShareButton url={url}>
          <TelegramIcon size={64} round />
          <p className="btn-social-media-title">Telegram</p>
        </TelegramShareButton>
      );

    case EmailIcon:
      return (
        <EmailShareButton url={url}>
          <EmailIcon size={64} round />
          <p className="btn-social-media-title">Email</p>
        </EmailShareButton>
      );

    case TwitterIcon:
      return (
        <TwitterShareButton url={url}>
          <TwitterIcon size={64} round />
          <p className="btn-social-media-title">Twitter</p>
        </TwitterShareButton>
      );

    case WhatsappIcon:
      return (
        <WhatsappShareButton url={url}>
          <WhatsappIcon size={64} round />
          <p className="btn-social-media-title">Whatsapp</p>
        </WhatsappShareButton>
      );
      
    default:
      return (
        <MailruShareButton>
          <MailruIcon size={64} round />
          <p className="btn-social-media-title">MailRU</p>
        </MailruShareButton>
      );
  }
}

export default SocialMediaButton;
