import { SvgXml } from "react-native-svg";

export default (props: any) => {
    const xml = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.1667 9.33301H5.83337" stroke="#D0D1D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5.83337 14H16.3334" stroke="#D0D1D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.8334 18.667H5.83337" stroke="#D0D1D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.5 18.667H24.5" stroke="#D0D1D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21 15.167V22.167" stroke="#D0D1D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    
    
    
  `;
    let prop = { ...props, xml: xml };
    return <SvgXml {...prop} />;
};