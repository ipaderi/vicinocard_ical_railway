import { BASE_URL, IS_PRODUCTION } from "@calcom/lib/constants";

import EmailCommonDivider from "./EmailCommonDivider";
import Row from "./Row";

export type BodyHeadType = "checkCircle" | "xCircle" | "calendarCircle";

export const getHeadImage = (headerType: BodyHeadType): string => {
  switch (headerType) {
    case "checkCircle":
      return IS_PRODUCTION
        ? BASE_URL + "/emails/checkCircle@2x.png"
        : "https://ical.vicinocard.com/emails/checkCircle@2x.png";
    case "xCircle":
      return IS_PRODUCTION
        ? BASE_URL + "/emails/xCircle@2x.png"
        : "https://ical.vicinocard.com/emails/xCircle@2x.png";
    case "calendarCircle":
      return IS_PRODUCTION
        ? BASE_URL + "/emails/calendarCircle@2x.png"
        : "https://ical.vicinocard.com/emails/calendarCircle@2x.png";
  }
};

const EmailSchedulingBodyHeader = (props: { headerType: BodyHeadType }) => {
  const image = getHeadImage(props.headerType);

  return (
    <>
      <EmailCommonDivider headStyles={{ padding: "30px 30px 0 30px", borderTop: "1px solid #E1E1E1" }}>
        <td
          align="center"
          style={{
            fontSize: "0px",
            padding: "10px 25px",
            wordBreak: "break-word",
          }}>
          <Row border="0" role="presentation" style={{ borderCollapse: "collapse", borderSpacing: "0px" }}>
            <td style={{ width: 64 }}>
              <img
                height="64"
                src={image}
                style={{
                  border: "0",
                  display: "block",
                  outline: "none",
                  textDecoration: "none",
                  height: "64px",
                  width: "100%",
                  fontSize: "13px",
                }}
                width="64"
                alt=""
              />
            </td>
          </Row>
        </td>
      </EmailCommonDivider>
    </>
  );
};

export default EmailSchedulingBodyHeader;
