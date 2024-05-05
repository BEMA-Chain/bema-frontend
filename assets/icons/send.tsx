import { SvgXml } from "react-native-svg";

export default (props: any) => {
    const xml = `<svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.5 1L14.5 21L10.5 12L1.5 8L21.5 1Z" stroke="#FFD345" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>  
  `;
    let prop = { ...props, xml: xml };
    return <SvgXml {...prop} />;
};