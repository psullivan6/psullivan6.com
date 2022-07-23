import _sortBy from 'lodash/sortBy';
import { parseToHsl, parseToRgb, readableColor } from 'polished';
import type { FormEvent } from 'react';
import { useState } from 'react';

function deltaE(rgbA, rgbB) {
  let labA = rgb2lab(rgbA);
  let labB = rgb2lab(rgbB);
  let deltaL = labA[0] - labB[0];
  let deltaA = labA[1] - labB[1];
  let deltaB = labA[2] - labB[2];
  let c1 = Math.sqrt(labA[1] * labA[1] + labA[2] * labA[2]);
  let c2 = Math.sqrt(labB[1] * labB[1] + labB[2] * labB[2]);
  let deltaC = c1 - c2;
  let deltaH = deltaA * deltaA + deltaB * deltaB - deltaC * deltaC;
  deltaH = deltaH < 0 ? 0 : Math.sqrt(deltaH);
  let sc = 1.0 + 0.045 * c1;
  let sh = 1.0 + 0.015 * c1;
  let deltaLKlsl = deltaL / 1.0;
  let deltaCkcsc = deltaC / sc;
  let deltaHkhsh = deltaH / sh;
  let i = deltaLKlsl * deltaLKlsl + deltaCkcsc * deltaCkcsc + deltaHkhsh * deltaHkhsh;
  return i < 0 ? 0 : Math.sqrt(i);
}

function rgb2lab(rgb) {
  let r = rgb[0] / 255,
    g = rgb[1] / 255,
    b = rgb[2] / 255,
    x,
    y,
    z;
  r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
  g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
  b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
  x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
  y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.0;
  z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;
  x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
  y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
  z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
  return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
}

const getColorCategory = (color) => {
  const { red, green, blue } = parseToRgb(color);

  const deltaArray = [
    { category: 'red', delta: deltaE([red, green, blue], [255, 0, 0]) },
    { category: 'orange', delta: deltaE([red, green, blue], [255, 128, 0]) },
    { category: 'yellow', delta: deltaE([red, green, blue], [255, 255, 0]) },
    { category: 'green', delta: deltaE([red, green, blue], [0, 255, 0]) },
    { category: 'blue', delta: deltaE([red, green, blue], [0, 0, 255]) },
    { category: 'purple', delta: deltaE([red, green, blue], [200, 0, 255]) },
    { category: 'gray', delta: deltaE([red, green, blue], [230, 230, 230]) },
    { category: 'black', delta: deltaE([red, green, blue], [0, 0, 0]) },
    { category: 'white', delta: deltaE([red, green, blue], [255, 255, 255]) },
  ];

  const deltaMatch = Math.min(...deltaArray.map((item) => item.delta));

  return deltaArray.find((item) => item.delta === deltaMatch)?.category;
};

// 0 3 6 9 C F
const numberToHexMap = [null, '0', '3', '6', '9', 'C', 'F'];
const excludedNumbers = [0, 7, 8, 9];
const colorsList = [
  ...new Set(
    Array(667)
      .fill('')
      .map((item, index) => index)
      .filter(
        (item) =>
          !excludedNumbers.some((excludedNumber) =>
            item.toString().includes(excludedNumber.toString())
          )
      )
      .map((colorNumber) => colorNumber.toString().padStart(3, '1'))
      .map((colorNumberString) =>
        colorNumberString
          .split('')
          .map((numberString) => numberToHexMap[parseInt(numberString, 10)])
          .join('')
      )
      .map((color) => `#${color}`)
  ),
];

const complexColorsList = colorsList.map((color) => ({
  color: color,
  category: getColorCategory(color),
  hslObject: parseToHsl(color),
}));

const sortedColorsList = _sortBy(complexColorsList, [
  'category',
  'hslObject.saturation',
  'hslObject.lightness',
]);

export default function Index() {
  const [manualColors, setManualColors] = useState({
    red: [],
    orange: [],
    yellow: [],
    green: [],
    blue: [],
    purple: [],
    gray: [],
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // const formdData = new FormData(event.target);
    // formdData.get('color');
    // console.log('event', formdData.get('color'), event);
  };

  // const handleClick = (event: FormEvent) => {
  // event.target.style.backgroundColor = '#0000000f';
  // event.target.style.color = '#ffffff0f';
  // };

  const handleButtonSubmit = (color: string) => (event: FormEvent) => {
    const form = document.getElementById('form');

    event.target.style.backgroundColor = '#0000000f';
    event.target.style.color = '#ffffff0f';

    const formdData = new FormData(form);
    const colorCategory = formdData.get('color')?.toString() as keyof typeof manualColors;

    console.log('');

    setManualColors({
      ...manualColors,
      [colorCategory]: [...new Set([...manualColors[colorCategory], color])],
    });
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <h1>Color Experiment {colorsList.length} colors</h1>
      <fieldset>
        <ul>
          <li>
            <label>
              <input type="radio" name="color" value="red" />
              Red
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="color" value="orange" />
              Orange
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="color" value="yellow" />
              Yellow
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="color" value="green" />
              Green
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="color" value="blue" />
              Blue
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="color" value="purple" />
              Purple
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="color" value="gray" />
              Gray
            </label>
          </li>
        </ul>
      </fieldset>
      <div
        style={{
          display: 'grid',
          gap: '0.5rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(3rem, 1fr))',
        }}
      >
        {sortedColorsList.map(({ color }) => (
          <button
            key={color}
            style={{
              width: '3rem',
              height: '3rem',
              borderRadius: '0.25rem',
              border: 'none',
              backgroundColor: color,
              color: readableColor(color),
            }}
            type="submit"
            onClick={handleButtonSubmit(color)}
          >
            {color}
          </button>
        ))}
      </div>
      <pre>{JSON.stringify(manualColors, null, 2)}</pre>
    </form>
  );
}
