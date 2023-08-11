import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

export default function TodoItem({ item, removefunc, togglefunc }) {
  const labelId = `checkbox-list-label-${item.id}`;
  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="comments" onClick={removefunc}>
            <DeleteOutlineRoundedIcon />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton
          role={undefined}
          // onClick={() => handleToggle(item)}
          dense
        >
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={item.completed}
              tabIndex={-1}
              disableRipple
              inputProps={{ "aria-labelledby": labelId }}
              onChange={togglefunc}
            />
          </ListItemIcon>
          <ListItemText id={labelId} primary={item.text} />
        </ListItemButton>
      </ListItem>
    </>
  );
}
