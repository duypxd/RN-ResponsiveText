import React, {useEffect, useState} from 'react';
import {Text, Dimensions, AppState, AppStateStatus} from 'react-native';

type FontType = 'h1' | 'h2' | 'h3' | 'button' | 'text' | 'small';

const FontSize: {[type in FontType]: number} = {
  h1: 32,
  h2: 24,
  h3: 20,
  button: 16,
  text: 14,
  small: 12,
};

const TextResponsive = ({type, children}: {type: FontType; children: any}) => {
  const [newFontSize, setFontSize] = useState<number>(14);
  const fontSizeMatrix = {
    h1: {min: 32, max: 40},
    h2: {min: 24, max: 32},
    h3: {min: 20, max: 28},
    button: {min: 16, max: 24},
    text: {min: 14, max: 22},
    small: {min: 12, max: 20},
  };

  const getResponsiveFontSize = (type: FontType = 'text') => {
    const {fontScale} = Dimensions.get('window');
    const {min, max} = fontSizeMatrix[type];
    const newSize: number = Math.ceil(FontSize[type] * fontScale);
    if (newSize <= min) {
      return min;
    } else if (newSize >= max) {
      return max;
    } else {
      return newSize;
    }
  };

  const _handleAppStateChange = (appStateStatus: AppStateStatus) => {
    if (appStateStatus === 'active') {
      const fontSize = getResponsiveFontSize(type);
      setFontSize(fontSize);
    }
  };

  useEffect(() => {
    _handleAppStateChange('active');
    AppState.addEventListener('change', _handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, []);

  return (
    <Text
      allowFontScaling={false}
      style={[
        {
          fontSize: newFontSize,
          marginTop: 20,
        },
      ]}>
      {children}
    </Text>
  );
};

export default TextResponsive;
