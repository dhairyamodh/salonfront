import React, { useRef, useState, useEffect } from "react";
import { Img } from "react-image";
import CopyToClipboard from "react-copy-to-clipboard";
import { FormattedMessage } from "react-intl";
import {
  GiftCardWrapper,
  GiftCardImageWrapper,
  CardInfo,
  CardContent,
  CopyButton,
  GiftCode,
  CopySuccess,
  Discount,
  Title,
  Subtitle
} from "./gift-card.style";

const GiftCard = ({
  image,
  discount, title, subtitle,
  weight,
  onClick,
  onChange,
  code,
  ...props
}) => {
  const [copyText, setCopyText] = useState({
    value: code,
    copied: false,
  });
  const codeRef = useRef(null);

  useEffect(() => {
    if (copyText.copied) {
      setTimeout(() => {
        setCopyText({
          ...copyText,
          copied: false,
        });
      }, 3500);
    }
  }, [copyText.copied]);

  return (
    <GiftCardWrapper {...props} className="product-card">
      <GiftCardImageWrapper>
        {/* <Img src={image} className="gift-image" alt="gift image" /> */}
        <Discount>{discount}% OFF</Discount>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </GiftCardImageWrapper>
      <CardInfo>
        <CardContent>
          <GiftCode ref={codeRef} value={`${copyText.value.slice(0, copyText.value.length / 2)}XXXX`} readOnly />

          {!copyText.copied ? (
            <CopyToClipboard
              text={copyText.value}
              onCopy={() =>
                setCopyText({
                  ...copyText,
                  copied: true,
                })
              }
            >
              <CopyButton>
                <FormattedMessage id="intlCopyBtnId" defaultMessage="Copy" />
              </CopyButton>
            </CopyToClipboard>
          ) : (
            <CopySuccess>
              <FormattedMessage
                id="intlCopySuccessId"
                defaultMessage="Copied!"
              />
            </CopySuccess>
          )}
        </CardContent>
      </CardInfo>
    </GiftCardWrapper>
  );
};

export default GiftCard;
