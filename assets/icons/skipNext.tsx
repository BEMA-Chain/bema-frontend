import { SvgXml } from "react-native-svg";

export default (props: any) => {
    const xml = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" fill="#0D0D0D"/>
    <path d="M13 12L23 20L13 28V12Z" stroke="#D0D1D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27 13V27" stroke="#D0D1D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    
  `;
    let prop = { ...props, xml: xml };
    return <SvgXml {...prop} />;
};