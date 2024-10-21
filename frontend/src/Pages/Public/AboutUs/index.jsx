import React from 'react'

export default function AboutUs() {
  return (
    <div className="refine-prose">
      <div className="not-prose mx-auto w-full max-w-[328px] pt-6 text-xl sm:max-w-[480px] md:max-w-[624px] md:pb-6 md:text-4xl lg:max-w-[912px] lg:py-10 xl:max-w-[944px] xl:py-16">
        <h1 className="dark:text-white !mb-0 text-xl font-semibold text-gray-900 md:text-[40px] md:leading-[56px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          <span className="text-gradient-to-r bg-gradient-to-r from-[#0FBDBD] to-[#26D97F] bg-clip-text text-transparent"> less time</span>
          <span className="text-gradient-to-r bg-gradient-to-r from-[#FF9933] to-[#FF4C4D] bg-clip-text text-transparent"> fewer resources</span>.
        </h1>
      </div>
      <div className="mx-auto w-full max-w-[1120px]">
        <div className="flex flex-col gap-4 xl:flex-row xl:gap-16">
          <div className="mx-auto flex w-[328px] items-center justify-center sm:w-[480px] md:w-[624px] lg:w-[912px] xl:w-[576px]"><img className="rounded-[12px]" src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/about.jpg" alt="Refine Office" /></div>
          <div className="mx-auto flex w-[328px] flex-col text-gray-700 dark:text-white sm:w-[480px] md:w-[624px] lg:w-[912px] xl:w-[480px] xl:justify-center">
            <div className="max-w-[642px]">
              <p className="text-xs sm:text-base">Shortly after its initial release on September 2021, Refine has gained attraction of open-source community and has become increasingly popular among web application frameworks.</p>
              <p className="text-xs sm:text-base">With the aim of sustaining the growth and expanding the user base, the project was backed by prominent VC’s and angel investors on May 2022.</p>
              <p className="text-xs sm:text-base">Today, the US-based company has an international team of 10+ members leading the development of the open-core and building new products for the ecosystem.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mx-auto w-full max-w-[328px] py-10 sm:max-w-[480px] md:max-w-[624px] md:py-20 lg:max-w-[912px] lg:py-32">
        <h4 className="text-center text-sm leading-6 text-gray-800 md:text-2xl md:leading-8 dark:text-white" style={{margin:0}}>Our Team</h4>
        <div className="mt-6 grid grid-cols-[repeat(2,144px)] gap-6 align-top sm:grid-cols-[repeat(3,144px)] md:mt-12 md:grid-cols-[repeat(3,176px)] lg:mt-16 lg:grid-cols-[repeat(4,192px)] lg:gap-12">
          <div className="not-prose flex flex-col justify-start text-center"><img srcSet="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/civan.png 1500w" src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/civan.png" alt="Civan Özseyhan" className="m-0 mb-6 w-full" /><span className="dark:text-white text-xs font-semibold leading-4 text-gray-900 lg:text-base lg:leading-6">Civan Özseyhan</span><span className="text-xs leading-4 text-gray-500 lg:text-base lg:leading-6 dark:text-white">Co-Founder</span><span className="text-xs leading-4 text-gray-500 lg:text-base lg:leading-6 dark:text-white">CEO</span></div>
          <div className="not-prose flex flex-col justify-start text-center"><img srcSet="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/omer.png 1500w" src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/omer.png" alt="Ömer Aplak" className="m-0 mb-6 w-full" /><span className="dark:text-white text-xs font-semibold leading-4 text-gray-900 lg:text-base lg:leading-6">Ömer Aplak</span><span className="text-xs leading-4 text-gray-500 lg:text-base lg:leading-6 dark:text-white">Co-Founder</span><span className="text-xs leading-4 text-gray-500 lg:text-base lg:leading-6 dark:text-white">CTO</span></div>
          <div className="not-prose flex flex-col justify-start text-center"><img srcSet="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/eren.png 1500w" src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/eren.png" alt="Eren Erkalkan" className="m-0 mb-6 w-full" /><span className="dark:text-white text-xs font-semibold leading-4 text-gray-900 lg:text-base lg:leading-6">Eren Erkalkan</span><span className="text-xs leading-4 text-gray-500 lg:text-base lg:leading-6 dark:text-white">Co-Founder</span><span className="text-xs leading-4 text-gray-500 lg:text-base lg:leading-6 dark:text-white">CPO</span></div>
          <div className="not-prose flex flex-col justify-start text-center"><img srcSet="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/batuhan.png 1500w" src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/batuhan.png" alt="Batuhan Özgür Özdemir" className="m-0 mb-6 w-full" /><span className="dark:text-white text-xs font-semibold leading-4 text-gray-900 lg:text-base lg:leading-6">Batuhan Özgür Özdemir</span><span className="text-xs leading-4 text-gray-500 lg:text-base lg:leading-6 dark:text-white">Tech Lead</span></div>
          <div className="not-prose flex flex-col justify-start text-center"><img srcSet="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/ali.png 1500w" src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/ali.png" alt="Ali Emir Şen" className="m-0 mb-6 w-full" /><span className="dark:text-white text-xs font-semibold leading-4 text-gray-900 lg:text-base lg:leading-6">Ali Emir Şen</span><span className="text-xs leading-4 text-gray-500 lg:text-base lg:leading-6 dark:text-white">Senior Software Developer</span></div>
          <div className="not-prose flex flex-col justify-start text-center"><img srcSet="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/alican.png 1500w" src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/alican.png" alt="Alican Erdurmaz" className="m-0 mb-6 w-full" /><span className="dark:text-white text-xs font-semibold leading-4 text-gray-900 lg:text-base lg:leading-6">Alican Erdurmaz</span><span className="text-xs leading-4 text-gray-500 lg:text-base lg:leading-6 dark:text-white">Software Developer</span></div>
          <div className="not-prose flex flex-col justify-start text-center"><img srcSet="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/necati.png 1500w" src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/necati.png" alt="Necati Ozmen" className="m-0 mb-6 w-full" /><span className="dark:text-white text-xs font-semibold leading-4 text-gray-900 lg:text-base lg:leading-6">Necati Ozmen</span><span className="text-xs leading-4 text-gray-500 lg:text-base lg:leading-6 dark:text-white">Head of Growth</span></div>
          <div className="not-prose flex flex-col justify-start text-center"><img srcSet="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/recep.png 1500w" src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/recep.png" alt="Recep Kütük" className="m-0 mb-6 w-full" /><span className="dark:text-white text-xs font-semibold leading-4 text-gray-900 lg:text-base lg:leading-6">Recep Kütük</span><span className="text-xs leading-4 text-gray-500 lg:text-base lg:leading-6 dark:text-white">Senior Product Designer</span></div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[328px] py-6 sm:max-w-[480px] md:max-w-[624px] md:py-10 lg:max-w-[912px] lg:py-16">
        <h4 className="mb-8 text-center text-sm leading-6 text-gray-800 md:text-2xl md:leading-8 lg:mb-16 dark:text-white">Backed by</h4>
        <div className="mb-16 flex w-full items-center justify-center gap-10 rounded-xl py-6">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="dark:bg-gray-0 flex h-[144px] w-[144px] shrink-0 items-center justify-center rounded-full bg-gray-900 md:h-[192px] md:w-[192px]">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#F05F22]"><span className="text-[64px] text-white md:text-[96px]">Y</span></div>
            </div>
            <span className="dark:text-gray-0 text-xs font-semibold text-gray-900 md:text-base">Y Combinator</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="dark:bg-gray-0 flex h-[144px] w-[144px] shrink-0 items-center justify-center rounded-full bg-gray-900 md:h-[192px] md:w-[192px]">
              <svg width="136" height="62" viewBox="0 0 136 62" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-0 h-auto w-[102px] md:w-[136px] dark:white">
                <path fillRule="evenodd" clipRule="evenodd" d="M87.6821 23.8469C87.0343 36.6962 77.0133 47.1052 63.8199 47.1052C50.6265 47.1052 41.6588 36.6962 42.3067 23.8469C42.9545 10.9976 52.9755 0.581543 66.1689 0.581543C79.3623 0.581543 88.33 10.9976 87.6821 23.8469ZM70.2524 2.76025C64.7047 1.37683 59.38 10.0776 56.4762 21.7208C53.5724 33.364 54.1939 43.5483 59.7364 44.9317C65.2788 46.3152 70.6088 37.6144 73.5126 25.9712C76.4164 14.328 75.7949 4.14367 70.2524 2.76025Z" fill="currentColor"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M135.782 23.8469C135.134 36.6962 125.113 47.1052 111.922 47.1052C98.7302 47.1052 89.759 36.6962 90.4068 23.8469C91.0546 10.9976 101.076 0.581543 114.269 0.581543C127.462 0.581543 136.432 10.9976 135.782 23.8469ZM118.353 2.76025C112.805 1.37683 107.48 10.0776 104.576 21.7208C101.673 33.364 102.294 43.5483 107.838 44.9317C113.382 46.3152 118.711 37.6144 121.613 25.9712C124.515 14.328 123.895 4.14367 118.353 2.76025Z" fill="currentColor"></path>
                <path d="M40.0454 31.0659C39.6855 41.3854 30.0051 46.9823 20.0315 46.9823C11.5853 46.9823 3.70433 42.4669 0 39.7211L4.17133 28.1446L4.41887 28.2341C11.2657 38.4693 17.0856 45.5181 23.167 44.9704C27.1909 44.6069 29.5803 42.1614 29.7488 37.2948C29.9858 30.5357 24.8331 22.1545 5.41079 25.613L5.11936 25.5077L13.8588 1.22761H43.1529L39.2203 12.1545H11.7696L9.18183 19.3525C24.6891 11.3873 40.4317 19.7897 40.0384 31.0712L40.0454 31.0659Z" fill="currentColor"></path>
                <path d="M0.0070226 52.8478H5.38094V53.8643H1.07268V56.2975H4.77701V57.3158H1.07268V60.3003H5.50208V61.3256H0.0070226V52.8478Z" fill="currentColor"></path>
                <path d="M10.1755 52.8478H9.03788V61.3256H10.1035V55.1125L11.58 58.8888H12.3788L13.8553 55.1125V61.3256H14.9297V52.8478H13.7833L11.9785 57.5458L10.1755 52.8478Z" fill="currentColor"></path>
                <path d="M18.6498 52.8478H24.0238V53.8643H19.7155V56.2975H23.4181V57.3158H19.7155V60.3003H24.1449V61.3256H18.6498V52.8478Z" fill="currentColor"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M30.8039 52.8478H27.8369L27.8422 61.3256H28.9079V57.3298H30.3246L32.8053 61.3256H34.0658L31.529 57.2543C32.6315 57.0191 33.2969 56.3344 33.2969 55.0879C33.2969 53.5869 32.305 52.8478 30.8039 52.8478ZM32.1891 55.0809C32.1891 55.9359 31.6993 56.3098 30.8215 56.3098L28.8903 56.2975V53.852H30.8215C31.7045 53.852 32.1891 54.2259 32.1891 55.0809Z" fill="currentColor"></path>
                <path d="M36.7238 57.0858C36.7238 54.1557 38.3039 52.7512 40.221 52.7512C41.8923 52.7512 42.8843 53.8291 43.26 55.3302L42.2557 55.6322C41.88 54.4032 41.2867 53.7677 40.221 53.7677C38.7814 53.7677 37.8246 54.7737 37.8246 57.0858C37.8246 59.3979 38.7814 60.4021 40.221 60.4021C41.3832 60.4021 42.0135 59.5665 42.1223 58.0654H40.221V57.0489H43.2231V61.3256H42.3453L42.2856 60.188C41.8976 61.0342 41.0567 61.4169 40.1543 61.4169C38.3091 61.4186 36.7238 60.0142 36.7238 57.0858Z" fill="currentColor"></path>
                <path d="M48.7322 60.4022H46.6852V61.3256H51.8431V60.4109H49.7978V53.7765H51.8431V52.8566H46.6852V53.7765H48.7322V60.4022Z" fill="currentColor"></path>
                <path d="M55.6932 52.8478H56.8554L60.4 59.3944V52.8478H61.4656V61.3256H60.3034L56.7553 54.7877V61.3256H55.6914L55.6932 52.8478Z" fill="currentColor"></path>
                <path d="M68.1861 52.7512C66.2672 52.7512 64.6872 54.1557 64.6872 57.0858C64.6872 60.0142 66.2725 61.4186 68.1194 61.4169C69.0218 61.4169 69.8627 61.0342 70.2507 60.188L70.3104 61.3256H71.1882V57.0489H68.1861V58.0654H70.0857C69.9768 59.5665 69.3483 60.4021 68.1861 60.4021C66.7447 60.4021 65.7879 59.3979 65.7879 57.0858C65.7879 54.7737 66.7447 53.7677 68.1861 53.7677C69.25 53.7677 69.8434 54.4032 70.2191 55.6322L71.2233 55.3302C70.8493 53.8291 69.8557 52.7512 68.1861 52.7512Z" fill="currentColor"></path>
                <path d="M83.8988 52.8478H89.2727V53.8643H84.9645V56.2975H88.6653V57.3158H84.9609V60.3003H89.3904V61.3256H83.8953L83.8988 52.8478Z" fill="currentColor"></path>
                <path d="M92.8682 52.8478V58.3797C92.8682 60.3179 94.1726 61.4187 95.8562 61.4187C97.5399 61.4187 98.8583 60.3109 98.8583 58.3797V52.8478H97.7944V58.4534C97.7944 59.5788 97.1168 60.4022 95.8633 60.4022C94.6098 60.4022 93.9321 59.5788 93.9321 58.4534V52.8478H92.8682Z" fill="currentColor"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M102.408 52.8478H105.373C106.874 52.8478 107.868 53.5869 107.868 55.0879C107.868 56.3344 107.201 57.0191 106.1 57.2543L108.63 61.3256H107.371L104.889 57.3298H103.474V61.3256H102.408V52.8478ZM105.393 56.3098C106.271 56.3098 106.76 55.9359 106.76 55.0809C106.76 54.2259 106.276 53.852 105.393 53.852H103.462V56.2975L105.393 56.3098Z" fill="currentColor"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M114.513 52.7512C112.673 52.7512 111.221 54.1803 111.221 57.0858C111.221 59.9896 112.675 61.4186 114.515 61.4186C116.355 61.4186 117.808 59.9913 117.808 57.0858C117.808 54.1803 116.353 52.7512 114.513 52.7512ZM114.513 53.7677C115.76 53.7677 116.704 54.6876 116.704 57.0858C116.704 59.4822 115.76 60.4021 114.513 60.4021C113.267 60.4021 112.322 59.484 112.322 57.0858C112.322 54.6876 113.267 53.7677 114.513 53.7677Z" fill="currentColor"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M121.281 52.8478H124.488C126.123 52.8478 127.006 53.7923 127.006 55.2688C127.006 56.7452 126.128 57.6897 124.488 57.6897H122.345V61.3256H121.281V52.8478ZM124.464 56.6732C125.396 56.6732 125.905 56.201 125.905 55.2688C125.905 54.3365 125.396 53.8643 124.464 53.8643H122.345V56.6732H124.464Z" fill="currentColor"></path>
                <path d="M135.879 52.8478H130.505V61.3256H136V60.3003H131.571V57.3158H135.275V56.2975H131.571V53.8643H135.879V52.8478Z" fill="currentColor"></path>
              </svg>
            </div>
            <span className="dark:text-white text-xs font-semibold text-gray-900 md:text-base">500 Emerging Europe</span>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(2,144px)] gap-6 align-top sm:grid-cols-[repeat(3,144px)] md:grid-cols-[repeat(3,176px)] lg:grid-cols-[repeat(4,192px)] lg:gap-12">
          <div className="flex flex-col justify-start text-center"><img className="not-prose m-0 mb-6 w-full" alt="Emre Baran" src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/emre-dark.png" srcSet="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/emre-dark.png 1500w" /><span className="dark:text-white text-xs font-semibold leading-4 text-gray-900 lg:text-base lg:leading-6">Emre Baran</span><span className="text-xs leading-4 text-gray-500 lg:text-base lg:leading-6 dark:text-white">CEO &amp; Co-founder at Cerbos</span><span className="text-xs leading-4 text-gray-500 lg:text-base lg:leading-6 dark:text-white">Expert-in-Residence at Seedcamp</span></div>
          <div className="flex flex-col justify-start text-center"><img className="not-prose m-0 mb-6 w-full" alt="Burak Emre Kabakçı" src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/burak-dark.png" srcSet="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/burak-dark.png 1500w" /><span className="dark:text-white text-xs font-semibold leading-4 text-gray-900 lg:text-base lg:leading-6">Burak Emre Kabakçı</span><span className="text-xs leading-4 text-gray-500 lg:text-base lg:leading-6 dark:text-white">Staff SWE @ LiveRamp Maker</span></div>
          <div className="flex flex-col justify-start text-center"><img className="not-prose m-0 mb-6 w-full" alt="Piotr Karwatka" src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/piotr-dark.png" srcSet="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/piotr-dark.png 1500w" /><span className="dark:text-white text-xs font-semibold leading-4 text-gray-900 lg:text-base lg:leading-6">Piotr Karwatka</span><span className="text-xs leading-4 text-gray-500 lg:text-base lg:leading-6 dark:text-white">Co-founder @ Catch The Tornado</span><span className="text-xs leading-4 text-gray-500 lg:text-base lg:leading-6 dark:text-white">Business Angel investor</span></div>
          <div className="flex flex-col justify-start text-center"><img className="not-prose m-0 mb-6 w-full" alt="Aksel Kastoryano" src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/aksel-dark.png" srcSet="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/team-avatars/aksel-dark.png 1500w" /><span className="dark:text-white text-xs font-semibold leading-4 text-gray-900 lg:text-base lg:leading-6">Aksel Kastoryano</span><span className="text-xs leading-4 text-gray-500 lg:text-base lg:leading-6 dark:text-white">Entrepreneur - Investor</span></div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[328px] py-8 sm:max-w-[480px] md:max-w-[624px] md:py-10 lg:max-w-[912px] lg:py-16 xl:max-w-[1016px]">
        <h4 className="mb-8 text-center text-sm leading-6 text-gray-800 md:text-2xl md:leading-8 lg:mb-16 dark:text-white">We are Here</h4>
        <div className="flex flex-col md:gap-8 lg:flex-row lg:gap-10 xl:gap-24">
          <div className="w-full shrink-0 lg:order-last lg:h-[416px] lg:w-[624px]">
            <a href="https://goo.gl/maps/D4NZ5gn6VsWaRtXT6" target="_blank" rel="noopener noreferrer"><img className="m-0 p-0" src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/map.png" srcSet="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/about/images/map2x.png 1500w" alt="Refine Office" /></a>
          </div>
          <div className="flex flex-col items-start justify-start gap-8 pt-6 lg:pt-12">
            <div className="flex w-max items-center justify-center gap-6">
              <div className="bg-refine-orange flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-opacity-10 dark:text-white">
                <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-refine-orange"><path fillRule="evenodd" clipRule="evenodd" d="M9 0C13.9706 0 18 4.02944 18 9C18 14.25 10.5 24 9 24C7.5 24 0 14.25 0 9C0 4.02944 4.02944 0 9 0ZM9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6Z" fill="currentColor"></path></svg>
              </div>
              <span className="text-gray-700 dark:text-white">256 Chapman Road STE 105-4 <br />Newark, DE 19702</span>
            </div>
            <div className="flex items-center justify-center gap-6">
              <div className="bg-refine-pink flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-opacity-10">
                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-refine-pink dark:text-white">
                  <path d="M3.00001 0.5C1.34315 0.5 5.72204e-06 1.84315 5.72204e-06 3.5V5L11.3292 10.6646C11.7515 10.8757 12.2485 10.8757 12.6708 10.6646L24 5V3.5C24 1.84315 22.6569 0.5 21 0.5H3.00001Z" fill="currentColor"></path>
                  <path d="M24 8.75L14.0125 13.7438C12.7456 14.3772 11.2544 14.3772 9.98754 13.7438L0 8.75L5.72204e-06 18.5C5.72204e-06 20.1568 1.34315 21.5 3.00001 21.5H21C22.6569 21.5 24 20.1569 24 18.5L24 8.75Z" fill="currentColor"></path>
                </svg>
              </div>
              <a href="mailto:info@refine.dev" className="text-gray-700 no-underline hover:no-underline dark:text-white">info@codeweb</a>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}
