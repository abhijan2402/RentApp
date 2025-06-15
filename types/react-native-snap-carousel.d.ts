declare module 'react-native-snap-carousel' {
  import {Component} from 'react';
  import {
    FlatListProps,
    ViewStyle,
    StyleProp,
    LayoutChangeEvent,
    ScrollViewProps,
  } from 'react-native';

  export interface CarouselProps<T> extends FlatListProps<T> {
    data: T[];
    renderItem: ({item, index}: {item: T; index: number}) => React.ReactNode;
    sliderWidth: number;
    itemWidth: number;
    itemHeight?: number;
    sliderHeight?: number;
    enableSnap?: boolean;
    loop?: boolean;
    autoplay?: boolean;
    autoplayDelay?: number;
    autoplayInterval?: number;
    containerCustomStyle?: StyleProp<ViewStyle>;
    contentContainerCustomStyle?: StyleProp<ViewStyle>;
    inactiveSlideScale?: number;
    inactiveSlideOpacity?: number;
    onSnapToItem?: (index: number) => void;
    scrollEnabled?: boolean;
    useScrollView?: boolean;
    vertical?: boolean;
    lockScrollWhileSnapping?: boolean;
    removeClippedSubviews?: boolean;
  }

  export default class Carousel<T> extends Component<CarouselProps<T>> {}
}
