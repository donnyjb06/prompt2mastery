import IconToolTip from '../IconToolTip/IconToolTip';
import { InfiniteSlider } from '../ui/infinite-slider';
import { LANGUAGE_ICONS } from '@/lib/constants';
const InfiniteIconSlider = () => {
  return (
    <InfiniteSlider gap={50} className='z-50' speedOnHover={20}>
      {LANGUAGE_ICONS.map((language) => (
        <IconToolTip languageDetails={language} key={language.language}/>
      ))}
    </InfiniteSlider>
  );
};

export default InfiniteIconSlider;
