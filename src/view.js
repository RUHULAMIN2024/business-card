import { createRoot } from "react-dom/client";

import "./style.scss";
import Style from "./Components/Common/Style";
import { prefix } from "./utils/data";
import { escapeHTML } from "../../bpl-tools/utils/common";
import Theme from "./Components/Common/theme/theme";

document.addEventListener("DOMContentLoaded", () => {
  const businessCardEls = document.querySelectorAll(".wp-block-business-card");
  businessCardEls.forEach((businessCardEl) => {
    const attributes = JSON.parse(businessCardEl.dataset.attributes);

    createRoot(businessCardEl).render(
      <>
        <Style attributes={attributes} id={businessCardEl.id} />
        <Theme isEditor={false} attributes={attributes} />{" "}
      </>
    );

    businessCardEl?.removeAttribute("data-attributes");
  });
});

// const BusinessCard = ({ attributes }) => {
//   const { name, title, contacts, theme, isHeaderSep } = attributes;

//   return (
//     <div className={`${prefix} ${theme}`}>
//       <div className="header">
//         {name && (
//           <h3
//             className="name"
//             dangerouslySetInnerHTML={{ __html: escapeHTML(name) }}
//           />
//         )}

//         {title && (
//           <p
//             className="title"
//             dangerouslySetInnerHTML={{ __html: escapeHTML(title) }}
//           />
//         )}

//         {isHeaderSep && <span className="separator"></span>}
//       </div>

//       <div className="contacts">
//         {contacts?.length &&
//           contacts.map((contact, index) => {
//             const { icon, text } = contact;

//             return (
//               <div key={index} className="contact">
//                 {icon?.class && <i className={`icon ${icon?.class}`}></i>}
//                 <p
//                   className="text"
//                   dangerouslySetInnerHTML={{ __html: escapeHTML(text) }}
//                 />
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// };
