import { View, Text } from 'react-native';

import styles from './specifics.style';

type IProps = {
  title: string;
  points: string[];
};

const Specifics = ({ title, points }: IProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>

      <View style={styles.pointsContainer}>
        {points.map((item, index) => (
          <View style={styles.pointWrapper} key={item + index}>
            <View style={styles.pointDot} />
            <Text style={styles.pointText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export { Specifics };
