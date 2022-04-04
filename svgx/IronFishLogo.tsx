import { useColorMode, NAMED_COLORS, Icon } from '@ironfish/ui-kit';

export function IronFishLogo() {
  const { colorMode } = useColorMode();
  const fillColor = colorMode === "dark" ? NAMED_COLORS.WHITE : NAMED_COLORS.DEEP_BLUE;

  return (
    <Icon
      width="165"
      height="18"
      viewBox="0 0 165 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M69.3307 0.100708C63.9418 0.100708 60.1833 4.03087 60.1833 9.05035C60.1833 14.068 63.9418 18 69.3307 18C74.7195 18 78.478 14.0698 78.478 9.05035C78.478 4.03087 74.7195 0.100708 69.3307 0.100708ZM69.4929 15.2636C67.2938 15.3214 65.9825 13.251 65.8761 9.18092C65.7586 4.7005 66.9692 2.89304 69.1385 2.83522C71.3937 2.77553 72.6695 4.54755 72.7852 8.99999C72.8933 13.0962 71.7201 15.2058 69.4929 15.2636Z"
        fill={fillColor}
      />
      <path
        d="M40.5979 0.397339H33.4781C33.0827 0.397339 32.8346 0.645422 32.8346 1.04086V1.98097C32.8346 2.40066 32.982 2.54988 33.3531 2.69724L33.8232 2.87071C34.3417 3.06843 34.5152 3.34076 34.5152 3.88356V14.2173C34.5152 14.7619 34.3417 15.0324 33.8232 15.2301L33.3531 15.4036C32.982 15.5509 32.8346 15.7002 32.8346 16.1198V17.06C32.8346 17.4554 33.0827 17.7035 33.4781 17.7035H40.5979C40.9934 17.7035 41.2414 17.4554 41.2414 17.06V16.1198C41.2414 15.7002 41.0941 15.5509 40.7229 15.4036L40.2528 15.2301C39.7343 15.0324 39.5608 14.7601 39.5608 14.2173V3.88356C39.5608 3.3389 39.7343 3.06843 40.2528 2.87071L40.7229 2.69724C41.0941 2.54988 41.2414 2.40066 41.2414 1.98097V1.04086C41.2396 0.643556 40.9934 0.397339 40.5979 0.397339Z"
        fill={fillColor}
      />
      <path
        d="M59.6237 15.4278L59.3514 15.2805C58.6836 14.9093 58.1893 14.6369 57.5477 13.6241L55.2235 9.89165C55.1004 9.69393 55.1732 9.54471 55.397 9.49621C57.3499 8.97766 58.4617 7.83983 58.4617 5.81227C58.4617 1.98283 55.4753 0.397339 49.0979 0.397339L43.4312 0.445837C43.0357 0.496199 42.838 0.718168 42.838 1.08936V2.02946C42.838 2.44915 42.9854 2.59838 43.3081 2.72149L43.877 2.94346C44.347 3.14118 44.5205 3.38926 44.5205 3.88356V14.2172C44.5205 14.7619 44.347 15.0324 43.8285 15.2301L43.3584 15.4036C42.9872 15.5509 42.8399 15.7002 42.8399 16.1198V17.0599C42.8399 17.4554 43.088 17.7035 43.4834 17.7035H50.6032C51.0229 17.7035 51.2467 17.4554 51.2467 17.0599V16.1198C51.2467 15.7002 51.0975 15.5509 50.7282 15.4036L50.2581 15.2301C49.7396 15.0324 49.5661 14.76 49.5661 14.2172V10.386C49.5661 10.164 49.6407 10.0894 49.8142 10.0894C50.0119 10.0894 50.135 10.2367 50.3085 10.5352L53.6958 16.6664C54.1155 17.433 54.4382 17.7053 55.3019 17.7053H59.6275C60.0472 17.7053 60.2206 17.4834 60.2206 17.1607V16.2709C60.2169 15.8718 60.0938 15.7002 59.6237 15.4278ZM50.4764 8.01144H49.9317C49.7284 8.01144 49.581 7.86595 49.581 7.66077V2.93786C49.581 2.73454 49.7265 2.58719 49.9317 2.58719H50.5025C52.4256 2.58719 53.6175 3.2848 53.6175 5.21724C53.6175 7.15154 52.696 8.01144 50.4764 8.01144Z"
        fill={fillColor}
      />
      <path
        d="M163.807 2.86876L164.278 2.69528C164.649 2.54793 164.796 2.3987 164.796 1.97901V1.03891C164.796 0.64347 164.574 0.395386 164.153 0.395386H157.033C156.637 0.395386 156.389 0.64347 156.389 1.03891V1.97901C156.389 2.3987 156.537 2.54793 156.908 2.69528L157.378 2.86876C157.896 3.06648 158.07 3.33881 158.07 3.88161V6.99664C158.07 7.17011 157.947 7.29322 157.773 7.29322H152.532C152.358 7.29322 152.235 7.17011 152.235 6.99664V3.88161C152.235 3.33694 152.409 3.06648 152.927 2.86876L153.397 2.69528C153.769 2.54793 153.916 2.3987 153.916 1.97901V1.03891C153.916 0.64347 153.694 0.395386 153.272 0.395386H146.153C145.757 0.395386 145.509 0.64347 145.509 1.03891V1.97901C145.509 2.3987 145.656 2.54793 146.028 2.69528L146.498 2.86876C147.016 3.06648 147.19 3.33881 147.19 3.88161V14.2153C147.19 14.76 147.016 15.0304 146.498 15.2281L146.028 15.4016C145.656 15.549 145.509 15.6982 145.509 16.1179V17.058C145.509 17.4534 145.757 17.7015 146.153 17.7015H153.272C153.692 17.7015 153.916 17.4534 153.916 17.058V16.1179C153.916 15.6982 153.767 15.549 153.397 15.4016L152.927 15.2281C152.409 15.0304 152.235 14.7581 152.235 14.2153V10.1117C152.235 9.93819 152.358 9.81509 152.532 9.81509H157.773C157.947 9.81509 158.07 9.93819 158.07 10.1117V14.2153C158.07 14.76 157.896 15.0304 157.378 15.2281L156.908 15.4016C156.537 15.549 156.389 15.6982 156.389 16.1179V17.058C156.389 17.4534 156.637 17.7015 157.033 17.7015H164.153C164.572 17.7015 164.796 17.4534 164.796 17.058V16.1179C164.796 15.6982 164.649 15.549 164.278 15.4016L163.807 15.2281C163.289 15.0304 163.115 14.7581 163.115 14.2153V3.88161C163.115 3.33881 163.289 3.06648 163.807 2.86876Z"
        fill={fillColor}
      />
      <path
        d="M139.091 6.72626L136.075 5.83652C134.592 5.39258 133.801 4.87216 133.801 4.00667C133.801 3.16543 134.592 2.63195 135.804 2.62263C137.503 2.60957 139.02 3.38926 141.195 5.73766C141.491 6.05849 141.812 6.18346 142.258 5.93538L142.777 5.6388C143.222 5.39258 143.29 5.02512 143.073 4.65019L140.913 0.917756C140.665 0.477548 140.493 0.175371 139.973 0.175371H139.734C139.141 0.175371 139.067 0.447703 138.473 0.447703C137.707 0.447703 136.884 0.151123 135.481 0.151123C131.6 0.151123 129.078 2.02947 129.078 5.34221C129.078 8.1103 131.081 9.66781 133.553 10.4848L136.767 11.548C138.348 12.0666 139.19 12.6616 139.19 13.7491C139.19 14.9111 138.3 15.4297 136.841 15.4297C134.616 15.4297 132.687 14.1688 130.662 11.4995C130.341 11.0798 130.018 11.0052 129.598 11.2029L128.783 11.5984C128.412 11.7719 128.308 12.1449 128.537 12.6112L130.813 17.2838C131.018 17.7035 131.307 17.8769 131.654 17.8769H131.949C132.493 17.8769 132.863 17.5057 133.359 17.5057C134.273 17.5057 135.189 17.9516 137.24 17.9516C141.344 17.9516 144.261 16.0471 144.261 12.3893C144.258 9.00004 142.008 7.56564 139.091 6.72626Z"
        fill={fillColor}
      />
      <path
        d="M126.573 0.397339H119.453C119.057 0.397339 118.809 0.645422 118.809 1.04086V1.98097C118.809 2.40066 118.957 2.54988 119.328 2.69724L119.798 2.87071C120.317 3.06843 120.49 3.34076 120.49 3.88356V14.2173C120.49 14.7619 120.317 15.0324 119.798 15.2301L119.328 15.4036C118.957 15.5509 118.809 15.7002 118.809 16.1198V17.06C118.809 17.4554 119.057 17.7035 119.453 17.7035H126.573C126.968 17.7035 127.216 17.4554 127.216 17.06V16.1198C127.216 15.7002 127.069 15.5509 126.698 15.4036L126.228 15.2301C125.709 15.0324 125.536 14.7601 125.536 14.2173V3.88356C125.536 3.3389 125.709 3.06843 126.228 2.87071L126.698 2.69724C127.069 2.54988 127.216 2.40066 127.216 1.98097V1.04086C127.214 0.643556 126.968 0.397339 126.573 0.397339Z"
        fill={fillColor}
      />
      <path
        d="M115.834 0.470053C115.67 0.184664 115.513 0 115.142 0H114.65C114.378 0 114.226 0.0634206 114.021 0.223835C113.797 0.395442 113.603 0.395441 113.118 0.395441H103.911C103.516 0.395441 103.268 0.643525 103.268 1.03897V1.97907C103.268 2.39876 103.415 2.54798 103.786 2.69534L104.256 2.86881C104.775 3.06653 104.949 3.33886 104.949 3.88166V14.2154C104.949 14.76 104.775 15.0305 104.256 15.2282L103.786 15.4017C103.415 15.549 103.268 15.6983 103.268 16.1179V17.0581C103.268 17.4535 103.516 17.7016 103.911 17.7016H111.378C111.798 17.7016 112.022 17.4535 112.022 17.0581V16.1179C112.022 15.6983 111.899 15.5005 111.503 15.4017L110.688 15.1797C110.143 15.0323 109.996 14.76 109.996 14.2154V9.86364C109.996 9.69017 110.119 9.56706 110.293 9.56706H110.712C112.641 9.56706 113.827 10.5557 115.038 11.9658C115.211 12.1635 115.433 12.2381 115.73 12.0889L116.347 11.7681C116.62 11.6207 116.72 11.382 116.595 11.1246L114.68 7.19255C114.57 6.96685 114.433 6.83255 114.15 6.83255H113.846C113.637 6.83255 113.505 6.88851 113.314 7.04146C113.145 7.17389 112.936 7.26902 112.671 7.26902H110.293C110.119 7.26902 109.996 7.14592 109.996 6.97244V3.80892C109.996 2.91917 110.343 2.57223 111.281 2.57223C112.889 2.57223 115.088 3.98239 116.373 5.26757C116.595 5.48954 116.868 5.5399 117.164 5.36643L117.832 4.94674C118.054 4.79938 118.205 4.56436 118.054 4.30322L115.834 0.470053Z"
        fill={fillColor}
      />
      <path
        d="M96.5138 15.6255L95.9449 15.4278C95.4263 15.2543 95.2529 14.9577 95.2529 14.4149V3.66156C95.2529 3.11689 95.4263 2.84456 95.9449 2.64871L96.4149 2.47523C96.7861 2.32788 96.9335 2.17865 96.9335 1.75896V1.04269C96.9335 0.647252 96.7115 0.39917 96.2899 0.39917H91.5428C91.1474 0.39917 90.8993 0.647252 90.8993 1.04269V1.75896C90.8993 2.17865 91.0485 2.32788 91.4178 2.47523L91.8879 2.64871C92.4064 2.84643 92.5799 3.11876 92.5799 3.66156V9.71814C92.5799 9.82073 92.4978 9.9028 92.3952 9.9028C92.3374 9.9028 92.287 9.87669 92.2535 9.83566L85.9432 0.992331C85.7865 0.753574 85.6261 0.595024 85.462 0.516682C85.2978 0.43834 85.0703 0.39917 84.783 0.39917H80.0732C79.6777 0.39917 79.4296 0.647252 79.4296 1.04269V1.9828C79.4296 2.40249 79.5788 2.55171 79.9482 2.69907L80.4182 2.87254C80.9368 3.07026 81.1103 3.34259 81.1103 3.88539V14.4392C81.1103 14.9838 80.9368 15.2543 80.4182 15.452L79.9482 15.6255C79.577 15.7729 79.4296 15.9221 79.4296 16.3418V17.058C79.4296 17.4535 79.6777 17.7016 80.0732 17.7016H84.8203C85.24 17.7016 85.4638 17.4535 85.4638 17.058V16.3418C85.4638 15.9221 85.3165 15.7729 84.9453 15.6255L84.4752 15.452C83.9567 15.2543 83.7832 14.982 83.7832 14.4392V7.62343C83.7832 7.52083 83.8653 7.43876 83.9679 7.43876C84.0257 7.43876 84.0761 7.46488 84.1096 7.50591L91.097 17.1084C91.2537 17.3472 91.4141 17.5057 91.5782 17.5841C91.7424 17.6624 91.9699 17.7016 92.2572 17.7016H96.3888C96.8085 17.7016 97.0323 17.4535 97.0323 17.058V16.3418C97.0323 15.9221 96.885 15.7486 96.5138 15.6255Z"
        fill={fillColor}
      />
      <path
        d="M28.0595 8.80232L23.4709 0.85433C23.359 0.658475 23.1482 0.537231 22.9225 0.537231H13.7416C13.5159 0.537231 13.3051 0.658475 13.1932 0.85433L9.24995 7.68501C9.1884 7.7932 9.05223 7.84916 8.93286 7.81558C8.80975 7.78201 8.72394 7.67009 8.72394 7.54325V4.90014C8.72394 2.49578 6.76726 0.539097 4.3629 0.539097H0.634197C0.285389 0.539097 0 0.82262 0 1.17329V4.902C0 6.64045 1.03523 8.1961 2.63938 8.86387C2.74384 8.90677 2.81285 9.00937 2.81285 9.12315C2.81285 9.23693 2.74384 9.33952 2.63938 9.38242C1.03523 10.0446 0 11.5984 0 13.3387V17.0674C0 17.4162 0.283524 17.7016 0.634197 17.7016H4.3629C6.76726 17.7016 8.72394 15.7449 8.72394 13.3406V10.6975C8.72394 10.5706 8.80975 10.4587 8.93286 10.4251C9.05223 10.3934 9.1884 10.4475 9.24995 10.5557L13.1932 17.3864C13.307 17.5822 13.5159 17.7035 13.7416 17.7035H22.9206C23.1463 17.7035 23.3571 17.5822 23.469 17.3864L28.0576 9.43838C28.1136 9.34139 28.1416 9.2332 28.1416 9.12315C28.1434 9.00937 28.1155 8.89931 28.0595 8.80232ZM18.401 12.4527C16.6104 12.4527 15.1536 10.9567 15.1536 9.11942C15.1536 7.28211 16.6104 5.78615 18.401 5.78615C20.1917 5.78615 21.6485 7.28211 21.6485 9.11942C21.6485 10.9567 20.1917 12.4527 18.401 12.4527Z"
        fill={fillColor}
      />
    </Icon>
  );
}

export default IronFishLogo;
