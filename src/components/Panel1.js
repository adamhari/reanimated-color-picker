import React, { useEffect, useRef, useState, useContext } from 'react';
import { Image } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import styles, { CTX, getStyle } from '../GlobalStyles';

export function Panel1({ thumbSize, style = {} }) {
  const {
    registerHandle,
    activeHueStyle,
    previewTextColor,
    previewColorWithoutOpacity,
    updateSaturation,
    updateBrightness,
    onGestureEventFinish,
    thumbsSize,
  } = useContext(CTX);

  thumbSize = thumbSize ?? thumbsSize;
  const borderRadius = getStyle(style, 'borderRadius', 5);

  const idX = useRef('opacity' + Math.random()).current;
  const idY = useRef('opacity' + Math.random()).current;

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handlePosX = useSharedValue(0);
  const handlePosY = useSharedValue(0);
  const handleScale = useSharedValue(1);

  useEffect(() => {
    registerHandle({
      id: idX,
      channel: 's',
      axis: 'x',
      width,
      height,
      thumbSize: thumbSize,
      isReversed: false,
      handle: handlePosX,
    });
    registerHandle({
      id: idY,
      channel: 'b',
      axis: 'y',
      width,
      height,
      thumbSize: thumbSize,
      isReversed: true,
      handle: handlePosY,
    });
  }, [width, height]);

  const panel_handleStyle = useAnimatedStyle(() => ({
    backgroundColor: previewTextColor.value === '#ffffff' ? '#ffffff50' : '#00000050',
    borderColor: previewTextColor.value,
    transform: [{ translateX: handlePosX.value }, { translateY: handlePosY.value }, { scale: handleScale.value }],
  }));

  const updateSB = (saturation, brightness) => {
    updateSaturation(saturation);
    updateBrightness(brightness);
  };

  const panel_GestureEvent = useAnimatedGestureHandler(
    {
      onStart: (event, ctx) => {
        ctx.x = event.x;
        ctx.y = event.y;
        handleScale.value = withTiming(1.2, { duration: 100 });
      },
      onActive: (event, ctx) => {
        const clamp = (v, max) => Math.min(Math.max(v, 0), max);

        const x = event.translationX;
        const y = event.translationY;
        const posX = clamp(x + ctx.x, width);
        const posY = clamp(y + ctx.y, height);
        const percentX = posX / width;
        const percentY = posY / height;

        const saturationX = Math.round(percentX * 100);
        const brightnessY = Math.round(100 - percentY * 100);

        runOnJS(updateSB)(saturationX, brightnessY);
      },
      onFinish: () => {
        handleScale.value = withTiming(1, { duration: 100 });
        runOnJS(onGestureEventFinish)();
      },
    },
    [width, height]
  );

  const onLayout = ({ nativeEvent }) => {
    setWidth(nativeEvent.layout.width);
    setHeight(nativeEvent.layout.height);
  };

  return (
    <PanGestureHandler onGestureEvent={panel_GestureEvent} minDist={0}>
      <Animated.View
        onLayout={onLayout}
        style={[styles.panel_container, { height: width }, style, { position: 'relative' }, activeHueStyle]}
      >
        <Image source={require('../assets/Background1.png')} style={{ borderRadius, width, height }} />
        <Animated.View
          style={[
            styles.handle,
            {
              width: thumbSize,
              height: thumbSize,
              borderRadius: thumbSize / 2,
            },
            panel_handleStyle,
          ]}
        >
          <Animated.View style={[styles.handleInner, { borderRadius: thumbSize / 2 }, previewColorWithoutOpacity]} />
        </Animated.View>
      </Animated.View>
    </PanGestureHandler>
  );
}