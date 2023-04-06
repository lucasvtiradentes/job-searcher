import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { styles, btnImg } from './screenheader.style';

type Props = {
  iconUrl: ImageSourcePropType;
  dimension: string;
  handlePress: () => void;
};
const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }: Props) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image source={iconUrl} resizeMode="cover" style={btnImg(dimension)} />
    </TouchableOpacity>
  );
};

export { ScreenHeaderBtn };
