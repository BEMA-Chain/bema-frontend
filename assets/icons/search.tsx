import { SvgXml } from "react-native-svg";

export default (props: any) => {
    const xml = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11.5" cy="11" r="8" stroke=${props.color || "white"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17 16.958L22 21.958" stroke=${props.color || "white"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
  `;
    let prop = { ...props, xml: xml };
    return <SvgXml {...prop} />;
};