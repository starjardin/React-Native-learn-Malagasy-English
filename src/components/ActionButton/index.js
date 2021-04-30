import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  actionButtonStyles: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    width: 16,
    height: 16,
  },
  TextStyle: {
    textTransform: 'capitalize',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'right',
    paddingRight: 10,
  },
});

export default function Button({
  onPressButton,
  buttonText,
  textColor,
  children,
  style,
  rowRef,
  ...restProps
}) {
  let touchProps = {
    style: [styles.actionButtonStyles, {...style}],
    activeOpacity: 0.5,
    onPress: onPressButton,
  };
  return (
    <TouchableOpacity {...touchProps}>
      <Text style={[styles.TextStyle, {color: textColor}]} ref={rowRef}>
        {buttonText}
      </Text>
      {children}
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  buttonText: null,
  onPress: () => {},
  children: null,
};

Button.propTypes = {
  buttonText: PropTypes.string,
  onPress: PropTypes.func,
  children: PropTypes.node,
};

/*

    App
      List
        ListItem // renders one Action button // click here
        ** if I change something here : all of the buttons will changed
        Basicaly I can not really change my props over here.
          action button

      Find the clicked element and target it.

      key={answer.id}
      text={answer.text}
      onPress={() => this.answer(answer.correct)}
      style={this.state.btnColor}
      correct={this.state.answerCorrect

      nswer.id === selectedId && answerCorrect ? 
      styleForCorrectAnswer : 
      answer.id === selectedId && !answerCorrect ?
        styleForWrongAnswer :
      styleForDefaultAnswer
*/

/*

  ListItem: render one button Each
  {this.state.correct
?
<TouchableOpacity onPress={onPress} style={{backgroundColor:'green'}}>
      <Text style={styles.text}>Correct</Text>
    </TouchableOpacity>
:
<TouchableOpacity onPress={onPress} style={{backgroundColor:'red'}}>
      <Text style={styles.text}>False</Text>
    </TouchableOpacity>
}


*/
