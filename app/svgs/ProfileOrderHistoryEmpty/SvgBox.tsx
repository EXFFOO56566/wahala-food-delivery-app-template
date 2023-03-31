import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={104} height={84} viewBox="0 0 104 84" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M103.143 4.056v70.411c0 5.265-4.241 9.533-9.473 9.533H58.143V1.838c.75-.709 1.505-1.41 3.002-1.41 3.024 0 3.024 2.862 6.047 2.862 2.986 0 3.023-2.792 5.937-2.859.036-.002.072-.002.11-.002 3.025 0 3.025 2.861 6.049 2.861C82.31 3.29 82.31.43 85.337.43c3.023 0 3.023 2.861 6.049 2.861 2.466 0 2.921-1.905 4.648-2.606a3.657 3.657 0 011.398-.255c2.643 0 2.978 2.186 5.038 2.736a.918.918 0 01.673.891z"
        fill="#DB9A6C"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M103.143 4.056v70.411c0 5.265-4.385 9.533-9.794 9.533H86c5.409 0 9.794-4.268 9.794-9.533V.684A3.89 3.89 0 0197.24.429c2.732 0 3.077 2.186 5.207 2.736a.924.924 0 01.696.891z"
        fill="#C48252"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M70.714 84H9.638C4.315 84 0 79.732 0 74.467V1.64C0 .96.724.496 1.336.802c1.548.775 2.086 2.488 4.466 2.488C8.88 3.29 8.88.43 11.957.43c3.077 0 3.077 2.861 6.153 2.861 3.077 0 3.077-2.861 6.155-2.861 3.076 0 3.076 2.861 6.152 2.861S33.493.43 36.572.43c3.076 0 3.076 2.861 6.153 2.861 1.554 0 2.324-.73 3.1-1.452.762-.709 1.53-1.41 3.054-1.41 3.077 0 3.077 2.862 6.153 2.862 3.038 0 3.076-2.792 6.041-2.859v74.036c0 5.265 4.316 9.533 9.641 9.533z"
        fill="#F5B387"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44.403 29c.868.298 1.162 1.029 1.359 1.823.25 1.005.275 2.034.203 3.058a31.796 31.796 0 01-3.997 13.442c-.729 1.305-1.61 2.503-2.732 3.506-.768.686-1.618 1.234-2.633 1.471-1.821.425-3.3-.254-4.223-1.924-.584-1.055-.875-2.203-1.05-3.384-.287-1.953-.247-3.908-.027-5.863.002-.026 0-.052 0-.155-.084.165-.137.267-.187.37-1.826 3.753-3.792 7.428-6.007 10.968l-.015.023c-.356.564-.363.577-.962.246-1.079-.595-1.937-1.399-2.37-2.589-.246-.676-.183-1.363-.044-2.042.462-2.265.953-4.523 1.41-6.788.428-2.117.833-4.239.794-6.414-.012-.647-.083-1.287-.331-1.892-.279-.68-.786-1.038-1.431-1.016-.427.014-.783.21-1.105.475-.576.476-1.004 1.075-1.351 1.726-1.383 2.594-2.19 5.342-2.155 8.305.007.637.127 1.086.433 1.752-.812.405-1.643.728-2.573.574-.737-.121-1.22-.717-1.345-1.617-.154-1.113-.01-2.21.22-3.297.535-2.523 1.554-4.827 3.202-6.827 1.186-1.437 2.613-2.538 4.445-3.033.885-.238 1.787-.32 2.696-.17 1.533.254 2.43 1.198 2.84 2.656.302 1.078.344 2.181.296 3.292-.092 2.128-.48 4.215-.864 6.302-.328 1.793-.666 3.583-.999 5.375a.26.26 0 00.032.183l.555-1.289c1.957-4.544 3.912-9.09 5.874-13.632.284-.657.602-1.299.91-1.946.362-.762.926-1.013 1.741-.761.837.258 1.469.809 2.014 1.47.039.046.048.154.022.212-.971 2.188-1.594 4.488-2.177 6.8-.51 2.023-.932 4.065-1.175 6.139-.167 1.425-.306 2.856-.022 4.283.06.299.155.6.289.873.29.593.785.798 1.428.635.48-.121.877-.388 1.235-.716.815-.743 1.415-1.651 1.947-2.605 1.36-2.437 2.29-5.046 3.046-7.72.58-2.054 1.032-4.135 1.234-6.263.1-1.05.15-2.1-.074-3.145-.02-.09.036-.248.109-.296.313-.207.645-.386.97-.575h.545zM88.143 9C86.959 9 86 9.789 86 10.761v62.906c0 .974.959 1.762 2.143 1.762 1.184 0 2.143-.788 2.143-1.762V10.761c0-.972-.959-1.761-2.143-1.761z"
        fill="#B3764B"
      />
    </Svg>
  );
}

const SvgBox = React.memo(SvgComponent);
export default SvgBox;
