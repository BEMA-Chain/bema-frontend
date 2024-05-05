import { SvgXml } from "react-native-svg";

export default (props: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 5V19L11 12L3 5Z" stroke="#D0D1D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14 5V19L22 12L14 5Z" stroke="#D0D1D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    
  `;
    let prop = { ...props, xml: xml };
    return <SvgXml {...prop} />;
};