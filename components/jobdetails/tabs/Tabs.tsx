import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SIZES } from '../../../constants';
import { btnFunction, btnTextFunction, styles } from './tabs.style';

type ITabButton = {
  name: string;
  activeTab: string;
  onHandleSearchType: () => void;
};

const TabButton = ({ name, activeTab, onHandleSearchType }: ITabButton) => {
  return (
    <TouchableOpacity style={btnFunction(name, activeTab)} onPress={onHandleSearchType}>
      <Text style={btnTextFunction(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
};

type IJobTabs = {
  tabs: string[];
  activeTab: string;
  setActiveTab: (item: string) => void;
};

const JobTabs = ({ tabs, activeTab, setActiveTab }: IJobTabs) => {
  return (
    <View style={styles.container}>
      <FlatList data={tabs} horizontal showsHorizontalScrollIndicator={false} renderItem={({ item }) => <TabButton name={item} activeTab={activeTab} onHandleSearchType={() => setActiveTab(item)} />} contentContainerStyle={{ columnGap: SIZES.small / 2 }} keyExtractor={(item) => item} />
    </View>
  );
};

export { JobTabs };
