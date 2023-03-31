import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={33} height={11} viewBox="0 0 33 11" fill="none">
      <Path
        d="M7.962 2.72a7.043 7.043 0 00-1.554-.714c-.523-.168-.985-.252-1.386-.252-.448 0-.803.084-1.064.252a.79.79 0 00-.392.7c0 .27.088.5.266.686.186.177.415.327.686.448.28.112.658.238 1.134.378.662.196 1.204.392 1.624.588.429.196.793.485 1.092.868.298.383.448.887.448 1.512 0 .597-.164 1.12-.49 1.568-.318.439-.761.775-1.33 1.008-.56.233-1.204.35-1.932.35a6.19 6.19 0 01-2.24-.42A6.475 6.475 0 01.92 8.544l.784-1.596c.494.457 1.05.817 1.666 1.078.616.261 1.19.392 1.722.392.522 0 .933-.098 1.232-.294.298-.205.448-.48.448-.826a.904.904 0 00-.28-.686 1.905 1.905 0 00-.686-.448c-.28-.112-.663-.238-1.148-.378a13.596 13.596 0 01-1.624-.574 2.848 2.848 0 01-1.078-.84c-.299-.383-.448-.882-.448-1.498 0-.57.149-1.064.448-1.484.308-.43.737-.76 1.288-.994.56-.233 1.204-.35 1.932-.35.634 0 1.26.093 1.876.28.625.187 1.18.439 1.666.756L7.962 2.72zM14.947 10v-.91a2.455 2.455 0 01-1.008.742c-.411.168-.882.252-1.414.252-.523 0-.985-.098-1.386-.294a2.265 2.265 0 01-.91-.84 2.253 2.253 0 01-.322-1.19c0-.7.247-1.246.742-1.638.494-.401 1.194-.607 2.1-.616h2.184V5.31c0-.439-.145-.78-.434-1.022-.29-.243-.71-.364-1.26-.364-.71 0-1.452.233-2.226.7l-.658-1.26c.588-.327 1.12-.56 1.596-.7.485-.15 1.05-.224 1.694-.224.97 0 1.722.233 2.254.7.541.467.816 1.12.826 1.96l.014 4.9h-1.792zm-1.988-1.316c.522 0 .97-.121 1.344-.364.373-.252.583-.56.63-.924v-.672h-1.89c-.486 0-.845.075-1.078.224-.224.14-.336.373-.336.7 0 .317.116.57.35.756.242.187.569.28.98.28zm4.482-6.16l1.904-.014 1.96 5.698 1.918-5.698h1.834L22.201 10h-1.876l-2.884-7.476zm11.53-.07c1.195 0 2.09.34 2.688 1.022.607.681.91 1.638.91 2.87 0 .243-.005.425-.014.546h-5.53c.121.532.369.952.742 1.26.383.299.85.448 1.4.448.382 0 .746-.07 1.092-.21.354-.15.663-.36.924-.63l.98 1.022c-.373.41-.83.728-1.372.952a4.539 4.539 0 01-1.778.336c-.766 0-1.442-.159-2.03-.476a3.352 3.352 0 01-1.344-1.33c-.317-.579-.476-1.241-.476-1.988 0-.747.159-1.41.476-1.988a3.42 3.42 0 011.358-1.344c.579-.327 1.236-.49 1.974-.49zm1.932 3.22c-.019-.55-.2-.99-.546-1.316-.345-.327-.803-.49-1.372-.49-.532 0-.98.163-1.344.49-.355.317-.574.756-.658 1.316h3.92z"
        fill="#FE9870"
      />
    </Svg>
  );
}

const SvgSave = React.memo(SvgComponent);
export default SvgSave;