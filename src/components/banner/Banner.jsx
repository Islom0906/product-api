import {Button} from '../'

const Banner = () => {
  return (
    <div className="container grid gap-8 py-12 mx-auto mt-8 lg:pl-16 lg:gap-16 lg:grid-cols-2 xl:grid-cols-3 dark:bg-black bg-banner rounded-3xl">
      <div className="order-2 lg:order-1 xl:col-span-2">
        <h1 className="text-3xl font-bold lg:text-5xl text-text dark:text-white ">
          SEEDRA Basil Seeds for Indoor and Outdoor Planting
        </h1>
        <h6 className="mt-3 text-sm lg:text-base text-text dark:text-white">
          Be sure of our quality - the freshest batches of this season. Non-GMO,
          Heirloom - our seeds were tested and have the best germination
          ratings. Your easy growing experience is our guarantee
        </h6>
        <div className="flex items-center mt-5 space-x-5">
          <svg
            width="29"
            height="37"
            viewBox="0 0 29 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.2651 16.7765C26.4967 15.047 25.3797 13.4947 23.9839 12.2167L22.832 11.1599C22.7929 11.125 22.7459 11.1002 22.6949 11.0877C22.644 11.0753 22.5908 11.0755 22.54 11.0884C22.4892 11.1013 22.4424 11.1265 22.4036 11.1617C22.3648 11.1969 22.3352 11.2411 22.3175 11.2905L21.8029 12.7669C21.4823 13.6931 20.8925 14.6391 20.0574 15.5692C20.002 15.6286 19.9386 15.6444 19.8951 15.6484C19.8516 15.6523 19.7843 15.6444 19.7249 15.589C19.6695 15.5415 19.6418 15.4703 19.6457 15.399C19.7922 13.0162 19.0797 10.3286 17.5202 7.40358C16.2299 4.97329 14.4368 3.07734 12.1965 1.75532L10.5618 0.793493C10.3481 0.666832 10.075 0.833074 10.0868 1.08244L10.1739 2.98234C10.2333 4.28061 10.0829 5.42847 9.72664 6.38238C9.29124 7.55003 8.66586 8.63456 7.86632 9.60826C7.30989 10.285 6.67923 10.897 5.9862 11.433C4.31708 12.7161 2.95986 14.3601 2.01619 16.2421C1.07484 18.1405 0.584492 20.2306 0.583344 22.3495C0.583344 24.2177 0.95145 26.0266 1.67975 27.7326C2.38297 29.3751 3.39781 30.8657 4.66814 32.1222C5.95058 33.3888 7.43884 34.3862 9.0973 35.0789C10.8151 35.7993 12.6359 36.1634 14.516 36.1634C16.3961 36.1634 18.2168 35.7993 19.9347 35.0828C21.5891 34.3942 23.0934 33.3899 24.3638 32.1261C25.6463 30.8595 26.6516 29.3792 27.3522 27.7365C28.0794 26.0352 28.4525 24.2037 28.4486 22.3535C28.4486 20.4219 28.0528 18.5457 27.2651 16.7765Z"
              fill="#E55C5C"
            />
          </svg>
          <span className="text-4xl font-bold text-text dark:text-white">$12.56</span>
          <span className="text-xl font-bold line-through text-throughColor">$15.56</span>
        </div>
        <div className='flex items-center mt-6 space-x-3'>
          <Button bg={"button"} value={'Add to card'} />
          <Button bg={"white"} value={'Discover'} />
        </div>
      </div>
      <div className='flex justify-center order-1 lg:order-2'>
        <img className='' src="./assets/image/bannerImage.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
