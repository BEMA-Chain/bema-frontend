import { SvgXml } from "react-native-svg";

export default (props: any) => {
    const xml = `<svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.812256 1.5L4.81226 5.5L8.81226 1.5" stroke="#898C90" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    
    
  `;
    let prop = { ...props, xml: xml };
    return <SvgXml {...prop} />;
};