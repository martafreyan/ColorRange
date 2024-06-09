import classes from './ColorRange.module.css';
import { calculateThumb } from './ColorRange.services';

const ColorRange = ({ value, isFilter, isPrices, defaultLQS = 78 }) => {
  return (
    <div className={classes.lqsSliderBox}>
      {value !== undefined && (
        <output
          style={{
            left: calculateThumb({
              value,
              max: 100,
              min: 1,
              correction: -12
            })
          }}
          htmlFor="lqs-current"
          className={classes.lqsCurrentOutput}
        >
          CURRENT
        </output>
      )}
      <input
        type="range"
        min="1"
        max="100"
        name="lqs-current"
        defaultValue={value}
        className={classes.lqsSlider}
      ></input>
      {value <= defaultLQS ? (
        <output
          style={{
            left: calculateThumb({ value: defaultLQS, max: 100, min: 1 })
          }}
          className={`${classes.lqsPotentialOutput} ${
            isFilter ? classes.lqsPotentialFilter : ''
          } ${isPrices ? classes.lqsPotentialPrices : ''}`}
        >
          POTENTIAL
        </output>
      ) : null}
    </div>
  );
};

export default ColorRange;
