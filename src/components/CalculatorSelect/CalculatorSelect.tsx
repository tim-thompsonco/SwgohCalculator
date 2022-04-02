import {
  FormControl, Grid, MenuItem, Select, Typography, makeStyles 
} from '@material-ui/core';
import React, { ChangeEvent } from 'react';
import { convertLabelToId } from '../../utilities/Utilities';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  formControl: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(1, 0)
  },
  levelLabel: {
    color: theme.palette.primary.main,
    fontSize: 18,
  },
  levelSelect: {
    background: theme.palette.secondary.main,
    paddingBottom: theme.spacing(2),
    height: theme.spacing(3),
    width: theme.spacing(8)
  },
  rightAlignItem: { justifyItems: 'flex-end' }
}));

interface ICalculatorSelectProps {
    handleUpgrade(e: ChangeEvent<{ value: unknown }>):  void,
    upgradeCosts: Record<number, number>,
    upgradeLabel: string,
    upgradeValue: number
}

const CalculatorSelect: React.FC<ICalculatorSelectProps> = ({
  handleUpgrade, upgradeCosts, upgradeLabel, upgradeValue 
}) => {
  const classes = useStyles();

  return (
    <Grid className={classes.container} container>
      <Grid item sm={2} xs={4}>
        <Typography className={classes.levelLabel}>
          {upgradeLabel}
        </Typography>
      </Grid>
      <Grid className={classes.rightAlignItem} item sm={1} xs={2}>
        <FormControl className={classes.formControl} variant="filled">
          <Select
            className={classes.levelSelect}
            defaultValue={1}
            id={convertLabelToId(upgradeLabel)}
            onChange={handleUpgrade}
            value={upgradeValue}
          >
            {Object.keys(upgradeCosts).map((upgradeCost: string) => {
              return <MenuItem key={upgradeCost} value={upgradeCost}>{upgradeCost}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default CalculatorSelect;