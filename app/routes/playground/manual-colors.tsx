import { readableColor } from 'polished';

const manualColors = {
  red: [
    '#930',
    '#C00',
    '#C03',
    '#F00',
    '#F03',
    '#F06',
    '#F30',
    '#F33',
    '#F36',
    '#900',
    '#903',
    '#C33',
    '#C36',
    '#933',
    '#F66',
    '#F69',
    '#C30',
    '#C06',
    '#F09',
    '#F39',
    '#600',
    '#936',
    '#603',
    '#633',
    '#906',
    '#F99',
    '#F6C',
    '#C39',
    '#C09',
    '#FCF',
    '#F3C',
    '#F0C',
    '#C0C',
    '#C69',
    '#966',
    '#F9C',
    '#FCC',
    '#F0F',
    '#F3F',
    '#F6F',
    '#F9F',
  ],
  orange: [
    '#FC6',
    '#FC9',
    '#F60',
    '#F90',
    '#F96',
    '#F93',
    '#F63',
    '#C60',
    '#C63',
    '#630',
    '#960',
    '#C96',
    '#963',
    '#C66',
    '#C99',
  ],
  yellow: [
    '#FF3',
    '#FF6',
    '#FF9',
    '#FC3',
    '#FF0',
    '#FC0',
    '#C90',
    '#FFC',
    '#CC6',
    '#CF0',
    '#CC9',
    '#C93',
    '#CC3',
    '#CC0',
    '#993',
    '#990',
    '#996',
  ],
  green: [
    '#3F6',
    '#3F9',
    '#6F3',
    '#9F3',
    '#6F6',
    '#6F9',
    '#9F6',
    '#9F9',
    '#0C0',
    '#090',
    '#093',
    '#390',
    '#0C3',
    '#0C6',
    '#096',
    '#690',
    '#3C0',
    '#6C0',
    '#9C0',
    '#0F0',
    '#0F3',
    '#0F6',
    '#0F9',
    '#3F0',
    '#6F0',
    '#9F0',
    '#3F3',
    '#3C3',
    '#6C6',
    '#393',
    '#693',
    '#396',
    '#063',
    '#6C9',
    '#060',
    '#030',
    '#363',
    '#360',
    '#3C6',
    '#6C3',
    '#9C3',
    '#3C9',
    '#696',
    '#0C9',
    '#CF3',
    '#CF6',
    '#9FC',
    '#6FC',
    '#0FC',
    '#CFC',
    '#3FC',
    '#066',
    '#9C9',
    '#9CC',
    '#CF9',
    '#663',
    '#660',
    '#9C6',
    '#399',
    '#0CC',
    '#099',
    '#3CC',
    '#6CC',
    '#366',
    '#699',
  ],
  blue: [
    '#03F',
    '#06F',
    '#30F',
    '#33F',
    '#33C',
    '#0CF',
    '#09F',
    '#09C',
    '#9FF',
    '#6FF',
    '#36F',
    '#0FF',
    '#39F',
    '#3CF',
    '#3FF',
    '#6CF',
    '#00F',
    '#00C',
    '#30C',
    '#03C',
    '#06C',
    '#039',
    '#009',
    '#36C',
    '#369',
    '#069',
    '#39C',
    '#9CF',
    '#69F',
    '#69C',
    '#CFF',
    '#339',
    '#309',
    '#006',
    '#003',
    '#336',
    '#036',
  ],
  purple: [
    '#60F',
    '#63F',
    '#639',
    '#63C',
    '#609',
    '#60C',
    '#306',
    '#96F',
    '#96C',
    '#939',
    '#969',
    '#66C',
    '#93F',
    '#93C',
    '#90C',
    '#909',
    '#90F',
    '#C9F',
    '#99F',
    '#99C',
    '#CCF',
    '#66F',
    '#C6F',
    '#606',
    '#636',
    '#C3F',
    '#C3C',
    '#C0F',
    '#669',
    '#C6C',
    '#C9C',
  ],
  gray: ['#666', '#333', '#999', '#CCC', '#FFF', '#000', '#033', '#330', '#300', '#303'],
};

const ManualColorsPage = () => {
  return (
    <section>
      <ul style={{ margin: 0, padding: 0 }}>
        {Object.keys(manualColors).map((colorCategory) => (
          <li key={colorCategory} style={{ marginBottom: '3rem' }}>
            <ul
              style={{
                display: 'grid',
                gap: '0.5rem',
                gridTemplateColumns: 'repeat(auto-fit, 3rem)',
                margin: 0,
                padding: 0,
                listStyle: 'none',
              }}
            >
              {manualColors[colorCategory].map((color) => (
                <li
                  key={color}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '0.25rem',
                    border: 'none',
                    backgroundColor: color,
                    color: readableColor(color),
                    fontFamily: 'monospace',
                  }}
                >
                  {color}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ManualColorsPage;