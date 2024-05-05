import { SvgXml } from "react-native-svg";

export default (props: any) => {
    const xml = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_796_4582)">
    <path d="M7.99998 14.6663C11.6819 14.6663 14.6666 11.6816 14.6666 7.99967C14.6666 4.31778 11.6819 1.33301 7.99998 1.33301C4.31808 1.33301 1.33331 4.31778 1.33331 7.99967C1.33331 11.6816 4.31808 14.6663 7.99998 14.6663Z" stroke="#DFDFE1" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 5.33301V7.99967" stroke="#DFDFE1" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 10.667H8.00583" stroke="#DFDFE1" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_796_4582">
    <rect width="16" height="16" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    
    
    
  `;
    let prop = { ...props, xml: xml };
    return <SvgXml {...prop} />;
};