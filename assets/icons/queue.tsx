import { SvgXml } from "react-native-svg";

export default (props: any) => {
    const xml = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.3334 23.333C18.2664 23.333 19.8334 21.766 19.8334 19.833C19.8334 17.9 18.2664 16.333 16.3334 16.333C14.4004 16.333 12.8334 17.9 12.8334 19.833C12.8334 21.766 14.4004 23.333 16.3334 23.333Z" stroke="#D0D1D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M19.8334 19.8337V4.66699H24.5" stroke="#D0D1D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.1667 5.83301H3.5" stroke="#D0D1D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.5 10.5H15.1667" stroke="#D0D1D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.5 15.167H3.5" stroke="#D0D1D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    
    
    
  `;
    let prop = { ...props, xml: xml };
    return <SvgXml {...prop} />;
};