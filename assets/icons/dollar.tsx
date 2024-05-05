import { SvgXml } from "react-native-svg";

export default (props: any) => {
    const xml = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 1V23" stroke="#FFD345" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.5 5H10C9.07174 5 8.1815 5.36875 7.52513 6.02513C6.86875 6.6815 6.5 7.57174 6.5 8.5C6.5 9.42826 6.86875 10.3185 7.52513 10.9749C8.1815 11.6313 9.07174 12 10 12H15C15.9283 12 16.8185 12.3687 17.4749 13.0251C18.1313 13.6815 18.5 14.5717 18.5 15.5C18.5 16.4283 18.1313 17.3185 17.4749 17.9749C16.8185 18.6313 15.9283 19 15 19H6.5" stroke="#FFD345" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
  `;
    let prop = { ...props, xml: xml };
    return <SvgXml {...prop} />;
};