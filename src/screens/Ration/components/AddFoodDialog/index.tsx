import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { Trans } from "@lingui/react";
import { makeStyles } from "@material-ui/core/styles";
import { Food_Type_Enum } from "../../../../graphql/generated/graphql";
import { useStore, State } from "./useStore";

interface Props extends State {
  open: boolean;
  setOpen: any;

  onConfirm(store: State): () => void;
}

const useStyles = makeStyles((theme) => ({
  field: {
    marginTop: theme.spacing(1),
    width: "100%",
  },
}));

export const AddFoodDialog = ({
  open,
  setOpen,

  onConfirm,

  ...storeProps
}: Props) => {
  const classes = useStyles();

  const store = useStore({ ...storeProps });

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <Trans>Add food</Trans>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-title">
          <Trans>Always add attributes per 100g</Trans>
        </DialogContentText>
        <TextField
          className={classes.field}
          label={<Trans>Name</Trans>}
          defaultValue={store.name}
          onChange={(event) => store.setName(event.target.value)}
        />

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={store.type}
          onChange={(event) => store.setType(event.target.value as any)}
          className={classes.field}
        >
          <MenuItem
            value={Food_Type_Enum.Vegetables}
            children={Food_Type_Enum.Vegetables}
          />
          <MenuItem
            value={Food_Type_Enum.Fruits}
            children={Food_Type_Enum.Fruits}
          />
          <MenuItem
            value={Food_Type_Enum.Meat}
            children={Food_Type_Enum.Meat}
          />

          <MenuItem
            value={Food_Type_Enum.Fish}
            children={Food_Type_Enum.Fish}
          />

          <MenuItem
            value={Food_Type_Enum.Custom}
            children={Food_Type_Enum.Custom}
          />
        </Select>

        <TextField
          className={classes.field}
          label={<Trans>Energy (cal)</Trans>}
          defaultValue={store.energy_cal}
          type={"number"}
          onChange={(event) => store.setEnergyCal(event.target.value as any)}
        />
        <TextField
          className={classes.field}
          label={<Trans>Energy (kJ)</Trans>}
          defaultValue={store.energy_kj}
          type={"number"}
          onChange={(event) => store.setEnergyKj(event.target.value as any)}
        />
        <TextField
          className={classes.field}
          label={<Trans>Proteins (g)</Trans>}
          defaultValue={store.proteins}
          type={"number"}
          onChange={(event) => store.setProteins(event.target.value as any)}
        />
        <TextField
          className={classes.field}
          label={<Trans>Carbohydrates (g)</Trans>}
          defaultValue={store.carbohydrates}
          type={"number"}
          onChange={(event) =>
            store.setCarbohydrates(event.target.value as any)
          }
        />
        <TextField
          className={classes.field}
          label={<Trans>Fats (g)</Trans>}
          defaultValue={store.fats}
          type={"number"}
          onChange={(event) => store.setFats(event.target.value as any)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          <Trans>Cancel</Trans>
        </Button>
        <Button onClick={onConfirm(store)} color="primary" autoFocus>
          <Trans>Submit</Trans>
        </Button>
      </DialogActions>
    </Dialog>
  );
};
