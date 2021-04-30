import {StyleSheet} from 'react-native';

export const listItemStyles = StyleSheet.create({
  containerStyles: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#E5E5E5',
  },

  itemStyles: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 17,
    paddingRight: 20,
    paddingLeft: 16,
    paddingTop: 17,
  },
  textStyles: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    flexBasis: '70%',
    color: '#111827',
  },
});
