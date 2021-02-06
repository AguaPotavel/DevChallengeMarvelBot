import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const hero = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.7772 5.34589V4.67032C13.7772 4.45883 13.6272 4.27649 13.4198 4.23575C12.9588 4.14511 12.4826 4.09827 11.9956 4.09827C11.6963 4.09872 11.4017 4.11688 11.1122 4.15244C10.9323 4.17426 10.7549 4.20264 10.5794 4.23727C10.372 4.27862 10.2228 4.46051 10.2228 4.67199V5.34317C7.51006 6.01733 5.39329 8.19965 4.8141 10.9483L2.69995 8.52161C2.44208 8.19187 1.91581 8.44364 2.01148 8.85151L4.65628 18.0662V19.0692C4.6575 19.5871 5.21291 19.917 5.67373 19.6797L11.6847 16.5875C11.8843 16.4851 12.1208 16.4876 12.3181 16.5935L18.3121 19.8175C18.7674 20.0625 19.3199 19.7447 19.3405 19.228C19.3426 19.1714 19.3439 19.115 19.3439 19.0579V18.0655L21.9885 8.85151C22.0843 8.44364 21.5579 8.19187 21.3 8.52161L19.1755 10.9603C18.5822 8.21859 16.4787 6.02539 13.7772 5.34589ZM10.8693 11.7412V13.8603C10.8693 14.0973 10.7323 14.3128 10.5176 14.413L8.52942 15.3407C8.30511 15.4454 8.03992 15.4042 7.85803 15.2361L6.14356 13.6534C5.94535 13.4706 5.89088 13.1792 6.00929 12.937L6.72645 11.4733C6.82868 11.2638 7.04139 11.1312 7.27423 11.1312H10.2598C10.5964 11.1312 10.8693 11.4044 10.8693 11.7412ZM17.8565 13.6534C18.0547 13.4706 18.1091 13.1792 17.9907 12.937L17.2736 11.4733C17.1713 11.2638 16.9586 11.1312 16.7258 11.1312H13.7404C13.4037 11.1312 13.1307 11.4044 13.1307 11.7412V13.8603C13.1307 14.0973 13.2677 14.3128 13.4824 14.413L15.4706 15.3407C15.6949 15.4454 15.9601 15.4042 16.1421 15.2361L17.8565 13.6534Z" fill="#fff"/>
</svg>
`;

const human = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.9374 2C8.8012 2 5.43745 5.36375 5.43745 9.5V10.6025L3.6287 14.22C3.5312 14.4137 3.54245 14.6438 3.6562 14.8275C3.76995 15.0113 3.9712 15.125 4.18745 15.125H5.43745V18.135C5.43745 18.5025 5.59745 18.8487 5.8787 19.0863C6.15995 19.3237 6.52495 19.4275 6.88995 19.3662L9.18745 18.9862V21.375C9.18745 21.5588 9.26745 21.7337 9.4087 21.8512C9.52245 21.9475 9.66495 22 9.81245 22C9.8462 22 9.8812 21.9975 9.91495 21.9912L17.4149 20.7412C17.7162 20.6912 17.9374 20.4312 17.9374 20.125V16.2737C17.9374 15.4037 18.3649 14.7063 18.7237 14.2725C19.8287 12.9375 20.4374 11.2425 20.4374 9.5C20.4374 5.36375 17.0737 2 12.9374 2Z" fill="white"/>
</svg>
`;

export const HeroSvg = () => {
  return (
    <SvgXml xml={hero} width="100%" height="100%"/>
  );
};

export const HumanSvg = () => {
    return (
      <SvgXml xml={human} width="100%" height="100%"/>
    );
  };
