import { SvgXml } from "react-native-svg";

export default (props: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z" stroke="#D0D1D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1 10H23" stroke="#D0D1D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>    
  `;
    let prop = { ...props, xml: xml };
    return <SvgXml {...prop} />;
};